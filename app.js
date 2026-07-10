const STORAGE_KEY = 'kog_wallet_exchange_applications_v1';
const $ = (selector) => document.querySelector(selector);
const fmt = new Intl.NumberFormat('zh-Hans');

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

function calculate(value) {
  const numeric = Math.max(Number(value || 0), 0);
  return {
    local: numeric * 0.8,
    hq: numeric * 0.2,
    kcoin: numeric,
  };
}

function updateCalculator() {
  const value = Number($('#valueInput')?.value || 0);
  const currency = $('#currencyInput')?.value || 'K.NTD';
  const result = calculate(value);
  $('#localValue').textContent = `${fmt.format(result.local)} ${currency}`;
  $('#hqValue').textContent = `${fmt.format(result.hq)} ${currency}`;
  $('#kcoinValue').textContent = `${fmt.format(result.kcoin)} KCOINs`;
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
    value: Number(formData.get('value') || 0),
    currency: formData.get('currency'),
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
    const result = calculate(app.value);
    sum.local += result.local;
    sum.hq += result.hq;
    sum.kcoin += result.kcoin;
    return sum;
  }, { local: 0, hq: 0, kcoin: 0 });
  $('#totalApps').textContent = apps.length;
  $('#totalLocal').textContent = fmt.format(totals.local);
  $('#totalHq').textContent = fmt.format(totals.hq);
  $('#totalKcoin').textContent = fmt.format(totals.kcoin);
  const tbody = $('#applicationsTable');
  if (!apps.length) {
    tbody.innerHTML = '<tr><td colspan="7">目前本浏览器尚无申请资料。提交一笔申请后会显示在这里。</td></tr>';
    return;
  }
  tbody.innerHTML = apps.map((app) => `
    <tr>
      <td><b>${safeText(app.code)}</b><br><span class="pill">${safeText(new Date(app.createdAt).toLocaleString())}</span></td>
      <td>${safeText(app.type)}</td>
      <td>${safeText(app.name)}<br><small>${safeText(app.email)}</small></td>
      <td>${safeText(app.location)}</td>
      <td>${safeText(app.contributionType)}<br><small>${safeText(app.description).slice(0, 80)}</small></td>
      <td>${fmt.format(Number(app.value || 0))} ${safeText(app.currency)}</td>
      <td><span class="pill">${safeText(app.status)}</span></td>
    </tr>
  `).join('');
}

function exportCsv() {
  const apps = readApps();
  if (!apps.length) return alert('目前没有可导出的申请资料。');
  const headers = ['code','createdAt','status','type','name','location','email','contact','contributionType','description','value','currency','request'];
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
