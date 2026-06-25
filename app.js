const companies = [
  {
    id: 1,
    name: "FlowPilot AI",
    initials: "FP",
    color: "#1769e0",
    country: "台灣",
    flag: "TW",
    region: "asia",
    city: "台北",
    languages: ["zh", "en"],
    category: "automation",
    categoryLabel: "流程自動化",
    industries: ["專業服務", "教育", "中小企業"],
    features: ["n8n 工作流", "CRM 整合", "企業知識庫"],
    description: "为中小企业建立从销售线索、客户服务到内部文件处理的一站式 AI 自动化流程。",
    pricing: "project",
    priceLabel: "US$2,500 / 專案起",
    minPrice: 2500,
    ease: 4.8,
    rating: 4.9,
    trust: 96,
    delivery: 92,
    value: 88,
    reviews: 38,
    verified: true,
    featured: true,
    added: 24,
    cases: ["教育机构客服响应时间减少 62%", "顾问公司每周节省 18 小时行政作业"],
    workflow: "需求盘点 → 流程蓝图 → 7 日原型 → 上线与培训",
  },
  {
    id: 2,
    name: "AgentCraft Studio",
    initials: "AC",
    color: "#6b4fd3",
    country: "新加坡",
    flag: "SG",
    region: "asia",
    city: "Singapore",
    languages: ["en", "zh"],
    category: "agent",
    categoryLabel: "AI Agent",
    industries: ["SaaS", "金融", "顾问服务"],
    features: ["多代理系统", "RAG", "API 整合"],
    description: "设计可执行研究、资料整理、客户跟进与内部决策支持的企业级 AI Agent。",
    pricing: "project",
    priceLabel: "US$4,800 / 專案起",
    minPrice: 4800,
    ease: 4.3,
    rating: 4.9,
    trust: 94,
    delivery: 90,
    value: 84,
    reviews: 27,
    verified: true,
    featured: true,
    added: 22,
    cases: ["投资团队研究周期缩短 45%", "SaaS 客户成功资料自动汇整"],
    workflow: "使用情境分析 → Agent 设计 → 权限测试 → 监控上线",
  },
  {
    id: 3,
    name: "SoloContent OS",
    initials: "SO",
    color: "#c14f43",
    country: "加拿大",
    flag: "CA",
    region: "north-america",
    city: "Toronto",
    languages: ["en", "zh"],
    category: "content",
    categoryLabel: "內容行銷",
    industries: ["创作者", "教育", "B2B"],
    features: ["内容矩阵", "多语改写", "SEO 自动化"],
    description: "把专家知识转换为跨平台、多语言的内容系统，并建立从内容到销售的自动漏斗。",
    pricing: "subscription",
    priceLabel: "US$890 / 月起",
    minPrice: 890,
    ease: 4.9,
    rating: 4.8,
    trust: 91,
    delivery: 95,
    value: 92,
    reviews: 54,
    verified: true,
    featured: false,
    added: 21,
    cases: ["顾问品牌 90 天自然流量成长 180%", "每月产出效率提升 5 倍"],
    workflow: "内容盘点 → 主题策略 → 自动化搭建 → 月度优化",
  },
  {
    id: 4,
    name: "MetricMind AI",
    initials: "MM",
    color: "#147a73",
    country: "德國",
    flag: "DE",
    region: "europe",
    city: "Berlin",
    languages: ["en"],
    category: "data",
    categoryLabel: "資料分析",
    industries: ["制造", "零售", "营运"],
    features: ["自然语言 BI", "预测分析", "资料治理"],
    description: "将分散的企业数据转换为管理者可直接提问的决策看板与预测模型。",
    pricing: "project",
    priceLabel: "US$6,000 / 專案起",
    minPrice: 6000,
    ease: 4.1,
    rating: 4.8,
    trust: 95,
    delivery: 89,
    value: 82,
    reviews: 19,
    verified: true,
    featured: false,
    added: 20,
    cases: ["零售库存预测误差降低 31%", "制造排程异常自动预警"],
    workflow: "资料审计 → 指标定义 → 模型开发 → 看板交付",
  },
  {
    id: 5,
    name: "Commerce Copilot",
    initials: "CC",
    color: "#d07b15",
    country: "日本",
    flag: "JP",
    region: "asia",
    city: "東京",
    languages: ["ja", "en", "zh"],
    category: "commerce",
    categoryLabel: "電商銷售",
    industries: ["跨境电商", "消费品牌", "零售"],
    features: ["商品页生成", "客服 Copilot", "广告素材"],
    description: "服务亚洲跨境品牌，自动处理商品内容、广告版本、客服回覆与评论分析。",
    pricing: "subscription",
    priceLabel: "US$590 / 月起",
    minPrice: 590,
    ease: 4.7,
    rating: 4.7,
    trust: 90,
    delivery: 93,
    value: 94,
    reviews: 63,
    verified: true,
    featured: true,
    added: 19,
    cases: ["美妆品牌上架时间缩短 70%", "日中英客服回覆自动化"],
    workflow: "商店诊断 → 内容模板 → 平台串接 → 持续优化",
  },
  {
    id: 6,
    name: "Legal Lens AI",
    initials: "LL",
    color: "#3d5775",
    country: "英國",
    flag: "GB",
    region: "europe",
    city: "London",
    languages: ["en"],
    category: "vertical",
    categoryLabel: "產業解決方案",
    industries: ["法律", "合规", "专业服务"],
    features: ["合约初筛", "法规检索", "风险摘要"],
    description: "为小型律师事务所与企业法务提供文件分类、条款比较及法规知识检索系统。",
    pricing: "subscription",
    priceLabel: "US$1,200 / 月起",
    minPrice: 1200,
    ease: 4.2,
    rating: 4.8,
    trust: 97,
    delivery: 91,
    value: 80,
    reviews: 31,
    verified: true,
    featured: false,
    added: 18,
    cases: ["合约初筛工时减少 55%", "内部法规检索准确率达 92%"],
    workflow: "法规范围确认 → 文件清理 → 检索测试 → 权限上线",
  },
  {
    id: 7,
    name: "GrowthLoop One",
    initials: "GL",
    color: "#b64068",
    country: "美國",
    flag: "US",
    region: "north-america",
    city: "Austin",
    languages: ["en"],
    category: "automation",
    categoryLabel: "流程自動化",
    industries: ["B2B SaaS", "顾问", "新创"],
    features: ["销售自动化", "冷邮件个性化", "CRM 清理"],
    description: "打造从市场名单、个性化触达到 CRM 更新的 B2B 获客自动化系统。",
    pricing: "performance",
    priceLabel: "基础费 + 成效分润",
    minPrice: 1500,
    ease: 4.5,
    rating: 4.6,
    trust: 88,
    delivery: 87,
    value: 91,
    reviews: 46,
    verified: true,
    featured: false,
    added: 17,
    cases: ["顾问公司有效会议数成长 2.4 倍", "名单研究成本降低 68%"],
    workflow: "ICP 定义 → 名单与讯息测试 → 自动化上线 → 周报优化",
  },
  {
    id: 8,
    name: "ClinicOps AI",
    initials: "CO",
    color: "#168a78",
    country: "澳洲",
    flag: "AU",
    region: "oceania",
    city: "Melbourne",
    languages: ["en", "zh"],
    category: "vertical",
    categoryLabel: "產業解決方案",
    industries: ["医疗", "诊所", "健康管理"],
    features: ["预约助手", "随访自动化", "内部知识库"],
    description: "协助小型诊所自动处理预约、常见问题、术后提醒与内部标准作业查询。",
    pricing: "project",
    priceLabel: "US$3,800 / 專案起",
    minPrice: 3800,
    ease: 4.6,
    rating: 4.7,
    trust: 94,
    delivery: 90,
    value: 89,
    reviews: 22,
    verified: true,
    featured: false,
    added: 16,
    cases: ["预约未到率降低 21%", "前台重复问题减少 48%"],
    workflow: "流程访谈 → 隐私审查 → 小范围试行 → 全面上线",
  },
  {
    id: 9,
    name: "PromptSchool Lab",
    initials: "PS",
    color: "#7256ba",
    country: "香港",
    flag: "HK",
    region: "asia",
    city: "Hong Kong",
    languages: ["zh", "en"],
    category: "content",
    categoryLabel: "內容行銷",
    industries: ["教育", "企业培训", "知识工作者"],
    features: ["AI 培训", "提示词系统", "内部教材"],
    description: "为企业设计角色化 AI 工作法、内部提示词库及可量化的团队训练计划。",
    pricing: "project",
    priceLabel: "US$1,800 / 工作坊起",
    minPrice: 1800,
    ease: 4.9,
    rating: 4.7,
    trust: 89,
    delivery: 96,
    value: 90,
    reviews: 71,
    verified: true,
    featured: false,
    added: 15,
    cases: ["金融团队完成 12 个角色工作流", "培训后 AI 周使用率达 86%"],
    workflow: "能力调查 → 情境设计 → 实作工作坊 → 30 日追踪",
  },
  {
    id: 10,
    name: "BuildTiny AI",
    initials: "BT",
    color: "#247288",
    country: "荷蘭",
    flag: "NL",
    region: "europe",
    city: "Amsterdam",
    languages: ["en"],
    category: "agent",
    categoryLabel: "AI Agent",
    industries: ["微型 SaaS", "新创", "创作者"],
    features: ["MVP 开发", "低代码", "AI 产品化"],
    description: "协助非技术创办人在四周内完成可收费的 AI 微型 SaaS 与早期市场验证。",
    pricing: "project",
    priceLabel: "US$7,500 / MVP 起",
    minPrice: 7500,
    ease: 4.4,
    rating: 4.7,
    trust: 90,
    delivery: 88,
    value: 86,
    reviews: 17,
    verified: true,
    featured: true,
    added: 14,
    cases: ["四周上线法规摘要 SaaS", "首月获得 23 位付费用户"],
    workflow: "市场验证 → 产品规格 → 两周 Sprint → 付费测试",
  },
  {
    id: 11,
    name: "FreeStack Automations",
    initials: "FS",
    color: "#4e789d",
    country: "印度",
    flag: "IN",
    region: "asia",
    city: "Bengaluru",
    languages: ["en"],
    category: "automation",
    categoryLabel: "流程自動化",
    industries: ["自由工作者", "微型企业", "新创"],
    features: ["免费工具组合", "Google Workspace", "无代码"],
    description: "使用免费与开源工具，为预算有限的一人公司建立基础营运自动化。",
    pricing: "free",
    priceLabel: "免費診斷 / US$450 起",
    minPrice: 0,
    ease: 4.8,
    rating: 4.5,
    trust: 83,
    delivery: 91,
    value: 98,
    reviews: 82,
    verified: false,
    featured: false,
    added: 13,
    cases: ["自由工作者报价流程自动化", "每月软件费控制在 US$30 内"],
    workflow: "免费诊断 → 工具选型 → 模板安装 → 自主管理",
  },
  {
    id: 12,
    name: "LatAm Sales AI",
    initials: "LS",
    color: "#ca6a2c",
    country: "墨西哥",
    flag: "MX",
    region: "other",
    city: "Mexico City",
    languages: ["es", "en"],
    category: "commerce",
    categoryLabel: "電商銷售",
    industries: ["拉美市场", "跨境销售", "消费品牌"],
    features: ["西语本地化", "WhatsApp 销售", "线索评分"],
    description: "协助国际品牌进入拉丁美洲，以西语内容、WhatsApp 与 AI 线索评分完成销售本地化。",
    pricing: "performance",
    priceLabel: "US$900 + 成效分潤",
    minPrice: 900,
    ease: 4.5,
    rating: 4.6,
    trust: 86,
    delivery: 89,
    value: 93,
    reviews: 34,
    verified: true,
    featured: false,
    added: 12,
    cases: ["保健品牌西语询问量成长 140%", "销售回覆时间降至 6 分钟"],
    workflow: "市场定位 → 西语素材 → 通路串接 → 成效分润",
  },
];

