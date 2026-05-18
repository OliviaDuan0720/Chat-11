const roles = [
  {
    id: "huangshang",
    name: "皇上模式",
    aiName: "御膳房总管",
    subtitle: "御膳房总管在线伺候",
    desc: "奴才式伺候，专治晚饭放飞。",
    prop: "总管",
    avatar: "assets/avatars/huangshang.png",
    welcome:
      "启奏皇上，奴才已备好记录册。从今日起，体重、膳食、运动皆由奴才替您盯着。皇上今日先报个体重？",
    lines: {
      weight: "启奏皇上，体重已记入起居注。今日先稳住节奏，午膳记得回来报备。",
      food: "启奏皇上，今日御膳略显豪横。奴才斗胆建议晚膳清淡，饭后散步二十分钟。",
      exercise: "皇上今日龙行虎步，奴才已记下运动记录。若还能再走一小段，龙体更稳。",
      period:
        "启奏皇上，奴才已记下。近日不宜苛责自己，热水备好，监督强度自动降一档。",
      complete: "准奏。皇上今日虽有小乱，但尚可收拾，奴才给您记一功。",
      low: "皇上今日若乏了，奴才不敢催狠。先喝水，走十分钟即可，回来奴才接驾。",
      default:
        "奴才记下了。皇上继续说，体重、膳食、运动、生理期，奴才都能替您归档。",
    },
  },
  {
    id: "nucai",
    name: "奴才模式",
    aiName: "皇上",
    subtitle: "皇上亲自盯着你",
    desc: "威严命令，回来复命。",
    prop: "圣旨",
    avatar: "assets/avatars/nucai.png",
    welcome:
      "朕已上线。今日起，饮食、体重、运动，皆要如实上报。先报体重，朕看看。",
    lines: {
      weight: "已阅。体重记下了，今日不得摆烂，午膳后再来复命。",
      food: "大胆，今日又有放飞之象？朕命你今晚步行三十分钟，晚膳不得再加码。",
      exercise: "尚可。运动记录已收，今日继续保持，莫让朕再三催促。",
      period:
        "朕准你今日从轻。生理期已记下，少折腾，多休息，热水和睡眠优先。",
      complete: "准了。今日任务完成，记一小功，明日继续上朝。",
      low: "朕今日不重罚。先出去走十分钟，回来复命，别一个人闷着。",
      default: "朕听着。把体重、吃了什么、走了多少步，一一报来。",
    },
  },
  {
    id: "coach",
    name: "教练模式",
    aiName: "健身教练",
    subtitle: "专业直接，不讲废话",
    desc: "目标导向，直接给安排。",
    prop: "教练",
    avatar: "assets/avatars/coach.png",
    welcome:
      "训练记录从现在开始。先报当前体重，再告诉我今天吃了什么、动了多少。",
    lines: {
      weight: "体重已记录。看单日波动没有意义，我们看连续趋势。今天继续执行。",
      food: "这顿热量偏高。今晚控制加餐，安排二十到三十分钟快走，把节奏拉回来。",
      exercise: "运动记录已记录。完成得不错，接下来注意补水和拉伸。",
      period:
        "生理期已记录。这几天训练降强度，散步和休息优先，不做硬撑。",
      complete: "完成。今天执行力合格，明天继续。",
      low: "不想动也正常。目标降到十分钟散步，先完成最小动作。",
      default: "收到。继续补充体重、饮食或运动信息，我会帮你整理。",
    },
  },
  {
    id: "boss",
    name: "霸总模式",
    aiName: "冷酷监督者",
    subtitle: "冷酷但关心",
    desc: "话少，压迫感一点点。",
    prop: "总裁",
    avatar: "assets/avatars/boss.png",
    welcome: "我来盯你。先报体重，其他借口稍后再说。",
    lines: {
      weight: "记下了。别被一个数字影响心情，今天照计划走。",
      food: "吃了就认。今晚走二十分钟，别让一顿饭毁掉今天。",
      exercise: "做得不错。你不是做不到，只是需要有人盯着。",
      period:
        "已记录。今天不逼你强撑，休息、保暖、按时吃饭，比减重重要。",
      complete: "很好。我喜欢你说到做到。",
      low: "那就十分钟。你可以撒懒，但任务不能完全消失。",
      default: "继续说。我会帮你记，也会帮你把节奏拉回来。",
    },
  },
  {
    id: "friend",
    name: "朋友模式",
    aiName: "微信好友",
    subtitle: "碎碎念好友上线",
    desc: "轻松吐槽，适合每天聊。",
    prop: "好友",
    avatar: "assets/avatars/friend.png",
    welcome:
      "来啦来啦，从今天开始我盯着你。先别紧张，今天报个体重，我们慢慢来。",
    lines: {
      weight: "记上啦。体重每天都会波动，别因为一个数字上头，今天正常吃正常动。",
      food: "哈哈你今天有点放飞。没事，晚上别再加餐，出去溜达一下补回来。",
      exercise: "可以呀，今天动起来了。再喝点水，别一开心又奖励奶茶。",
      period:
        "记下啦。这几天别太狠管自己，舒服一点，能散步就散步，不能就休息。",
      complete: "好耶，完成了。今天你赢一小局。",
      low: "那我们不搞大任务，走十分钟就算赢。回来我给你记上。",
      default: "收到收到，你继续说，我帮你记进小本本。",
    },
  },
  {
    id: "mom",
    name: "妈妈模式",
    aiName: "妈妈",
    subtitle: "关心但有点唠叨",
    desc: "生活化提醒，嘴上念但心里疼。",
    prop: "妈妈",
    avatar: "assets/avatars/mom.png",
    welcome: "开始啦？那妈妈先问一句，今天体重多少？别怕，慢慢来。",
    lines: {
      weight: "妈妈记下了。不要天天跟体重较劲，饭要好好吃，觉也要好好睡。",
      food: "又吃这么香呀。不是不让你吃，是身体也要顾着点。晚上走走，早点睡。",
      exercise: "这就对了，动一动人也舒服。回来记得喝水，别光顾着玩手机。",
      period:
        "妈妈记下了。这几天别冻着，别瞎节食，难受就早点睡。",
      complete: "好，今天很乖。妈妈给你记上，明天继续。",
      low: "累了就少做点，别硬撑。先喝点水，走十分钟就行。",
      default: "嗯，妈妈听着呢。吃了啥、动没动，都跟我说说。",
    },
  },
  {
    id: "teacher",
    name: "班主任模式",
    aiName: "班主任",
    subtitle: "查作业式监督",
    desc: "打卡交作业，少不了你。",
    prop: "作业",
    avatar: "assets/avatars/teacher.png",
    welcome:
      "今日减脂作业开始检查。请先提交体重，再提交饮食和运动记录。",
    lines: {
      weight: "体重作业已收。注意，单次成绩不代表最终成绩，看长期表现。",
      food: "今日饮食记录已收，存在放飞迹象。晚间需补交二十分钟快走记录。",
      exercise: "运动作业已收。完成情况尚可，明天继续按时提交。",
      period:
        "生理期记录已收。此阶段作业减量，休息和保暖列为优先项。",
      complete: "已批改，今日任务完成。明早按时提交体重。",
      low: "情绪状态已记录。今日作业调整为十分钟散步，不得空白提交。",
      default: "请继续提交记录，格式不限，但内容要真实。",
    },
  },
];

