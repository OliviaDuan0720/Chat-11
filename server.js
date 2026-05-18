const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const port = Number(process.env.PORT || 5173);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
};

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 12 * 1024 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function parseModelJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI model did not return JSON");
    return JSON.parse(match[0]);
  }
}

function normalizeAnalysis(raw) {
  return {
    title: String(raw.title || "AI 专业分析"),
    calories: String(raw.calories || "热量区间待确认"),
    verdict: String(raw.verdict || "模型没有返回评价。"),
    tips: Array.isArray(raw.tips) ? raw.tips.map(String).slice(0, 5) : [],
    taskTitle: String(raw.taskTitle || raw.task_title || ""),
    taskDesc: String(raw.taskDesc || raw.task_desc || ""),
  };
}

async function analyzeFood(req, res) {
  const model = process.env.AI_MODEL;
  const baseUrl = (process.env.AI_BASE_URL || "http://127.0.0.1:11434/v1").replace(/\/$/, "");
  const apiKey = process.env.AI_API_KEY || "local";

  if (!model) {
    sendJson(res, 503, {
      error:
        "AI_MODEL is not configured. Set AI_BASE_URL and AI_MODEL to an OpenAI-compatible vision/text model endpoint.",
    });
    return;
  }

  try {
    const { text = "", imageDataUrl = "" } = await readJson(req);
    const prompt =
      "你是减脂饮食分析助手。请根据用户的文字或图片估算食物热量区间，并给真实但不羞辱的评价。必须返回 JSON，字段为 title, calories, verdict, tips, taskTitle, taskDesc。calories 必须是区间，如 '约 450-620 kcal'；如果图片不清晰，要说无法准确判断，不要编造。运动建议要提供多个可选项，例如普拉提、快走、瑜伽、自重力量，不要只推荐散步，不要建议断食、催吐或过量运动。\n\n用户饮食描述：" +
      (text || "请根据图片分析");

    let userContent = prompt;

    if (imageDataUrl) {
      userContent = [
        {
          type: "text",
          text: prompt,
        },
      ];
      userContent.push({
        type: "image_url",
        image_url: { url: imageDataUrl },
      });
    }

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "只输出 JSON，不要 Markdown。不要假装精确，无法判断时必须说明不确定性。",
          },
          {
            role: "user",
            content: userContent,
          },
        ],
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      sendJson(res, response.status, { error: message || `AI endpoint returned ${response.status}` });
      return;
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";
    sendJson(res, 200, normalizeAnalysis(parseModelJson(content)));
  } catch (error) {
    sendJson(res, 500, { error: error.message || "AI analysis failed" });
  }
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);

  if (req.method === "POST" && urlPath === "/api/analyze-food") {
    analyzeFood(req, res);
    return;
  }

  const requestedPath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.join(root, requestedPath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "text/plain; charset=utf-8",
    });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Prototype running at http://127.0.0.1:${port}`);
});
