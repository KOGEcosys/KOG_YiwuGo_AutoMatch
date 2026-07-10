const STORAGE_KEY = 'kog_wallet_exchange_applications_v3';
const $ = (selector) => document.querySelector(selector);
const fmt = new Intl.NumberFormat('zh-Hans', { maximumFractionDigits: 4 });

// KOG internal reference rules.
// General exchange: 1 K.USD = 30 K.NTD = 7 K.RMB = 1 RGA. RAG is treated as an alias typo of RGA.
// Regional KOG basic hourly standard:
// EU: 1 K.TIME = 20 K.USD.
// Taiwan: 1 K.TIME = 300 K.NTD = 10 K.USD.
// Mainland China: 1 K.TIME = 30 K.RMB = 30/7 K.USD.
// 1 K.FOOD = 1 K.TIME.
// 1 KOG = 1 K.Gold = 1 oz gold price, entered manually as K.USD per oz.
const GENERAL_RATE_USD = {
  'K.USD': 1,
  'RGA': 1,
  'RAG': 1,
  'K.NTD': 1 / 30,
  'K.RMB': 1 / 7,
};
const TIME_RATE_USD = {
  eu: 20,
  taiwan: 300 / 30,
  china: 30 / 7,
};
const REGION_LABEL = {
  eu: '欧盟地区 KOG 基本时薪：1 K.TIME = 20 K.USD',
  taiwan: '台湾地区 KOG 基本时薪：1 K.TIME = 300 K.NTD = 10 K.USD',
  china: '中国大陆地区 KOG 基本时薪：1 K.TIME = 30 K.RMB ≈ 4.2857 K.USD',
};
const TOKENS = ['K.NTD', 'K.USD', 'K.RMB', 'RGA', 'K.TIME', 'K.FOOD', 'KOG', 'K.Gold'];

function safeText(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function readApps() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch { return []; }
}
function saveApps(apps) { localStorage.setItem(STORAGE_KEY, JSON.stringify(apps)); }

function getRegion() { return $('#regionInput')?.value || 'taiwan'; }
function getTimeUsd(region = getRegion()) { return TIME_RATE_USD[region] || TIME_RATE_USD.taiwan; }
function getGoldUsd() { return Math.max(Number($('#goldPriceInput')?.value || 0), 0); }

function toUsd(value, token, region = getRegion(), goldUsd = getGoldUsd()) {
  const numeric = Math.max(Number(value || 0), 0);
  if (token === 'K.TIME' || token === 'K.FOOD') return numeric * getTimeUsd(region);
  if (token === 'KOG' || token === 'K.Gold') return goldUsd > 0 ? numeric * goldUsd : 0;
  return numeric * (GENERAL_RATE_USD[token] || 1);
}

function fromUsd(usdValue, token, region = getRegion(), goldUsd = getGoldUsd()) {
  if (token === 'K.TIME' || token === 'K.FOOD') return usdValue / getTimeUsd(region);
  if (token === 'KOG' || token === 'K.Gold') return goldUsd > 0 ? usdValue / goldUsd : null;
  return usdValue / (GENERAL_RATE_USD[token] || 1);
}

function convertAll(usdValue) {
  const region = getRegion();
  const goldUsd = getGoldUsd();
  return Object.fromEntries(TOKENS.map((token) => [token, fromUsd(usdValue, token, region, goldUsd)]));
}

function calculate(value, token) {
  const baseUsd = toUsd(value, token);
  return {
    total: baseUsd,
    local: baseUsd * 0.8,
    hq: baseUsd * 0.2,
    kcoin: baseUsd,
  };
}

function tokenAmount(value, token) {
  if (value === null || Number.isNaN(value)) return token === 'KOG' || token === 'K.Gold' ? '需输入金价' : '-';
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Number(value.toFixed(4));
  return `${fmt.format(rounded)} ${token}`;
}

function rowTemplate(label, usdValue, note = '') {
  const values = convertAll(usdValue);
  return `<tr><td><b>${label}</b>${note ? `<br><small>${safeText(note)}</small>` : ''}</td>${TOKENS.map((token) => `<td>${tokenAmount(values[token], token)}</td>`).join('')}</tr>`;
}