const state = {
  query: "",
  category: "all",
  regions: [],
  pricing: [],
  budget: 10000,
  ease: 0,
  language: "all",
  sort: "recommended",
  favorites: JSON.parse(localStorage.getItem("kogFavorites") || "[]"),
  compare: [],
  favoritesOnly: false,
};

const labels = {
  region: {
    asia: "亞洲",
    "north-america": "北美",
    europe: "歐洲",
    oceania: "大洋洲",
    other: "其他地區",
  },
  pricing: {
    free: "可免費開始",
    subscription: "訂閱制",
    project: "專案報價",
    performance: "成效分潤",
  },
};

const companyList = document.getElementById("companyList");
const emptyState = document.getElementById("emptyState");
const detailDialog = document.getElementById("detailDialog");
const compareDialog = document.getElementById("compareDialog");
const flowDialog = document.getElementById("flowDialog");

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, "");
}

function getFilteredCompanies() {
  const query = normalize(state.query);
  const filtered = companies.filter((company) => {
    const haystack = normalize(
      [
        company.name,
        company.country,
        company.city,
        company.categoryLabel,
        company.description,
        ...company.industries,
        ...company.features,
      ].join(" "),
    );
    return (
      (!query || haystack.includes(query)) &&
      (state.category === "all" || company.category === state.category) &&
      (!state.regions.length || state.regions.includes(company.region)) &&
      (!state.pricing.length || state.pricing.includes(company.pricing)) &&
      (state.budget >= 10000 || company.minPrice <= state.budget) &&
      company.ease >= state.ease &&
      (state.language === "all" || company.languages.includes(state.language)) &&
      (!state.favoritesOnly || state.favorites.includes(company.id))
    );
  });

  return filtered.sort((a, b) => {
    if (state.sort === "rating") return b.rating - a.rating;
    if (state.sort === "ease") return b.ease - a.ease;
    if (state.sort === "price-low") return a.minPrice - b.minPrice;
    if (state.sort === "newest") return b.added - a.added;
    return (
      Number(b.featured) - Number(a.featured) ||
      b.trust + b.rating * 10 + b.value - (a.trust + a.rating * 10 + a.value)
    );
  });
}

