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

// 渲染 FIGO 分期 (staging.json)
function renderStaging(data) {
  let html = '';

  // 1. 版本資訊
  if (data._metadata) {
    html += `
      <div class="staging-meta">
        <div><b>版本：</b>${escapeHtml(data._metadata.current_version)}</div>
        <div class="meta-small">最後更新：${escapeHtml(data._metadata.last_updated || '—')} · review：${escapeHtml(data._metadata.review_status || '—')}</div>
      </div>
    `;
  }

  // 2. 2009 → 2018 變動
  if (data.key_changes_2009_to_2018?.length) {
    html += `
      <h3 class="staging-h3">📌 FIGO 2009 → 2018 重大變動</h3>
      <table class="staging-changes">
        <thead><tr>
          <th>變動</th><th>2009</th><th>2018</th><th>原因</th>
        </tr></thead>
        <tbody>
          ${data.key_changes_2009_to_2018.map(c => `
            <tr>
              <td><b>${escapeHtml(c.change)}</b></td>
              <td>${escapeHtml(c.before_2009)}</td>
              <td>${escapeHtml(c.after_2018)}</td>
              <td>${escapeHtml(c.why)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // 3. 2023 精緻化
  if (data.clarifications_2023?.length) {
    html += `
      <h3 class="staging-h3">📌 FIGO 2023 微調補充</h3>
      <ul class="staging-clarifications">
        ${data.clarifications_2023.map(c => `
          <li><b>${escapeHtml(c.topic)}</b>：${escapeHtml(c.detail)}</li>
        `).join('')}
      </ul>
    `;
  }

  // 3.5 特殊考量（special_considerations）
  if (data.special_considerations?.length) {
    html += `<h3 class="staging-h3">⚠️ 特殊考量（重要例外與最新更新）</h3>`;
    data.special_considerations.forEach(sc => {
      const list = sc.criteria || sc.patterns || sc.rules || [];
      html += `
        <div class="staging-special">
          <h4 class="staging-special-title">${escapeHtml(sc.topic)}</h4>
          <div class="staging-special-meta">
            ${sc.source ? `<span><b>來源</b>：${escapeHtml(sc.source)}</span>` : ''}
            ${sc.applies_to ? `<span><b>適用</b>：${escapeHtml(Array.isArray(sc.applies_to) ? sc.applies_to.join(', ') : sc.applies_to)}</span>` : ''}
            ${sc.category ? `<span><b>NCCN</b>：${escapeHtml(sc.category)}</span>` : ''}
          </div>
          ${list.length ? `<ul class="staging-special-list">${list.map(x => `<li>${escapeHtml(x)}</li>`).join('')}</ul>` : ''}
          ${sc.context ? `<div class="staging-special-note"><b>情境</b>：${escapeHtml(sc.context)}</div>` : ''}
          ${sc.implication ? `<div class="staging-special-impl"><b>意義</b>：${escapeHtml(sc.implication)}</div>` : ''}
        </div>
      `;
    });
  }

  // 4. 各期詳表（按 group I/II/III/IV 分組）
  if (data.stages?.length) {
    const grouped = {};
    data.stages.forEach(s => {
      const g = s.group || 'Other';
      grouped[g] = grouped[g] || { def: s.group_definition, items: [] };
      grouped[g].items.push(s);
    });

    html += `<h3 class="staging-h3">📋 各期詳表（FIGO 2018）</h3>`;
    for (const [g, payload] of Object.entries(grouped)) {
      html += `
        <h4 class="staging-h4">${escapeHtml(g)}</h4>
        <div class="staging-group-def">${escapeHtml(payload.def || '')}</div>
        <table class="staging-stages">
          <thead><tr>
            <th>分期</th>
            <th>定義</th>
            <th>治療摘要</th>
            <th>考點</th>
          </tr></thead>
          <tbody>
            ${payload.items.map(s => `
              <tr>
                <td><b>${escapeHtml(s.stage)}</b></td>
                <td>${escapeHtml(s.definition)}</td>
                <td>${escapeHtml(s.treatment_brief || '')}</td>
                <td><i>${escapeHtml(s.exam_pearl || '')}</i></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
  }

  return html;
}