const smallTalkReplies = {
  huangshang: {
    greeting: "皇上召唤奴才，奴才马上到。今日想先聊吃的，还是先报个体重？",
    craving:
      "启奏皇上，想吃可以商量，不必偷偷摸摸。若真想吃，奴才建议选小份，配无糖饮料，今晚再散步二十分钟，龙体与心情都照顾到。",
    cravingFollowup:
      "能吃。奴才斗胆加一句：吃可以，别吃到撑；开心可以，别让一顿饭把今日全盘否了。",
    question: "皇上问得好。奴才先给稳妥答案：不走极端，能坚持的安排，才是真正管用的安排。",
    thanks: "皇上客气了，奴才本分。今日继续盯着，绝不让摆烂钻空子。",
    chat: "奴才在。皇上想吐槽、想撒娇、想问能不能吃，都可以说，奴才先陪聊，再帮您收拾局面。",
  },
  nucai: {
    greeting: "朕在。今日先报体重，还是先交代又馋什么了？",
    craving:
      "想吃便先说清楚，不许偷偷破戒。朕准你吃小份，但晚间步行二十分钟，饮料换无糖，回来复命。",
    cravingFollowup:
      "能吃，但朕有条件：小份、慢吃、别加第二轮。吃完不许自责，按计划补一段散步。",
    question: "此事不必慌。朕要的是长期守得住，不是今日逞一时狠劲。",
    thanks: "知道就好。朕继续盯着你，别想蒙混过关。",
    chat: "朕听着。想聊什么便说，撒娇可以，赖账不行。",
  },
  coach: {
    greeting: "在。今天先聊状态，还是直接记录体重、饮食和运动？",
    craving:
      "想吃可以，不要把食物妖魔化。建议小份汉堡，去掉含糖饮料，下一餐清淡，饭后快走二十分钟。",
    cravingFollowup:
      "可以吃。关键是份量和后续安排，不是靠忍到崩盘。吃完记录一下，我帮你调当天计划。",
    question: "可以问。我的原则是：健康优先、持续执行、不过度补偿。",
    thanks: "收到。继续按节奏来，别追求完美，追求稳定。",
    chat: "我在。你可以直接说想吃什么、现在什么状态，我会先判断是不是需要记录。",
  },
  boss: {
    greeting: "我在。说吧，今天想先交代哪件事？",
    craving:
      "想吃就说，别偷偷来。可以吃小份，别配高糖饮料。吃完走二十分钟，我不接受你吃完就自暴自弃。",
    cravingFollowup:
      "能。你不是不能吃，你是需要有边界地吃。小份，慢点，吃完回来告诉我。",
    question: "答案是：可以灵活，但不能失控。我会帮你把边界守住。",
    thanks: "嗯。听话就行，今天继续往前走。",
    chat: "我听着。想吃、想摆烂、想聊天，都可以说，我会把你拉回正轨。",
  },
  friend: {
    greeting: "在在在，今天是先八卦一下，还是先报备一下？",
    craving:
      "想吃汉堡啊，可以理解，谁没有被汉堡召唤过。真想吃就小份一点，饮料别上糖，晚上散步二十分钟就行。",
    cravingFollowup:
      "真的能吃。重点是别一边吃一边内疚，吃完记录一下，然后我们把后面安排好。",
    question: "问吧问吧，我在。咱不搞极端，能长期坚持才是真的赢。",
    thanks: "不客气，我就是来防止你一个人乱想的。",
    chat: "我在呢。你想聊吃的、烦的、懒得动的，都能聊，不用每句话都像打卡。",
  },
  mom: {
    greeting: "在呢。今天身体怎么样？先跟妈妈说说。",
    craving:
      "想吃就别把自己憋坏了。可以吃小一点，别再配太甜的饮料，晚上走走，胃也舒服些。",
    cravingFollowup:
      "能吃，孩子。减肥不是受罪，关键是别吃撑，也别吃完就骂自己。",
    question: "你问得对。身体要紧，别为了减重把自己弄得不开心。",
    thanks: "跟妈妈还客气什么。今天好好吃饭，好好休息。",
    chat: "妈妈在呢。想吃什么、心情怎么样，都能说，不用只报数字。",
  },
  teacher: {
    greeting: "在。今日状态先口头汇报一下，再提交记录。",
    craving:
      "想吃汉堡，已记录为口头申请，不算饮食记录。处理意见：可小份食用，晚间补交二十分钟散步。",
    cravingFollowup:
      "可以，但有条件。小份、不过量、吃后如实记录，今晚完成散步作业。",
    question: "可以提问。原则是健康、真实、可持续，不允许极端节食。",
    thanks: "收到。继续保持汇报，不要漏交记录。",
    chat: "可以日常沟通。不是每句话都算作作业，明确说吃了、走了、体重多少，才记入记录。",
  },
};