function cardTemplate(company) {
  const favorite = state.favorites.includes(company.id);
  const compared = state.compare.includes(company.id);
  return `
    <article class="company-card">
      <div class="company-logo" style="--logo:${company.color}">${company.initials}</div>
      <div class="company-main">
        <div class="company-title-row">
          <h3>${company.name}</h3>
          ${company.verified ? '<span class="verified-badge">✓ 已驗證</span>' : ""}
          ${company.featured ? '<span class="featured-badge">KOG 推薦</span>' : ""}
        </div>
        <div class="company-meta">
          <span>${company.flag} · ${company.country} / ${company.city}</span>
          <span>${company.categoryLabel}</span>
          <span>${company.languages.map(languageName).join(" / ")}</span>
          <span>${company.reviews} 則評價</span>
        </div>
        <p class="company-description">${company.description}</p>
        <div class="tag-row">
          ${company.features.map((feature) => `<span class="tag">${feature}</span>`).join("")}
          ${company.industries.slice(0, 2).map((industry) => `<span class="tag">${industry}</span>`).join("")}
        </div>
      </div>
      <div class="company-side">
        <div class="rating-grid">
          <div><span>專業評分</span><strong class="star">★ ${company.rating}</strong></div>
          <div><span>易用程度</span><strong>${company.ease}</strong></div>
        </div>
        <div class="price"><span>參考費用</span><strong>${company.priceLabel}</strong></div>
        <label class="compare-label">
          <input type="checkbox" data-compare="${company.id}" ${compared ? "checked" : ""} />
          加入比較
        </label>
        <div class="card-actions">
          <button class="icon-button ${favorite ? "active" : ""}" data-favorite="${company.id}" title="收藏">
            ${favorite ? "♥" : "♡"}
          </button>
          <button class="detail-button" data-detail="${company.id}">查看詳情</button>
        </div>
      </div>
    </article>
  `;
}