function updateCalculator() {
  const value = Number($('#valueInput')?.value || 0);
  const token = $('#currencyInput')?.value || 'K.TIME';
  const result = calculate(value, token);
  const baseText = tokenAmount(result.total, 'K.USD');
  $('#regionRule').textContent = REGION_LABEL[getRegion()];
  $('#baseValue').textContent = baseText;
  $('#localValue').textContent = `${tokenAmount(result.local, 'K.USD')} 等值`;
  $('#hqValue').textContent = `${tokenAmount(result.hq, 'K.USD')} 等值`;
  $('#kcoinValue').textContent = `${tokenAmount(result.kcoin, 'K.USD')} 等值`;
  const table = $('#tokenTable');
  if (table) {
    table.innerHTML = [
      rowTemplate('总价值 100%', result.total, `${value || 0} ${token}`),
      rowTemplate('地方资源池 80%', result.local, '由地方 KOG 联盟、教会、非盈利机构或时间银行形成地方本位价值体'),
      rowTemplate('KOG 总部 20%', result.hq, '总部交换、系统运营、审核、风控、全球支持'),
      rowTemplate('参与方 KCOINs 100%', result.kcoin, 'KCOINs 为生态权益与互助交换记录单位'),
    ].join('');
  }
}

function appCode(index) {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  return `KOG-${date}-${String(index + 1).padStart(4, '0')}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const apps = readApps();
  const token = formData.get('currency') || 'K.NTD';
  const value = Number(formData.get('value') || 0);
  const region = formData.get('region') || getRegion();
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    code: appCode(apps.length),
    createdAt: new Date().toISOString(),
    status: formData.get('contributionType')?.includes('特殊资产') ? '合规审查' : '待地方团队联系',
    type: formData.get('type'), name: formData.get('name'), location: formData.get('location'),
    email: formData.get('email'), contact: formData.get('contact'), contributionType: formData.get('contributionType'),
    description: formData.get('description'), value, currency: token, region,
    request: formData.get('request'), baseUsd: toUsd(value, token, region, getGoldUsd()),
  };
  apps.unshift(record); saveApps(apps); form.reset();
  $('#formMessage').className = 'form-message success';
  $('#formMessage').textContent = `已提交：${record.code}。地方 KOG 团队可在下方管理演示区查看并导出资料。`;
  updateDashboard(); updateCalculator();
}

function updateDashboard() {
  const apps = readApps();
  const totals = apps.reduce((sum, app) => {
    const usd = Number(app.baseUsd || toUsd(app.value, app.currency, app.region || getRegion(), getGoldUsd()));
    sum.local += usd * 0.8; sum.hq += usd * 0.2; sum.kcoin += usd; return sum;
  }, { local: 0, hq: 0, kcoin: 0 });
  $('#totalApps').textContent = apps.length;
  $('#totalLocal').textContent = tokenAmount(totals.local, 'K.USD');
  $('#totalHq').textContent = tokenAmount(totals.hq, 'K.USD');
  $('#totalKcoin').textContent = tokenAmount(totals.kcoin, 'K.USD');
  const tbody = $('#applicationsTable');
  if (!apps.length) { tbody.innerHTML = '<tr><td colspan="8">目前本浏览器尚无申请资料。提交一笔申请后会显示在这里。</td></tr>'; return; }
  tbody.innerHTML = apps.map((app) => `<tr><td><b>${safeText(app.code)}</b><br><span class="pill">${safeText(new Date(app.createdAt).toLocaleString())}</span></td><td>${safeText(app.type)}</td><td>${safeText(app.name)}<br><small>${safeText(app.email)}</small></td><td>${safeText(app.location)}</td><td>${safeText(app.contributionType)}<br><small>${safeText(app.description).slice(0, 80)}</small></td><td>${fmt.format(Number(app.value || 0))} ${safeText(app.currency)}<br><small>${safeText(app.region || '')}</small></td><td>${tokenAmount(Number(app.baseUsd || 0), 'K.USD')}</td><td><span class="pill">${safeText(app.status)}</span></td></tr>`).join('');
}

function exportCsv() {
  const apps = readApps(); if (!apps.length) return alert('目前没有可导出的申请资料。');
  const headers = ['code','createdAt','status','type','name','location','email','contact','contributionType','description','value','currency','region','baseUsd','request'];
  const rows = [headers.join(',')].concat(apps.map((app) => headers.map((key) => `"${String(app[key] ?? '').replaceAll('"', '""')}"`).join(',')));
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = `kog-wallet-applications-${new Date().toISOString().slice(0, 10)}.csv`; a.click(); URL.revokeObjectURL(url);
}
function clearData() { if (!confirm('确认清除本浏览器的演示申请资料？')) return; localStorage.removeItem(STORAGE_KEY); updateDashboard(); }

['valueInput','currencyInput','regionInput','goldPriceInput'].forEach((id) => $(`#${id}`)?.addEventListener('input', updateCalculator));
['currencyInput','regionInput'].forEach((id) => $(`#${id}`)?.addEventListener('change', updateCalculator));
$('#applicationForm')?.addEventListener('submit', handleSubmit);
$('#exportCsv')?.addEventListener('click', exportCsv);
$('#clearData')?.addEventListener('click', clearData);
updateCalculator(); updateDashboard();