const defaultTasks = [
  {
    id: "morning-weight",
    title: "晨起称重",
    desc: "今天先交一个体重，别让记录册空着。",
    deadline: "08:30",
    done: false,
  },
  {
    id: "lunch-log",
    title: "午餐报备",
    desc: "午饭吃什么都能说，重点是别装没发生。",
    deadline: "12:30",
    done: false,
  },
  {
    id: "evening-walk",
    title: "饭后散步 20 分钟",
    desc: "吃多了不补偿式折磨，走一走把节奏拉回来。",
    deadline: "20:30",
    done: false,
  },
];

const state = {
  currentRoleId: "huangshang",
  activeTab: "Chat",
  isPro: false,
  goal: {
    targetWeight: 55,
  },
  conversation: {
    lastCraving: "",
    lastIntent: "",
  },
  messages: [],
  tasks: structuredClone(defaultTasks),
  records: {
    weights: [
      { value: 59.3, date: "周一" },
      { value: 59.1, date: "周二" },
      { value: 58.9, date: "周三" },
      { value: 58.8, date: "周四" },
      { value: 58.6, date: "今天" },
    ],
    foods: [],
    exercises: [],
    period: null,
  },
  reminders: [
    { id: "morning", title: "早提醒", desc: "称体重 / 今日目标", time: "08:30", enabled: true },
    { id: "noon", title: "中提醒", desc: "午餐记录 / 饮食提醒", time: "12:30", enabled: true },
    { id: "evening", title: "晚提醒", desc: "运动复命 / 晚间总结", time: "20:30", enabled: true },
    { id: "period", title: "生理期提醒", desc: "下个月相近时间前 1-2 天", time: "09:30", enabled: true },
  ],
};

const els = {
  chatList: document.querySelector("#chatList"),
  chatForm: document.querySelector("#chatForm"),
  chatInput: document.querySelector("#chatInput"),
  foodPhotoInput: document.querySelector("#foodPhotoInput"),
  headerAvatar: document.querySelector("#headerAvatar"),
  headerRole: document.querySelector("#headerRole"),
  headerSub: document.querySelector("#headerSub"),
  mineAvatar: document.querySelector("#mineAvatar"),
  mineRole: document.querySelector("#mineRole"),
  mineDesc: document.querySelector("#mineDesc"),
  taskList: document.querySelector("#taskList"),
  taskProgressPill: document.querySelector("#taskProgressPill"),
  currentWeight: document.querySelector("#currentWeight"),
  weightDelta: document.querySelector("#weightDelta"),
  currentSteps: document.querySelector("#currentSteps"),
  targetWeightText: document.querySelector("#targetWeightText"),
  targetGapText: document.querySelector("#targetGapText"),
  targetProgressText: document.querySelector("#targetProgressText"),
  targetWeightInput: document.querySelector("#targetWeightInput"),
  chartTargetLabel: document.querySelector("#chartTargetLabel"),
  membershipBtn: document.querySelector("#membershipBtn"),
  membershipStatus: document.querySelector("#membershipStatus"),
  weightChart: document.querySelector("#weightChart"),
  foodRecords: document.querySelector("#foodRecords"),
  exerciseRecords: document.querySelector("#exerciseRecords"),
  foodCount: document.querySelector("#foodCount"),
  exerciseCount: document.querySelector("#exerciseCount"),
  periodText: document.querySelector("#periodText"),
  periodHint: document.querySelector("#periodHint"),
  reminderList: document.querySelector("#reminderList"),
  roleGrid: document.querySelector("#roleGrid"),
  sheetRoleGrid: document.querySelector("#sheetRoleGrid"),
  roleSheet: document.querySelector("#roleSheet"),
  streakPill: document.querySelector("#streakPill"),
};

function currentRole() {
  return roles.find((role) => role.id === state.currentRoleId);
}

function mascot(role, size = "") {
  return `
    <span class="avatar-frame ${size}" aria-hidden="true">
      <img src="${role.avatar}" alt="" />
    </span>
  `;
}

function todayLabel() {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function addMessage(message) {
  const nextMessage = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...message,
  };
  state.messages.push(nextMessage);
  renderChat();
  return nextMessage.id;
}

function updateMessage(id, patch) {
  const index = state.messages.findIndex((message) => message.id === id);
  if (index === -1) return;
  state.messages[index] = { ...state.messages[index], ...patch };
  renderChat();
}

function latestWeight() {
  return state.records.weights.at(-1)?.value || null;
}