function languageName(code) {
  return { zh: "中文", en: "EN", ja: "日本語", es: "ES" }[code] || code;
}

function render() {
  const results = getFilteredCompanies();
  companyList.innerHTML = results.map(cardTemplate).join("");
  companyList.hidden = results.length === 0;
  emptyState.hidden = results.length !== 0;
  document.getElementById("resultStat").textContent = results.length;
  document.getElementById("resultsSummary").textContent =
    `找到 ${results.length} 家符合條件的公司，共收錄 ${companies.length} 家示範資料`;
  document.getElementById("resultsTitle").textContent = state.favoritesOnly
    ? "我的收藏"
    : state.category === "all"
      ? "全部 AI OPC"
      : document.querySelector(`[data-category="${state.category}"]`)?.textContent || "搜尋結果";
  document.getElementById("favoriteCount").textContent = state.favorites.length;
  renderActiveFilters();
  renderCompareBar();
}

function renderActiveFilters() {
  const filters = [];
  if (state.query) filters.push({ key: "query", label: `關鍵字：${state.query}` });
  if (state.category !== "all") {
    filters.push({
      key: "category",
      label: document.querySelector(`[data-category="${state.category}"]`).textContent,
    });
  }
  state.regions.forEach((value) => filters.push({ key: `region:${value}`, label: labels.region[value] }));
  state.pricing.forEach((value) => filters.push({ key: `pricing:${value}`, label: labels.pricing[value] }));
  if (state.budget < 10000) filters.push({ key: "budget", label: `预算 ≤ US$${state.budget.toLocaleString()}` });
  if (state.ease) filters.push({ key: "ease", label: `易用度 ≥ ${state.ease}` });
  if (state.language !== "all") filters.push({ key: "language", label: languageName(state.language) });
  if (state.favoritesOnly) filters.push({ key: "favorites", label: "只看收藏" });

  document.getElementById("activeFilters").innerHTML = filters
    .map((filter) => `<button class="active-filter" data-remove-filter="${filter.key}">${filter.label} ×</button>`)
    .join("");
}

