// gynonc-board 共用元件 + localStorage 進度追蹤

const STORAGE_KEY = 'gynonc_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

function saveProgress(p) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

// 標記某癌別 section 進度（0-5 stars）
function setSectionRating(cancer, section, rating) {
  const p = loadProgress();
  p[cancer] = p[cancer] || {};
  p[cancer][section] = rating;
  saveProgress(p);
}

function getSectionRating(cancer, section) {
  const p = loadProgress();
  return p[cancer]?.[section] || 0;
}

// 載 JSON 資料（fetch from /data/<cancer>/<file>.json）
async function loadCancerData(cancer, dataset) {
  const res = await fetch(`../data/${cancer}/${dataset}.json`);
  if (!res.ok) throw new Error(`fetch failed: ${cancer}/${dataset}`);
  return res.json();
}

// Trial card 渲染
function renderTrialCard(trial) {
  return `
    <article class="trial-card">
      <h3>${escapeHtml(trial.name)} <span class="meta">${escapeHtml(trial.year)} · ${escapeHtml(trial.design || '')}</span></h3>
      <dl>
        ${trial.population ? `<dt>族群</dt><dd>${escapeHtml(trial.population)}</dd>` : ''}
        ${trial.intervention ? `<dt>介入</dt><dd>${escapeHtml(trial.intervention)}</dd>` : ''}
        ${trial.control ? `<dt>對照</dt><dd>${escapeHtml(trial.control)}</dd>` : ''}
        ${trial.primary_endpoint ? `<dt>主要終點</dt><dd>${escapeHtml(trial.primary_endpoint)}</dd>` : ''}
        ${trial.key_result ? `<dt>關鍵結果</dt><dd>${escapeHtml(trial.key_result)}</dd>` : ''}
        ${trial.implication ? `<dt>臨床意義</dt><dd>${escapeHtml(trial.implication)}</dd>` : ''}
        ${trial.citation ? `<dt>引註</dt><dd><code>${escapeHtml(trial.citation)}</code></dd>` : ''}
      </dl>
    </article>
  `;
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