function formatKg(value) {
  return `${Number(value).toFixed(1)}kg`;
}

function initMessages() {
  const role = currentRole();
  state.messages = [
    {
      id: crypto.randomUUID(),
      sender: "ai",
      type: "text",
      content: role.welcome,
      createdAt: new Date().toISOString(),
    },
    {
      id: crypto.randomUUID(),
      sender: "ai",
      type: "sticker",
      content: "今日不许摆烂",
      createdAt: new Date().toISOString(),
    },
  ];
}

function setRole(roleId) {
  state.currentRoleId = roleId;
  const role = currentRole();
  state.messages = [
    ...state.messages,
    {
      id: crypto.randomUUID(),
      sender: "ai",
      type: "text",
      content: `角色已切换为${role.name}。${role.welcome}`,
      createdAt: new Date().toISOString(),
    },
  ];
  renderAll();
  closeRoleSheet();
}

function classifyInput(text) {
  const normalized = text.trim();
  const greeting = /^(hi|hello|哈喽|嗨|你好|在吗|早|早安|午安|晚安|中午好|晚上好)[呀啊嘛吗~！!。.\s]*$/i.test(
    normalized,
  );
  const thanks = /(谢谢|谢啦|爱你|太好了|好的|好嘞|收到|懂了|明白了|行吧|可以吧)/.test(
    normalized,
  );
  const lowMood = /(不想|累|崩|焦虑|烦|难过|摆烂|没动力)/.test(normalized);
  const complete = /(完成|做完|走完|复命|打卡|交作业|已完成)/.test(normalized);
  const period = /(生理期|姨妈|例假|大姨妈|月经)/.test(normalized);
  const exercise = /(步|跑|走|散步|运动|瑜伽|跳操|健身|分钟)/.test(normalized);
  const foodWords = /(汉堡|奶茶|炸鸡|麻辣烫|火锅|蛋糕|甜品|薯条|烧烤|夜宵|米饭|面|包子|披萨|咖啡|可乐|零食)/.test(
    normalized,
  );
  const craving = /(想吃|想喝|馋|嘴馋|想来点|能吃|可以吃|能喝|可以喝|想点|想买)/.test(normalized);
  const actualFood = /(吃了|喝了|早餐|午餐|午饭|晚餐|晚饭|夜宵|刚吃|刚喝|今天吃|今天喝|中午吃|晚上吃|早上吃|吃的是|喝的是)/.test(
    normalized,
  );
  const food = actualFood || (foodWords && /(吃了|喝了|吃的|喝的)/.test(normalized));
  const question = /(吗|嘛|么|能不能|可不可以|可以不|怎么办|咋办|怎么|为什么|\?)/.test(normalized);
  const weight = /(\d{2,3}(?:\.\d+)?)\s*(kg|公斤|斤)?/i.exec(normalized);

  if (greeting) return { type: "greeting" };
  if (period) return { type: "period" };
  if (complete) return { type: "complete" };
  if (lowMood) return { type: "low" };
  if (craving) return { type: question && state.conversation.lastIntent === "craving" ? "cravingFollowup" : "craving" };
  if (question && state.conversation.lastIntent === "craving") return { type: "cravingFollowup" };
  if (question) return { type: "question" };
  if (weight && /(kg|公斤|斤|体重|重)/i.test(normalized)) {
    return { type: "weight", match: weight };
  }
  if (food) return { type: "food" };
  if (exercise) return { type: "exercise" };
  if (thanks) return { type: "thanks" };
  return { type: "default" };
}

function isHighCalorie(text) {
  return /(奶茶|炸鸡|麻辣烫|火锅|蛋糕|甜品|薯条|烧烤|夜宵)/.test(text);
}

function extractCravingItem(text) {
  const match = /(想吃|想喝|能吃|可以吃|能喝|可以喝|想点|想买)([^，。！？!?]*)/.exec(text);
  if (!match) return "";
  return match[2].replace(/[吗嘛么呢啊呀吧\s]/g, "").slice(0, 12);
}

function getReply(role, result, text) {
  const smallTalk = smallTalkReplies[role.id];
  const reply = smallTalk?.[result.type];

  if (reply && result.type === "craving") {
    const item = extractCravingItem(text);
    if (item) state.conversation.lastCraving = item;
    return item ? reply.replaceAll("汉堡", item) : reply;
  }

  if (reply && result.type === "cravingFollowup") {
    const item = state.conversation.lastCraving;
    return item ? reply.replace("能吃", `${item}能吃`).replace("可以", `${item}可以`) : reply;
  }

  return reply || role.lines[result.type] || smallTalk?.chat || role.lines.default;
}

function buildAnalysisUnavailable(errorMessage = "") {
  const detail = errorMessage ? `错误：${errorMessage}` : "需要先启动并配置 AI 后端。";
  return {
    title: "AI 专业分析未连接",
    calories: "等待真实模型",
    verdict:
      `我不会再用硬编码热量乱答。会员分析需要真实视觉/语言模型返回结果后，才显示卡路里、超标项和建议。${detail}`,
    tips: [
      "本地可接 Ollama、LM Studio、vLLM 等 OpenAI-compatible 接口。",
      "支持文字饮食和图片饮食两种输入，图片需要视觉语言模型。",
      "模型返回后再生成普拉提、力量、快走、瑜伽等可选方案。",
    ],
  };
}