function renderCompareBar() {
  const bar = document.getElementById("compareBar");
  bar.hidden = state.compare.length === 0;
  document.getElementById("compareSummary").textContent = `已選擇 ${state.compare.length} / 3`;
  document.getElementById("compareItems").innerHTML = state.compare
    .map((id) => {
      const company = companies.find((item) => item.id === id);
      return `<div class="compare-chip">${company.name}<button data-remove-compare="${id}">×</button></div>`;
    })
    .join("");
  document.getElementById("openCompare").disabled = state.compare.length < 2;
}

function toggleFavorite(id) {
  state.favorites = state.favorites.includes(id)
    ? state.favorites.filter((item) => item !== id)
    : [...state.favorites, id];
  localStorage.setItem("kogFavorites", JSON.stringify(state.favorites));
  render();
}

function toggleCompare(id, checked) {
  if (checked && state.compare.length >= 3) {
    alert("最多可同時比較 3 家 AI OPC。");
    render();
    return;
  }
  state.compare = checked
    ? [...new Set([...state.compare, id])]
    : state.compare.filter((item) => item !== id);
  render();
}

function openDetail(id) {
  const company = companies.find((item) => item.id === id);
  document.getElementById("detailContent").innerHTML = `
    <div class="detail-header">
      <div class="company-logo" style="--logo:${company.color}">${company.initials}</div>
      <div>
        <p class="eyebrow">${company.categoryLabel.toUpperCase()}</p>
        <h2>${company.name}</h2>
        <div class="company-meta">
          <span>${company.flag} · ${company.country} / ${company.city}</span>
          <span>${company.languages.map(languageName).join(" / ")}</span>
          <span>★ ${company.rating}（${company.reviews}）</span>
        </div>
      </div>
    </div>
    <div class="detail-body">
      <div>
        <section class="detail-section">
          <h3>專業介紹</h3>
          <p>${company.description}</p>
        </section>
        <section class="detail-section">
          <h3>特色能力</h3>
          <div class="tag-row">${company.features.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
        </section>
        <section class="detail-section">
          <h3>代表成果</h3>
          <ul>${company.cases.map((item) => `<li>${item}</li>`).join("")}</ul>
        </section>
        <section class="detail-section">
          <h3>標準工作流程</h3>
          <p>${company.workflow}</p>
        </section>
      </div>
      <aside>
        <div class="score-panel">
          ${scoreLine("可信度", company.trust)}
          ${scoreLine("交付能力", company.delivery)}
          ${scoreLine("性價比", company.value)}
          ${scoreLine("易用程度", company.ease * 20)}
          <div class="price">
            <span>參考費用</span>
            <strong>${company.priceLabel}</strong>
          </div>
          <button class="primary-button contact-button" data-contact="${company.id}">透過 KOG.ONE 洽談</button>
        </div>
      </aside>
    </div>
  `;
  detailDialog.showModal();
}

