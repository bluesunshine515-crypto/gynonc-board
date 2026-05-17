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

// 渲染藥物 cheatsheet (drugs.json)
function renderDrugs(data) {
  let html = '';

  if (data._metadata) {
    html += `
      <div class="staging-meta">
        <div><b>來源</b>：${escapeHtml(data._metadata.source)}</div>
        <div class="meta-small">${escapeHtml(data._metadata.external_basis || '')}</div>
        <div class="meta-small">最後更新：${escapeHtml(data._metadata.last_updated || '—')} · review：${escapeHtml(data._metadata.review_status || '—')}</div>
        ${data._metadata.note ? `<div class="meta-small" style="margin-top:6px;color:var(--rust);">⚠️ ${escapeHtml(data._metadata.note)}</div>` : ''}
      </div>
    `;
  }

  if (data.categories?.length) {
    data.categories.forEach(cat => {
      html += `
        <h3 class="staging-h3">${escapeHtml(cat.title)}</h3>
        ${cat.subtitle ? `<div class="staging-group-def">${escapeHtml(cat.subtitle)}</div>` : ''}
      `;
      cat.regimens.forEach(r => {
        html += `
          <div class="regimen-card">
            <h4 class="regimen-name">${escapeHtml(r.name)}</h4>
            <table class="regimen-drugs">
              <thead><tr><th>藥物</th><th>劑量</th><th>給藥</th><th>時程</th></tr></thead>
              <tbody>
                ${r.drugs.map(d => `
                  <tr>
                    <td><b>${escapeHtml(d.name)}</b></td>
                    <td>${escapeHtml(d.dose)}</td>
                    <td>${escapeHtml(d.route)}</td>
                    <td>${escapeHtml(d.schedule)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            <div class="regimen-meta">
              <div><b>週期</b>：${escapeHtml(r.cycle)}</div>
              <div><b>適應症</b>：${escapeHtml(r.indication)}</div>
              ${r.note ? `<div><b>備註</b>：${escapeHtml(r.note)}</div>` : ''}
              ${r.reference ? `<div class="meta-small"><b>引註</b>：${escapeHtml(r.reference)}</div>` : ''}
            </div>
          </div>
        `;
      });
    });
  }

  if (data.treatment_notes?.length) {
    html += `<h3 class="staging-h3">💡 給藥注意事項</h3><div class="pearls-grid">`;
    data.treatment_notes.forEach(n => {
      html += `
        <div class="pearl-card">
          <h4>${escapeHtml(n.topic)}</h4>
          <div>${escapeHtml(n.detail)}</div>
        </div>
      `;
    });
    html += `</div>`;
  }

  return html;
}

// 渲染處置流程 (treatment.json)
function renderTreatment(data) {
  let html = '';

  if (data._metadata) {
    html += `
      <div class="staging-meta">
        <div><b>來源：</b>${escapeHtml(data._metadata.source)}</div>
        <div class="meta-small">最後更新：${escapeHtml(data._metadata.last_updated || '—')} · review：${escapeHtml(data._metadata.review_status || '—')}</div>
      </div>
    `;
  }

  // Mermaid 決策樹（多個）
  if (data.diagrams?.length) {
    data.diagrams.forEach(d => {
      html += `
        <h3 class="staging-h3">${escapeHtml(d.title)}</h3>
        ${d.subtitle ? `<div class="staging-group-def">${escapeHtml(d.subtitle)}</div>` : ''}
        <div class="mermaid-wrap">
          <pre class="mermaid">${escapeHtml(d.mermaid)}</pre>
        </div>
      `;
    });
  }

  // Sedlis criteria 表
  if (data.sedlis_criteria) {
    const s = data.sedlis_criteria;
    html += `
      <h3 class="staging-h3">📋 ${escapeHtml(s.name)} — 中度風險</h3>
      <div class="criteria-meta">
        <div><b>用途</b>：${escapeHtml(s.purpose)}</div>
        <div><b>處置</b>：${escapeHtml(s.indication)}</div>
        <div class="meta-small">${escapeHtml(s.evidence || '')}</div>
      </div>
      <table>
        <thead><tr><th>LVSI</th><th>間質侵犯深度</th><th>腫瘤大小</th></tr></thead>
        <tbody>
          ${s.criteria_combinations.map(c => `
            <tr>
              <td>${escapeHtml(c.LVSI)}</td>
              <td>${escapeHtml(c.stromal_invasion)}</td>
              <td>${escapeHtml(c.tumor_size)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="staging-special-impl"><b>結果</b>：${escapeHtml(s.result || '')}</div>
      <div class="staging-special-impl"><b>意義</b>：${escapeHtml(s.implication)}</div>
      ${s.exam_pearl ? `<div class="exam-pearl">💡 <b>考點</b>：${escapeHtml(s.exam_pearl)}</div>` : ''}
    `;
  }

  // Peters criteria
  if (data.peters_criteria) {
    const p = data.peters_criteria;
    html += `
      <h3 class="staging-h3">📋 ${escapeHtml(p.name)} — 高度風險</h3>
      <div class="criteria-meta">
        <div><b>用途</b>：${escapeHtml(p.purpose)}</div>
        <div><b>處置</b>：${escapeHtml(p.indication)}</div>
        <div class="meta-small">${escapeHtml(p.evidence || '')}</div>
      </div>
      <ul class="staging-clarifications">
        ${p.criteria_any_of.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
      </ul>
      <div class="staging-special-impl"><b>結果</b>：${escapeHtml(p.result || '')}</div>
      <div class="staging-special-impl"><b>意義</b>：${escapeHtml(p.implication)}</div>
      ${p.exam_pearl ? `<div class="exam-pearl">💡 <b>考點</b>：${escapeHtml(p.exam_pearl)}</div>` : ''}
    `;
  }

  // Treatment pearls
  if (data.treatment_pearls?.length) {
    html += `
      <h3 class="staging-h3">💡 治療要點 (Treatment Pearls)</h3>
      <div class="pearls-grid">
        ${data.treatment_pearls.map(p => `
          <div class="pearl-card">
            <h4>${escapeHtml(p.topic)}</h4>
            <div>${escapeHtml(p.detail)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  return html;
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

// ──────────────────────────────────────────────────────────────
// 渲染 Quiz / 練習題 (questions.json)
// 支援：作答 → 顯示正解 + 詳解 + inline mermaid 關聯決策樹
// localStorage：gynonc_<cancer>_attempts、gynonc_<cancer>_wrong
// ──────────────────────────────────────────────────────────────

function quizStorageKey(cancer, kind) {
  return `gynonc_${cancer}_${kind}`;
}

function loadQuizState(cancer) {
  try {
    const attempts = JSON.parse(localStorage.getItem(quizStorageKey(cancer, 'attempts')) || '{}');
    return attempts;
  } catch { return {}; }
}

function saveQuizAttempt(cancer, qid, selected, isCorrect) {
  const attempts = loadQuizState(cancer);
  attempts[qid] = { selected, isCorrect, at: Date.now() };
  localStorage.setItem(quizStorageKey(cancer, 'attempts'), JSON.stringify(attempts));
}

function renderQuiz(data, cancer) {
  let html = '';

  // metadata + 進度區
  const total = data.questions?.length || 0;
  const attempts = loadQuizState(cancer);
  const answered = Object.keys(attempts).length;
  const correct = Object.values(attempts).filter(a => a.isCorrect).length;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;

  if (data._metadata) {
    html += `
      <div class="staging-meta">
        <div><b>來源</b>：${escapeHtml(data._metadata.source || '')}</div>
        <div class="meta-small">最後更新：${escapeHtml(data._metadata.last_updated || '—')} · 共 ${total} 題</div>
      </div>
    `;
  }

  html += `
    <div class="quiz-progress-summary">
      <div class="quiz-progress-stat">
        <span class="quiz-progress-label">已作答</span>
        <span class="quiz-progress-value">${answered} / ${total}</span>
      </div>
      <div class="quiz-progress-stat">
        <span class="quiz-progress-label">正確</span>
        <span class="quiz-progress-value">${correct}</span>
      </div>
      <div class="quiz-progress-stat">
        <span class="quiz-progress-label">正確率</span>
        <span class="quiz-progress-value">${accuracy}%</span>
      </div>
      <button class="quiz-reset-btn" onclick="if(confirm('確定要重置所有作答紀錄？')) { localStorage.removeItem('${quizStorageKey(cancer, 'attempts')}'); location.reload(); }">重置紀錄</button>
    </div>
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width:${total > 0 ? (answered / total) * 100 : 0}%"></div>
    </div>
  `;

  // 題目列表
  if (data.questions?.length) {
    data.questions.forEach((q, idx) => {
      const prevAttempt = attempts[q.id];
      const isAnswered = !!prevAttempt;
      const diffStars = '★'.repeat(q.difficulty || 0) + '☆'.repeat(5 - (q.difficulty || 0));

      html += `
        <article class="quiz-card" id="quiz-${escapeHtml(q.id)}" data-qid="${escapeHtml(q.id)}" data-answer="${escapeHtml(q.answer)}">
          <header class="quiz-card-header">
            <div class="quiz-card-title">
              <span class="quiz-card-num">Q${idx + 1}</span>
              <span class="quiz-card-topic">${escapeHtml(q.topic || '')}</span>
            </div>
            <div class="quiz-card-meta">
              <span class="quiz-card-difficulty" title="難度">${diffStars}</span>
              <span class="quiz-card-category">${escapeHtml(q.category || '')}</span>
              ${isAnswered ? `<span class="quiz-card-badge ${prevAttempt.isCorrect ? 'correct' : 'wrong'}">${prevAttempt.isCorrect ? '✓ 已答對' : '✗ 答錯（已紀錄）'}</span>` : ''}
            </div>
          </header>

          <div class="quiz-question">${escapeHtml(q.question || '')}</div>

          ${q.has_image && q.image_data_uri ? `
            <figure class="quiz-image">
              <img src="${q.image_data_uri}" alt="${escapeHtml(q.image_description || 'question image')}" />
              ${q.image_description ? `<figcaption>${escapeHtml(q.image_description)}</figcaption>` : ''}
            </figure>
          ` : ''}

          <div class="quiz-options" role="radiogroup">
            ${['A', 'B', 'C', 'D'].map(opt => {
              const optText = q.options?.[opt] || '';
              if (!optText) return '';
              let cls = 'quiz-option';
              if (isAnswered) {
                if (opt === q.answer) cls += ' correct';
                else if (opt === prevAttempt.selected) cls += ' wrong';
                else cls += ' disabled';
              }
              return `
                <button class="${cls}" data-opt="${opt}" ${isAnswered ? 'disabled' : ''} onclick="handleQuizAnswer('${escapeHtml(cancer)}', '${escapeHtml(q.id)}', '${opt}', '${escapeHtml(q.answer)}')">
                  <span class="quiz-option-letter">${opt}</span>
                  <span class="quiz-option-text">${escapeHtml(optText)}</span>
                </button>
              `;
            }).join('')}
          </div>

          <div class="quiz-explanation" id="explain-${escapeHtml(q.id)}" ${isAnswered ? '' : 'hidden'}>
            ${renderQuizExplanation(q)}
          </div>
        </article>
      `;
    });
  }

  return html;
}

function renderQuizExplanation(q) {
  let html = `<div class="quiz-explain-header">💡 詳解 — 正解 <b>${escapeHtml(q.answer)}</b></div>`;

  if (q.explanation) {
    html += `<div class="quiz-explain-text">${escapeHtml(q.explanation)}</div>`;
  }

  const structured = q.explanation_structured;
  if (structured) {
    if (structured.key_points?.length) {
      html += `
        <div class="quiz-explain-section">
          <h5>關鍵重點</h5>
          <ul>${structured.key_points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
        </div>
      `;
    }

    if (structured.related_decision_tree) {
      const mid = 'mermaid-' + q.id.replace(/[^a-z0-9]/gi, '-');
      html += `
        <div class="quiz-explain-section">
          <h5>關聯決策樹</h5>
          <div class="mermaid-wrap">
            <pre class="mermaid" id="${mid}">${escapeHtml(structured.related_decision_tree)}</pre>
          </div>
        </div>
      `;
    }

    if (structured.references?.length) {
      html += `
        <div class="quiz-explain-section">
          <h5>引註</h5>
          <ul class="quiz-explain-refs">${structured.references.map(r => `<li><code>${escapeHtml(r)}</code></li>`).join('')}</ul>
        </div>
      `;
    }
  }

  return html;
}

// 全域 handler：作答 → 顯示詳解 + 觸發 mermaid 渲染
async function handleQuizAnswer(cancer, qid, selected, correctAnswer) {
  const isCorrect = selected === correctAnswer;
  saveQuizAttempt(cancer, qid, selected, isCorrect);

  const card = document.getElementById('quiz-' + qid);
  if (!card) return;

  // 標記選項：正解 green、所選錯誤 red、其他 disabled
  card.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = true;
    const opt = btn.dataset.opt;
    btn.classList.remove('selected');
    if (opt === correctAnswer) btn.classList.add('correct');
    else if (opt === selected) btn.classList.add('wrong');
    else btn.classList.add('disabled');
  });

  // 加 header badge
  const header = card.querySelector('.quiz-card-meta');
  if (header && !header.querySelector('.quiz-card-badge')) {
    const badge = document.createElement('span');
    badge.className = 'quiz-card-badge ' + (isCorrect ? 'correct' : 'wrong');
    badge.textContent = isCorrect ? '✓ 已答對' : '✗ 答錯（已紀錄）';
    header.appendChild(badge);
  }

  // 顯示詳解 + 渲染 mermaid
  const explain = document.getElementById('explain-' + qid);
  if (explain) {
    explain.hidden = false;
    if (window.mermaid) {
      const mermaidEl = explain.querySelector('.mermaid');
      if (mermaidEl) {
        await mermaid.run({ nodes: [mermaidEl] });
      }
    }
  }

  // 更新進度條
  const attempts = loadQuizState(cancer);
  const total = document.querySelectorAll('.quiz-card').length;
  const answered = Object.keys(attempts).length;
  const correct = Object.values(attempts).filter(a => a.isCorrect).length;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const stats = document.querySelectorAll('.quiz-progress-stat .quiz-progress-value');
  if (stats[0]) stats[0].textContent = `${answered} / ${total}`;
  if (stats[1]) stats[1].textContent = String(correct);
  if (stats[2]) stats[2].textContent = `${accuracy}%`;
  const fill = document.querySelector('.quiz-progress-fill');
  if (fill && total > 0) fill.style.width = `${(answered / total) * 100}%`;
}