function normalizeAnalysis(raw) {
  return {
    title: raw.title || "AI 专业分析",
    calories: raw.calories || "热量区间待确认",
    verdict: raw.verdict || "模型没有返回评价，请检查后端提示词。",
    tips: Array.isArray(raw.tips) && raw.tips.length ? raw.tips.slice(0, 5) : ["请补充更清晰的食物描述或照片。"],
    taskTitle: raw.taskTitle || raw.task_title || "",
    taskDesc: raw.taskDesc || raw.task_desc || "",
  };
}

async function requestFoodAnalysis({ text = "", imageDataUrl = "" }) {
  const response = await fetch("/api/analyze-food", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, imageDataUrl }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || `HTTP ${response.status}`);
  }

  return normalizeAnalysis(await response.json());
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

function createTask(title, desc, deadline = "20:30") {
  const exists = state.tasks.some((task) => task.title === title && !task.done);
  if (exists) return null;

  const task = {
    id: crypto.randomUUID(),
    title,
    desc,
    deadline,
    done: false,
  };
  state.tasks.push(task);
  return task;
}

function markRelatedTask(type) {
  const taskMap = {
    weight: "morning-weight",
    food: "lunch-log",
    exercise: "evening-walk",
  };
  const task = state.tasks.find((item) => item.id === taskMap[type]);
  if (task) task.done = true;
}

async function handleUserText(text) {
  const role = currentRole();
  const result = classifyInput(text);
  let task = null;
  let sticker = null;
  let showWeightPreview = false;
  let shouldAnalyzeFood = false;

  if (result.type === "weight") {
    const raw = Number(result.match[1]);
    const unit = result.match[2];
    const value = unit === "斤" ? raw / 2 : raw;
    state.records.weights.push({ value: Number(value.toFixed(1)), date: todayLabel() });
    markRelatedTask("weight");
    showWeightPreview = true;
  }

  if (result.type === "food") {
    shouldAnalyzeFood = state.isPro;
    const tag = shouldAnalyzeFood ? "等待 AI 专业分析" : isHighCalorie(text) ? "偏油 / 偏甜" : "已记录";
    state.records.foods.unshift({
      text,
      tag,
      date: todayLabel(),
    });
    markRelatedTask("food");

    if (isHighCalorie(text) && !shouldAnalyzeFood) {
      sticker = "奶茶刺客出现";
      task = createTask("饭后散步 20 分钟", "不用惩罚自己，走一走把今天救回来。", "20:30");
    }
  }

  if (result.type === "exercise") {
    const stepsMatch = /(\d{3,6})\s*步/.exec(text);
    const minuteMatch = /(\d{1,3})\s*(分钟|min)/i.exec(text);
    state.records.exercises.unshift({
      text,
      steps: stepsMatch ? Number(stepsMatch[1]) : null,
      minutes: minuteMatch ? Number(minuteMatch[1]) : null,
      date: todayLabel(),
    });
    markRelatedTask("exercise");
    sticker = "朕已阅";
  }

  if (result.type === "period") {
    const start = new Date();
    const reminder = addDays(start, 26);
    state.records.period = {
      start,
      reminder,
    };
    sticker = "今日从轻处理";
    createTask("今晚早点休息", "生理期记录已开启，今天不用硬撑高强度运动。", "22:30");
  }

  if (result.type === "complete") {
    const pending = state.tasks.find((item) => !item.done);
    if (pending) pending.done = true;
    sticker = "朕已阅";
  }

  if (result.type === "low") {
    task = createTask("十分钟低门槛散步", "不想动也没关系，先做最小版本。", "21:30");
  }

  addMessage({
    sender: "ai",
    type: "text",
    content: getReply(role, result, text),
  });

  state.conversation.lastIntent = result.type === "cravingFollowup" ? "craving" : result.type;

  if (sticker) {
    addMessage({ sender: "ai", type: "sticker", content: sticker });
  }

  if (task) {
    addMessage({ sender: "ai", type: "task", taskId: task.id });
  }

  if (showWeightPreview) {
    addMessage({ sender: "ai", type: "weightPreview" });
  }

  renderAll();

  if (shouldAnalyzeFood) {
    const pendingId = addMessage({
      sender: "ai",
      type: "analysis",
      title: "正在连接真实 AI",
      calories: "分析中",
      verdict: "正在把你的饮食描述发给 AI 后端。没有配置模型时，这里会明确提示未连接，不会编造热量。",
      tips: ["等待模型返回食物识别、热量区间、超标项和运动建议。"],
    });

    try {
      const analysis = await requestFoodAnalysis({ text });
      updateMessage(pendingId, { type: "analysis", ...analysis });
      state.records.foods[0].tag = `VIP ${analysis.calories}`;
      if (analysis.taskTitle && analysis.taskDesc) {
        const aiTask = createTask(analysis.taskTitle, analysis.taskDesc, "20:30");
        if (aiTask) addMessage({ sender: "ai", type: "task", taskId: aiTask.id });
      }
    } catch (error) {
      updateMessage(pendingId, { type: "analysis", ...buildAnalysisUnavailable(error.message) });
      state.records.foods[0].tag = "AI 后端未连接";
    }

    renderAll();
  }
}