function scoreLine(label, score) {
  const display = score > 5 ? Math.round(score) : score;
  return `
    <div class="score-line">
      <span>${label}</span>
      <span class="score-track"><i style="width:${Math.min(score, 100)}%"></i></span>
      <strong>${display}</strong>
    </div>
  `;
}

function openComparison() {
  const selected = state.compare.map((id) => companies.find((item) => item.id === id));
  const rows = [
    ["所在地", ...selected.map((item) => `${item.flag} ${item.country}`)],
    ["主要功能", ...selected.map((item) => item.categoryLabel)],
    ["費用", ...selected.map((item) => item.priceLabel)],
    ["易用程度", ...selected.map((item) => `${item.ease} / 5`)],
    ["專業評分", ...selected.map((item) => `${item.rating} / 5`)],
    ["可信度", ...selected.map((item) => `${item.trust} / 100`)],
    ["特色能力", ...selected.map((item) => item.features.join("、"))],
    ["工作流程", ...selected.map((item) => item.workflow)],
  ];
  document.getElementById("comparisonContent").innerHTML = `
    <table class="comparison-table">
      <thead><tr><th>比較項目</th>${selected.map((item) => `<th>${item.name}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
    </table>
  `;
  compareDialog.showModal();
}

function flowSteps() {
  const steps = [
    ["提出需求", "说明目标、预算、地区与交付时间。"],
    ["AI 初筛", "依能力、费用与可信度建立候选名单。"],
    ["人工确认", "KOG.ONE 顾问确认需求与合作范围。"],
    ["合约交易", "确认报价、里程碑、付款及验收条件。"],
    ["交付评价", "追踪进度、完成验收并累积信用记录。"],
  ];
  return `<div class="flow-steps">${steps
    .map(
      (step, index) =>
        `<div class="flow-step"><span>${index + 1}</span><strong>${step[0]}</strong><p>${step[1]}</p></div>`,
    )
    .join("")}</div>`;
}

function openFlow(companyId = null, mode = "match") {
  const company = companyId ? companies.find((item) => item.id === companyId) : null;
  document.getElementById("flowTitle").textContent =
    mode === "join" ? "加入全球 AI OPC 人才庫" : company ? `洽談 ${company.name}` : "KOG.ONE 智慧媒合";
  document.getElementById("flowContent").innerHTML = `
    <div class="flow-content">
      ${mode === "join" ? "" : flowSteps()}
      <form class="request-form" id="requestForm">
        <label>姓名 / 公司<input name="name" required placeholder="请输入联络人或公司名称" /></label>
        <label>電子信箱<input name="email" type="email" required placeholder="name@company.com" /></label>
        <label>
          ${mode === "join" ? "主要能力" : "預算範圍"}
          <select name="budget">
            ${
              mode === "join"
                ? '<option>AI 自动化</option><option>AI Agent</option><option>内容行销</option><option>资料分析</option><option>产业解决方案</option>'
                : '<option>US$1,000 以下</option><option>US$1,000 - 5,000</option><option>US$5,000 - 10,000</option><option>US$10,000 以上</option>'
            }
          </select>
        </label>
        <label>服務地區<input name="region" placeholder="例如：台湾、东南亚、全球远距" /></label>
        <label class="full">
          ${mode === "join" ? "公司與服務介紹" : "需求說明"}
          <textarea name="message" required placeholder="${company ? `我想进一步了解 ${company.name}，项目需求是...` : "请简述目标、现况与希望完成的成果"}"></textarea>
        </label>
        <button class="primary-button" type="submit">${mode === "join" ? "提交入庫申請" : "送出媒合需求"}</button>
      </form>
    </div>
  `;
  flowDialog.showModal();
}

function openMethod() {
  document.getElementById("flowTitle").textContent = "KOG.ONE 評分方法";
  document.getElementById("flowContent").innerHTML = `
    <div class="method-content">
      <div class="method-card"><strong>專業能力 30%</strong><p>评估案例复杂度、产业经验、技术能力与服务聚焦程度。</p></div>
      <div class="method-card"><strong>可信程度 25%</strong><p>综合身份验证、案例证明、客户评价与交易履历。</p></div>
      <div class="method-card"><strong>交付能力 20%</strong><p>依据工作流程、时程表现、沟通品质与验收纪录。</p></div>
      <div class="method-card"><strong>易用程度 15%</strong><p>比较导入门槛、文件清楚度、客户参与成本与售后支持。</p></div>
      <div class="method-card"><strong>性價比 10%</strong><p>费用与成果、速度、可维护性及长期营运成本的综合表现。</p></div>
      <div class="method-card"><strong>持續更新</strong><p>资料变更、完成新交易或获得新评价后，评分会重新计算。</p></div>
    </div>
  `;
  flowDialog.showModal();
}

function resetFilters() {
  state.query = "";
  state.category = "all";
  state.regions = [];
  state.pricing = [];
  state.budget = 10000;
  state.ease = 0;
  state.language = "all";
  state.favoritesOnly = false;
  document.getElementById("searchInput").value = "";
  document.querySelectorAll("#filterPanel input[type=checkbox]").forEach((input) => (input.checked = false));
  document.querySelector('input[name="ease"][value="0"]').checked = true;
  document.getElementById("budgetRange").value = 10000;
  document.getElementById("budgetValue").textContent = "US$10,000+";
  document.getElementById("languageFilter").value = "all";
  document.querySelectorAll(".quick-filter").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "all");
  });
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.section === "directory");
  });
  render();
}

document.getElementById("searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  state.favoritesOnly = false;
  render();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
    event.preventDefault();
    document.getElementById("searchInput").focus();
  }
  if (event.key === "Escape") document.getElementById("filterPanel").classList.remove("open");
});

document.getElementById("quickFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  state.favoritesOnly = false;
  document.querySelectorAll(".quick-filter").forEach((item) => item.classList.toggle("active", item === button));
  render();
});

document.getElementById("filterPanel").addEventListener("change", (event) => {
  if (event.target.name === "region") {
    state.regions = [...document.querySelectorAll('input[name="region"]:checked')].map((input) => input.value);
  }
  if (event.target.name === "pricing") {
    state.pricing = [...document.querySelectorAll('input[name="pricing"]:checked')].map((input) => input.value);
  }
  if (event.target.name === "ease") state.ease = Number(event.target.value);
  state.favoritesOnly = false;
  render();
});

document.getElementById("budgetRange").addEventListener("input", (event) => {
  state.budget = Number(event.target.value);
  document.getElementById("budgetValue").textContent =
    state.budget >= 10000 ? "US$10,000+" : `US$${state.budget.toLocaleString()}`;
  render();
});

document.getElementById("languageFilter").addEventListener("change", (event) => {
  state.language = event.target.value;
  render();
});

document.getElementById("sortSelect").addEventListener("change", (event) => {
  state.sort = event.target.value;
  render();
});

companyList.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  const detail = event.target.closest("[data-detail]");
  if (favorite) toggleFavorite(Number(favorite.dataset.favorite));
  if (detail) openDetail(Number(detail.dataset.detail));
});

companyList.addEventListener("change", (event) => {
  if (event.target.matches("[data-compare]")) {
    toggleCompare(Number(event.target.dataset.compare), event.target.checked);
  }
});

document.getElementById("activeFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-filter]");
  if (!button) return;
  const [type, value] = button.dataset.removeFilter.split(":");
  if (type === "query") {
    state.query = "";
    document.getElementById("searchInput").value = "";
  }
  if (type === "category") {
    state.category = "all";
    document.querySelectorAll(".quick-filter").forEach((item) => {
      item.classList.toggle("active", item.dataset.category === "all");
    });
  }
  if (type === "region") {
    state.regions = state.regions.filter((item) => item !== value);
    document.querySelector(`input[name="region"][value="${value}"]`).checked = false;
  }
  if (type === "pricing") {
    state.pricing = state.pricing.filter((item) => item !== value);
    document.querySelector(`input[name="pricing"][value="${value}"]`).checked = false;
  }
  if (type === "budget") {
    state.budget = 10000;
    document.getElementById("budgetRange").value = 10000;
    document.getElementById("budgetValue").textContent = "US$10,000+";
  }
  if (type === "ease") {
    state.ease = 0;
    document.querySelector('input[name="ease"][value="0"]').checked = true;
  }
  if (type === "language") {
    state.language = "all";
    document.getElementById("languageFilter").value = "all";
  }
  if (type === "favorites") state.favoritesOnly = false;
  render();
});

document.querySelector(".main-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-section]");
  if (!button) return;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
  if (button.dataset.section === "favorites") {
    state.favoritesOnly = true;
    render();
  } else if (button.dataset.section === "method") {
    openMethod();
  } else {
    state.favoritesOnly = false;
    render();
  }
});

document.getElementById("compareBar").addEventListener("click", (event) => {
  const remove = event.target.closest("[data-remove-compare]");
  if (remove) toggleCompare(Number(remove.dataset.removeCompare), false);
});

document.getElementById("clearCompare").addEventListener("click", () => {
  state.compare = [];
  render();
});

document.getElementById("openCompare").addEventListener("click", openComparison);
document.getElementById("resetFilters").addEventListener("click", resetFilters);
document.getElementById("filterToggle").addEventListener("click", () => {
  document.getElementById("filterPanel").classList.toggle("open");
});
document.getElementById("matchButton").addEventListener("click", () => openFlow());
document.getElementById("emptyMatchButton").addEventListener("click", () => openFlow());
document.getElementById("joinButton").addEventListener("click", () => openFlow(null, "join"));
document.getElementById("howButton").addEventListener("click", () => openFlow());

document.addEventListener("click", (event) => {
  const contact = event.target.closest("[data-contact]");
  const close = event.target.closest("[data-close-dialog]");
  if (contact) {
    detailDialog.close();
    openFlow(Number(contact.dataset.contact));
  }
  if (close) close.closest("dialog").close();
});

document.addEventListener("submit", (event) => {
  if (event.target.id !== "requestForm") return;
  event.preventDefault();
  const button = event.target.querySelector("button[type=submit]");
  button.textContent = "已收到，KOG.ONE 将与你联系";
  button.disabled = true;
});

render();
