const STORAGE_KEY = 'kog_wallet_exchange_applications_v2';
const $ = (selector) => document.querySelector(selector);
const fmt = new Intl.NumberFormat('zh-Hans', { maximumFractionDigits: 4 });

// KOG internal reference value map, normalized to K.USD equivalent.
// 1 K.TIME = 1 K.FOOD = 20 K.USD = 20 RGA = 300 K.NTD = 30 K.RMB.
const TOKEN_RATE_USD = {
  'K.USD': 1,
  'RGA': 1,
  'K.NTD': 1 / 15,
  'K.RMB': 2 / 3,
  'K.TIME': 20,
  'K.FOOD': 20,
};
const TOKENS = ['K.NTD', 'K.USD', 'K.RMB', 'RGA', 'K.TIME', 'K.FOOD'];

function safeText(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
}

function readApps() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
}

function saveApps(apps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

function toUsd(value, token) {
  const numeric = Math.max(Number(value || 0), 0);
  return numeric * (TOKEN_RATE_USD[token] || 1);
}

function fromUsd(usdValue, token) {
  return usdValue / (TOKEN_RATE_USD[token] || 1);
}

function convertAll(usdValue) {
  return Object.fromEntries(TOKENS.map((token) => [token, fromUsd(usdValue, token)]));
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
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Number(value.toFixed(4));
  return `${fmt.format(rounded)} ${token}`;
}

function rowTemplate(label, usdValue, note = '') {
  const values = convertAll(usdValue);
  return `<tr>
    <td><b>${label}</b>${note ? `<br><small>${safeText(note)}</small>` : ''}</td>
    ${TOKENS.map((token) => `<td>${tokenAmount(values[token], token)}</td>`).join('')}
  </tr>`;
}

function updateCalculator() {
  const value = Number($('#valueInput')?.value || 0);
  const token = $('#currencyInput')?.value || 'K.TIME';
  const result = calculate(value, token);
  $('#baseValue').textContent = tokenAmount(result.total, 'K.USD');
  $('#localValue').textContent = `${tokenAmount(result.local, 'K.USD')} 等值`;
  $('#hqValue').textContent = `${tokenAmount(result.hq, 'K.USD')} 等值`;
  $('#kcoinValue').textContent = `${tokenAmount(result.kcoin, 'K.USD')} 等值`;
  const table = $('#tokenTable');
  if (table) {
    table.innerHTML = [
      rowTemplate('贡献总价值 100%', result.total, `${fmt.format(value || 0)} ${token}`),
      rowTemplate('地方资源池 80%', result.local, '由地方 KOG 联盟、非盈利机构、教会、时间银行承接'),
      rowTemplate('KOG 总部 20%', result.hq, '用于系统、审核、风控、跨区媒合与全球运营'),
      rowTemplate('参与方 KCOINs 100%', result.kcoin, 'KCOINs 供应记录按贡献等值记录'),
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
  const value = Number(formData.get('value') || 0);
  const currency = formData.get('currency') || 'K.TIME';
  const calc = calculate(value, currency);
  const record = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    code: appCode(apps.length),
    createdAt: new Date().toISOString(),
    status: formData.get('contributionType')?.includes('特殊资产') ? '合规审查' : '待地方团队联系',
    type: formData.get('type'),
    name: formData.get('name'),
    location: formData.get('location'),
    email: formData.get('email'),
    contact: formData.get('contact'),
    contributionType: formData.get('contributionType'),
    description: formData.get('description'),
    value,
    currency,
    baseUsd: calc.total,
    localUsd: calc.local,
    hqUsd: calc.hq,
    kcoinUsd: calc.kcoin,
    request: formData.get('request'),
  };
  apps.unshift(record);
  saveApps(apps);
  form.reset();
  $('#formMessage').className = 'form-message success';
  $('#formMessage').textContent = `已提交：${record.code}。地方 KOG 团队可在下方管理演示区查看并导出资料。`;
  updateDashboard();
  updateCalculator();
}

function updateDashboard() {
  const apps = readApps();
  const totals = apps.reduce((sum, app) => {
    const result = calculate(app.value, app.currency || 'K.TIME');
    sum.local += result.local;
    sum.hq += result.hq;
    sum.kcoin += result.kcoin;
    return sum;
  }, { local: 0, hq: 0, kcoin: 0 });
  $('#totalApps').textContent = apps.length;
  $('#totalLocal').textContent = fmt.format(Number(totals.local.toFixed(2)));
  $('#totalHq').textContent = fmt.format(Number(totals.hq.toFixed(2)));
  $('#totalKcoin').textContent = fmt.format(Number(totals.kcoin.toFixed(2)));
  const tbody = $('#applicationsTable');
  if (!apps.length) {
    tbody.innerHTML = '<tr><td colspan="7">目前本浏览器尚无申请资料。提交一笔申请后会显示在这里。</td></tr>';
    return;
  }
  tbody.innerHTML = apps.map((app) => {
    const result = calculate(app.value, app.currency || 'K.TIME');
    return `<tr>
      <td><b>${safeText(app.code)}</b><br><span class="pill">${safeText(new Date(app.createdAt).toLocaleString())}</span></td>
      <td>${safeText(app.type)}</td>
      <td>${safeText(app.name)}<br><small>${safeText(app.email)}</small></td>
      <td>${safeText(app.location)}</td>
      <td>${safeText(app.contributionType)}<br><small>${safeText(app.description).slice(0, 80)}</small></td>
      <td>${fmt.format(Number(app.value || 0))} ${safeText(app.currency)}<br><small>${tokenAmount(result.total, 'K.USD')} 等值</small></td>
      <td><span class="pill">${safeText(app.status)}</span></td>
    </tr>`;
  }).join('');
}

function exportCsv() {
  const apps = readApps();
  if (!apps.length) return alert('目前没有可导出的申请资料。');
  const headers = ['code','createdAt','status','type','name','location','email','contact','contributionType','description','value','currency','baseUsd','localUsd','hqUsd','kcoinUsd','request'];
  const rows = [headers.join(',')].concat(apps.map((app) => headers.map((key) => {
    const value = String(app[key] ?? '').replaceAll('"', '""');
    return `"${value}"`;
  }).join(',')));
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kog-wallet-applications-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearData() {
  if (!confirm('确认清除本浏览器的演示申请资料？')) return;
  localStorage.removeItem(STORAGE_KEY);
  updateDashboard();
}

$('#valueInput')?.addEventListener('input', updateCalculator);
$('#currencyInput')?.addEventListener('change', updateCalculator);
$('#applicationForm')?.addEventListener('submit', handleSubmit);
$('#exportCsv')?.addEventListener('click', exportCsv);
$('#clearData')?.addEventListener('click', clearData);

updateCalculator();
updateDashboard();