function renderChat() {
  const role = currentRole();
  els.chatList.innerHTML = state.messages
    .map((message) => {
      if (message.sender === "user") {
        if (message.type === "image") {
          return `
            <div class="message-row user">
              <div class="image-bubble">
                <img src="${message.imageUrl}" alt="用户上传的食物照片" />
              </div>
            </div>
          `;
        }

        return `
          <div class="message-row user">
            <div class="bubble">${escapeHtml(message.content)}</div>
          </div>
        `;
      }

      if (message.type === "sticker") {
        return `
          <div class="message-row ai">
            ${mascot(role, "avatar-small")}
            <div class="sticker-bubble">
              ${mascot(role, "avatar-small")}
              <strong>${escapeHtml(message.content)}</strong>
            </div>
          </div>
        `;
      }

      if (message.type === "task") {
        const task = state.tasks.find((item) => item.id === message.taskId);
        if (!task) return "";
        return `
          <div class="message-row ai">
            ${mascot(role, "avatar-small")}
            <div class="task-bubble">
              <h3>${escapeHtml(task.title)}</h3>
              <p>${escapeHtml(task.desc)}</p>
              <div class="task-inline-actions">
                <button type="button" data-complete-task="${task.id}">${task.done ? "已完成" : "完成"}</button>
                <button type="button" data-tab-jump="Tasks">去任务页</button>
              </div>
            </div>
          </div>
        `;
      }

      if (message.type === "analysis") {
        return `
          <div class="message-row ai">
            ${mascot(role, "avatar-small")}
            <div class="analysis-bubble">
              <div class="analysis-head">
                <span>VIP 专业分析</span>
                <strong>${escapeHtml(message.title)}</strong>
              </div>
              <div class="calorie-range">${escapeHtml(message.calories)}</div>
              <p>${escapeHtml(message.verdict)}</p>
              <ul>
                ${message.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      }

      if (message.type === "weightPreview") {
        return `
          <div class="message-row ai">
            ${mascot(role, "avatar-small")}
            <button class="weight-preview-card" type="button" data-tab-jump="Records">
              ${renderWeightPreviewCard()}
            </button>
          </div>
        `;
      }

      return `
        <div class="message-row ai">
          ${mascot(role, "avatar-small")}
          <div class="bubble">${escapeHtml(message.content)}</div>
        </div>
      `;
    })
    .join("");

  els.chatList.scrollTop = els.chatList.scrollHeight;
}

function renderRoleChrome() {
  const role = currentRole();
  els.headerAvatar.className = "avatar-frame avatar-small";
  els.headerAvatar.innerHTML = `
    <img src="${role.avatar}" alt="" />
  `;
  els.headerRole.textContent = role.name;
  els.headerSub.textContent = role.subtitle;
  els.mineAvatar.className = "avatar-frame avatar-large";
  els.mineAvatar.innerHTML = `
    <img src="${role.avatar}" alt="" />
  `;
  els.mineRole.textContent = role.name;
  els.mineDesc.textContent = role.desc;
}

function renderTasks() {
  const done = state.tasks.filter((task) => task.done).length;
  els.taskProgressPill.textContent = `${done}/${state.tasks.length}`;
  els.taskList.innerHTML =
    state.tasks.length === 0
      ? `<div class="empty-state">今日暂无任务，先去聊天页报个体重，让监督员给你安排。</div>`
      : state.tasks
          .map(
            (task) => `
              <article class="task-card ${task.done ? "done" : ""}">
                <div>
                  <h2>${escapeHtml(task.title)}</h2>
                  <p>${escapeHtml(task.desc)}</p>
                </div>
                <div class="task-meta">
                  <span>截止 ${task.deadline}</span>
                  <span>${task.done ? "已复命" : "待完成"}</span>
                </div>
                <button class="task-action" type="button" data-complete-task="${task.id}">
                  ${task.done ? "已完成" : "完成任务"}
                </button>
              </article>
            `,
          )
          .join("");
}

function renderRecords() {
  const weights = state.records.weights.slice(-7);
  const latest = weights.at(-1);
  const previous = weights.at(-2);
  const delta = latest && previous ? Number((latest.value - previous.value).toFixed(1)) : 0;
  const lastExercise = state.records.exercises[0];
  const target = state.goal.targetWeight;
  const gap = latest ? Number((latest.value - target).toFixed(1)) : null;

  els.currentWeight.textContent = latest ? `${latest.value}kg` : "未记录";
  els.weightDelta.textContent =
    delta < 0 ? `比上次轻 ${Math.abs(delta)}kg` : delta > 0 ? `比上次重 ${delta}kg` : "和上次持平";
  els.currentSteps.textContent = lastExercise?.steps ? `${lastExercise.steps} 步` : "未记录";
  els.targetWeightText.textContent = formatKg(target);
  els.targetGapText.textContent =
    gap === null ? "先记录体重" : gap <= 0 ? "已达到目标" : `还差 ${gap.toFixed(1)}kg`;
  els.targetProgressText.textContent =
    gap === null ? "等待记录" : gap <= 0 ? "目标达成" : `还差 ${gap.toFixed(1)}kg`;
  els.chartTargetLabel.textContent = `目标 ${formatKg(target)}`;
  els.foodCount.textContent = `${state.records.foods.length} 条`;
  els.exerciseCount.textContent = `${state.records.exercises.length} 条`;

  els.weightChart.innerHTML = renderWeightCurve(weights, target);

  els.foodRecords.innerHTML = state.records.foods.length
    ? state.records.foods
        .map(
          (item) => `
            <div class="record-item">
              <strong>${escapeHtml(item.text)}</strong>
              <small>${item.date} · ${item.tag}</small>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">还没有饮食记录。去聊天页说“中午吃了...”试试。</div>`;

  els.exerciseRecords.innerHTML = state.records.exercises.length
    ? state.records.exercises
        .map(
          (item) => `
            <div class="record-item">
              <strong>${escapeHtml(item.text)}</strong>
              <small>${item.date} · 已记录</small>
            </div>
          `,
        )
        .join("")
    : `<div class="empty-state">还没有运动记录。去聊天页说“晚上走了 5000 步”。</div>`;

  if (state.records.period) {
    els.periodText.textContent = `最近记录：${formatDate(state.records.period.start)}`;
    els.periodHint.textContent = `预计 ${formatDate(state.records.period.reminder)} 前后温和提醒。`;
  }
}

function renderWeightCurve(weights, target) {
  if (weights.length === 0) {
    return `<div class="empty-state">先记录一次体重，曲线就会出现。</div>`;
  }

  const width = 320;
  const height = 150;
  const pad = 24;
  const values = [...weights.map((item) => item.value), target];
  const max = Math.max(...values) + 0.4;
  const min = Math.min(...values) - 0.4;
  const range = Math.max(max - min, 1);
  const xFor = (index) =>
    weights.length === 1 ? width / 2 : pad + (index / (weights.length - 1)) * (width - pad * 2);
  const yFor = (value) => pad + ((max - value) / range) * (height - pad * 2);
  const points = weights.map((item, index) => `${xFor(index).toFixed(1)},${yFor(item.value).toFixed(1)}`).join(" ");
  const targetY = yFor(target).toFixed(1);

  return `
    <svg class="weight-curve" viewBox="0 0 ${width} ${height}" role="img" aria-label="体重曲线">
      <line class="target-line" x1="${pad}" y1="${targetY}" x2="${width - pad}" y2="${targetY}" />
      <text class="target-text" x="${width - pad}" y="${Number(targetY) - 6}" text-anchor="end">目标 ${formatKg(target)}</text>
      <polyline class="weight-line" points="${points}" />
      ${weights
        .map((item, index) => {
          const x = xFor(index).toFixed(1);
          const y = yFor(item.value).toFixed(1);
          return `
            <circle class="weight-dot" cx="${x}" cy="${y}" r="4" />
            <text class="weight-label" x="${x}" y="${Number(y) - 9}" text-anchor="middle">${item.value}</text>
            <text class="date-label" x="${x}" y="${height - 5}" text-anchor="middle">${escapeHtml(item.date)}</text>
          `;
        })
        .join("")}
    </svg>
  `;
}

function renderWeightPreviewCard() {
  const weights = state.records.weights.slice(-6);
  const latest = weights.at(-1);
  const previous = weights.at(-2);
  const target = state.goal.targetWeight;
  const delta = latest && previous ? Number((latest.value - previous.value).toFixed(1)) : 0;
  const gap = latest ? Number((latest.value - target).toFixed(1)) : null;
  const trendText =
    delta < 0 ? `比上次轻 ${Math.abs(delta).toFixed(1)}kg` : delta > 0 ? `比上次重 ${delta.toFixed(1)}kg` : "和上次持平";
  const gapText = gap === null ? "先记录体重" : gap <= 0 ? "已达到目标" : `距目标 ${gap.toFixed(1)}kg`;

  return `
    <div class="weight-preview-head">
      <span>体重小窗</span>
      <strong>${latest ? formatKg(latest.value) : "未记录"}</strong>
    </div>
    <div class="weight-preview-chart">${renderWeightSparkline(weights, target)}</div>
    <div class="weight-preview-meta">
      <span>${trendText}</span>
      <span>${gapText}</span>
    </div>
    <div class="weight-preview-link">点击查看完整曲线</div>
  `;
}

function renderWeightSparkline(weights, target) {
  if (weights.length === 0) return "";

  const width = 220;
  const height = 72;
  const pad = 10;
  const values = [...weights.map((item) => item.value), target];
  const max = Math.max(...values) + 0.4;
  const min = Math.min(...values) - 0.4;
  const range = Math.max(max - min, 1);
  const xFor = (index) =>
    weights.length === 1 ? width / 2 : pad + (index / (weights.length - 1)) * (width - pad * 2);
  const yFor = (value) => pad + ((max - value) / range) * (height - pad * 2);
  const points = weights.map((item, index) => `${xFor(index).toFixed(1)},${yFor(item.value).toFixed(1)}`).join(" ");
  const targetY = yFor(target).toFixed(1);
  const latest = weights.at(-1);
  const latestX = xFor(weights.length - 1).toFixed(1);
  const latestY = yFor(latest.value).toFixed(1);

  return `
    <svg class="weight-sparkline" viewBox="0 0 ${width} ${height}" aria-hidden="true">
      <line class="spark-target" x1="${pad}" y1="${targetY}" x2="${width - pad}" y2="${targetY}" />
      <polyline class="spark-line" points="${points}" />
      <circle class="spark-dot" cx="${latestX}" cy="${latestY}" r="4" />
    </svg>
  `;
}

function renderReminders() {
  els.reminderList.innerHTML = state.reminders
    .map(
      (item) => `
        <label class="reminder-item">
          <div>
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
          </div>
          <input class="time-input" type="time" value="${item.time}" data-reminder-time="${item.id}" ${
            item.enabled ? "" : "disabled"
          } />
          <span class="switch">
            <input type="checkbox" data-reminder-toggle="${item.id}" ${item.enabled ? "checked" : ""} />
            <span class="slider"></span>
          </span>
        </label>
      `,
    )
    .join("");
}

function renderMembership() {
  els.membershipBtn.textContent = state.isPro ? "已开通" : "开通会员";
  els.membershipBtn.disabled = state.isPro;
  els.membershipStatus.textContent = state.isPro ? "VIP 已生效" : "当前免费版";
  els.membershipStatus.classList.toggle("active", state.isPro);
  els.targetWeightInput.value = state.goal.targetWeight.toFixed(1);
}

function renderRoles() {
  const roleCards = roles
    .map(
      (role) => `
        <button class="role-card ${role.id === state.currentRoleId ? "active" : ""}" type="button" data-role="${role.id}">
          ${mascot(role, "avatar-small")}
          <span>
            <strong>${role.name}</strong>
            <span>${role.desc}</span>
          </span>
        </button>
      `,
    )
    .join("");

  els.roleGrid.innerHTML = roleCards;
  els.sheetRoleGrid.innerHTML = roleCards;
}

function renderTabs() {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("screen-active", screen.id === `tab${state.activeTab}`);
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("tab-active", button.dataset.tab === state.activeTab);
  });
}

function renderAll() {
  renderRoleChrome();
  renderChat();
  renderTasks();
  renderRecords();
  renderMembership();
  renderReminders();
  renderRoles();
  renderTabs();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openRoleSheet() {
  els.roleSheet.classList.add("open");
  els.roleSheet.setAttribute("aria-hidden", "false");
}

function closeRoleSheet() {
  els.roleSheet.classList.remove("open");
  els.roleSheet.setAttribute("aria-hidden", "true");
}

function completeTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.done = true;
  const role = currentRole();
  addMessage({
    sender: "ai",
    type: "text",
    content: role.lines.complete,
  });
  addMessage({ sender: "ai", type: "sticker", content: "朕已阅" });
  renderAll();
}

function toggleMembership() {
  state.isPro = true;
  addMessage({
    sender: "ai",
    type: "text",
    content:
      "会员已开通模拟成功。现在可以用“拍照分析”上传食物图，我会给出热量区间、真实评价和可执行建议。",
  });
  renderAll();
}

function handlePhotoAction() {
  if (!state.isPro) {
    addMessage({
      sender: "ai",
      type: "text",
      content:
        "拍照估算卡路里是 VIP 专业版功能，9.9 元 / 月。开通后可以上传餐盘照片，我会给热量区间、真实评价和下一餐怎么补救。",
    });
    state.activeTab = "Mine";
    renderAll();
    return;
  }

  els.foodPhotoInput.click();
}

async function handleFoodPhoto(file) {
  if (!file) return;
  const imageUrl = URL.createObjectURL(file);
  addMessage({ sender: "user", type: "image", imageUrl });

  state.records.foods.unshift({
    text: "拍照分析",
    tag: "等待 AI 专业分析",
    date: todayLabel(),
  });

  const pendingId = addMessage({
    sender: "ai",
    type: "analysis",
    title: "正在连接真实 AI",
    calories: "分析中",
    verdict: "正在把食物照片发给 AI 后端。没有配置视觉模型时，这里会明确提示未连接，不会编造卡路里。",
    tips: ["等待模型返回食物识别、热量区间、超标项和运动建议。"],
  });

  try {
    const imageDataUrl = await fileToDataUrl(file);
    const analysis = await requestFoodAnalysis({ imageDataUrl });
    updateMessage(pendingId, { type: "analysis", ...analysis });
    state.records.foods[0].tag = `VIP ${analysis.calories}`;
    if (analysis.taskTitle && analysis.taskDesc) {
      const task = createTask(analysis.taskTitle, analysis.taskDesc, "20:30");
      if (task) addMessage({ sender: "ai", type: "task", taskId: task.id });
    }
  } catch (error) {
    updateMessage(pendingId, { type: "analysis", ...buildAnalysisUnavailable(error.message) });
    state.records.foods[0].tag = "AI 后端未连接";
  } finally {
    renderAll();
  }
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button, [data-close-sheet]");
  if (!target) return;

  if (target.matches("[data-close-sheet]")) closeRoleSheet();

  const tab = target.dataset.tab || target.dataset.tabJump;
  if (tab) {
    state.activeTab = tab;
    renderTabs();
  }

  if (target.dataset.role) setRole(target.dataset.role);
  if (target.dataset.completeTask) completeTask(target.dataset.completeTask);
  if (target.dataset.proPhoto !== undefined) handlePhotoAction();
});

