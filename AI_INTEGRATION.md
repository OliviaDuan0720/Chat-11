# AI 专业分析接入说明

当前前端不再硬编码卡路里，也不再假装识别图片。

会员版专业分析需要一个真实 AI 后端：

- 文字饮食分析：文本模型即可
- 拍照食物分析：需要视觉语言模型
- 后端接口：`POST /api/analyze-food`
- 模型接口格式：OpenAI-compatible `/v1/chat/completions`

## 可接的模型方式

可以接开源/本地模型，但不要直接塞进静态 H5 前端里。正确结构是：

1. App 前端上传文字或图片
2. 后端调用模型
3. 模型返回 JSON
4. 前端展示卡路里区间、超标项和建议

可选部署方式：

- Ollama + 支持视觉的模型
- LM Studio 本地 OpenAI-compatible Server
- vLLM / llama.cpp server
- 云端 OpenAI-compatible API

## 启动方式

## 推荐：Qwen3-VL + Ollama

拍照识别食物要用视觉语言模型。推荐先用：

```powershell
ollama pull qwen3-vl:8b
ollama run qwen3-vl:8b
```

然后在项目目录启动后端：

```powershell
$env:AI_BASE_URL="http://127.0.0.1:11434/v1"
$env:AI_API_KEY="local"
$env:AI_MODEL="qwen3-vl:8b"
node server.js
```

注意：

- `qwen3:8b` 是文本模型，不能直接看照片
- `qwen3-vl:8b` 支持文字 + 图片输入，适合拍照识别食物
- 如果只做文字饮食分析，可以用文本模型
- 如果要拍照估算卡路里，必须用视觉语言模型

## 通用启动方式

先设置环境变量：

```powershell
$env:AI_BASE_URL="http://127.0.0.1:11434/v1"
$env:AI_API_KEY="local"
$env:AI_MODEL="qwen3-vl:8b"
node server.js
```

然后打开：

```text
http://127.0.0.1:5173
```

如果没有设置 `AI_MODEL`，前端会显示“AI 专业分析未连接”，不会编造结果。

## 后端返回 JSON 格式

模型必须返回：

```json
{
  "title": "这餐蛋白质不错，但蔬菜不足",
  "calories": "约 320-420 kcal",
  "verdict": "真实评价：这餐不算超标，但结构偏单一，缺少蔬菜和膳食纤维。",
  "tips": [
    "下一餐补一份蔬菜。",
    "今天不用断食。",
    "运动可选普拉提、快走、瑜伽或自重力量。"
  ],
  "taskTitle": "轻量活动 15-20 分钟",
  "taskDesc": "普拉提、瑜伽拉伸、快走或自重力量任选一个。"
}
```

## 产品边界

- 卡路里只能显示区间，不能显示成绝对精确值
- 图片不清晰时必须说不确定
- 不建议断食、催吐、过量运动
- 评价要真实，但不能羞辱身材或攻击长相