document.querySelector("#roleSwitchBtn").addEventListener("click", openRoleSheet);
els.membershipBtn.addEventListener("click", toggleMembership);
els.foodPhotoInput.addEventListener("change", (event) => {
  handleFoodPhoto(event.target.files?.[0]);
  event.target.value = "";
});

els.targetWeightInput.addEventListener("change", (event) => {
  const next = Number(event.target.value);
  if (!Number.isFinite(next) || next < 35 || next > 120) {
    event.target.value = state.goal.targetWeight.toFixed(1);
    return;
  }

  state.goal.targetWeight = Number(next.toFixed(1));
  renderAll();
});

document.querySelectorAll("[data-quick]").forEach((button) => {
  button.addEventListener("click", () => {
    els.chatInput.value = button.dataset.quick;
    els.chatInput.focus();
  });
});

els.chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = els.chatInput.value.trim();
  if (!text) return;

  addMessage({ sender: "user", type: "text", content: text });
  els.chatInput.value = "";

  window.setTimeout(() => handleUserText(text), 240);
});

els.reminderList.addEventListener("change", (event) => {
  const toggleId = event.target.dataset.reminderToggle;
  const timeId = event.target.dataset.reminderTime;

  if (toggleId) {
    const item = state.reminders.find((reminder) => reminder.id === toggleId);
    item.enabled = event.target.checked;
    renderReminders();
  }

  if (timeId) {
    const item = state.reminders.find((reminder) => reminder.id === timeId);
    item.time = event.target.value;
  }
});

initMessages();
renderAll();
