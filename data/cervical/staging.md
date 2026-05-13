# 子宮頸癌 FIGO 分期草稿（給 NotebookLM 驗證用）

> 本檔是 `staging.json` 的 Markdown 版本，目的：上傳到 NotebookLM 與 NCCN/FIGO PDF 做交叉驗證。
> 找出與最新 NCCN/FIGO 不一致或可補充處後，請將修正回填 `staging.json`。
>
> **資料來源（建議的 NotebookLM source）**：
> - NCCN Cervical Cancer Guidelines（最新版）
> - Bhatla N, et al. Revised FIGO staging 2018. *Int J Gynaecol Obstet* 2019;145(1):129-135.
> - Bhatla N, et al. FIGO 2023 update. *Int J Gynaecol Obstet* 2023;162(2):382-385.
>
> **生成日期**：2026-05-13 · **review 狀態**：pending
>
> **NotebookLM 建議提問範本**（複製到 NotebookLM chat）：
>
> ```
> 請對照 NCCN Cervical Cancer Guidelines 與 FIGO 2018/2023 文獻，
> 檢視我這份「子宮頸癌 FIGO 分期草稿」並指出：
>
> 1. 與最新 NCCN 不一致的內容（特別是治療摘要部分）
> 2. 分期定義數字（mm / cm cutoff）是否準確
> 3. 「考點」欄位是否仍是當前考試重點
> 4. 缺漏的重要分期細節或臨床要點
> 5. 是否該加入特殊組織型（small cell, adenosquamous）的處置差異
>
> 請引用 NCCN 章節編號或 FIGO 文獻頁碼。
> ```

---

## 1. FIGO 2009 → 2018 重大變動

| 變動 | 2009 版本 | 2018 版本 | 原因 |
|---|---|---|---|
| **IA 期取消橫向寬度限制** | IA1 ≤3 mm depth + ≤7 mm width；IA2 >3-5 mm depth + ≤7 mm width | IA1 ≤3 mm depth；IA2 >3-5 mm depth（橫向寬度不再列入分期條件） | 橫向寬度測量再現性差，FIGO panel 一致認為侵犯深度才是預後關鍵 |
| **IB 細分為 IB1 / IB2 / IB3** | IB1 < 4 cm；IB2 ≥ 4 cm（兩級） | IB1 > 5 mm 至 < 2 cm；IB2 ≥ 2 cm 至 < 4 cm；IB3 ≥ 4 cm（三級） | 2 cm 是預後重要切點（< 2 cm 才可考慮 trachelectomy 保留生育），分三層精準對應治療決策 |
| **新增 Stage IIIC**（基於淋巴結狀態） | LN 狀態不正式納入 FIGO 分期（雖然臨床決策考慮） | IIIC1 = pelvic LN+；IIIC2 = para-aortic LN+（不論原發腫瘤大小） | 影像技術進步，LN 狀態可靠且強烈影響治療（CCRT 是否含 extended-field RT） |
| **影像 / 病理結果可正式用於分期** | 嚴格 clinical staging（PE + 限定檢查；CT/MRI 不能改分期） | 允許 imaging（CT/MRI/PET）與 pathology 整合；以 suffix `r`（radiologic）或 `p`（pathologic）標註 | 現代影像精準度高，硬性排除已不合適。例：IIICr1 = 影像懷疑 pelvic LN+ |

## 2. FIGO 2023 微調補充

- **IIIC 期淋巴結轉移定義精緻化**：Macrometastasis (> 2 mm) 計入 IIIC；Micrometastasis (0.2-2 mm) 也計入但建議備註；Isolated tumor cells / ITC (< 0.2 mm) **不**計入分期。
- **Suffix 標註強化**：明確推薦寫為 IIIC1p（pathologic, 病理證實）或 IIIC1r（radiologic, 影像懷疑），影響預後與治療選擇。
- **2018 核心架構不變**：2023 update 主要是定義精緻化，未變更分期切點，臨床實務可繼續用 FIGO 2018。

---

## 3. 各期詳表（FIGO 2018）

### Stage I — 腫瘤局限於子宮頸

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA1** | 鏡下侵犯，間質侵犯深度 ≤ 3 mm | Conization（保留生育，切緣陰性）或 extrafascial / simple hysterectomy。LVSI(+) 加 pelvic LND（哨兵 SLN 可）。 | LVSI 是 IA1 是否做 LND 的關鍵；conization 切緣陰性即足夠（生育保留） |
| **IA2** | 鏡下侵犯，間質侵犯深度 > 3 mm 至 ≤ 5 mm | Modified radical / radical trachelectomy（保留生育，腫瘤 < 2 cm + LN(-)）或 modified radical hysterectomy + pelvic LND ± SLN。 | IA2 開始考慮 radical 手術；LVSI 普遍存在，LND 為標準 |
| **IB1** | 侵犯 > 5 mm（即超出 IA），最大徑 < 2 cm | Radical hysterectomy + pelvic LND（**open approach 首選 per LACC**）。保留生育：radical trachelectomy + LND。CCRT 是替代方案。 | LACC trial 後 NCCN 預設 open，MIS 需充分知情同意；trachelectomy 適合 < 2 cm |
| **IB2** | 腫瘤 ≥ 2 cm 至 < 4 cm | Radical hysterectomy + pelvic LND ± para-aortic LND；或 definitive CCRT（特別 ≥ 3-4 cm）。Trachelectomy 不建議（腫瘤 > 2 cm）。 | 2 cm 是 trachelectomy / NACT 的分水嶺；考慮 NACT-IDS 或 primary CCRT |
| **IB3** | 腫瘤 ≥ 4 cm | **Definitive CCRT 優於手術**（cisplatin weekly + EBRT + brachytherapy）。手術後高機率需 adjuvant RT/CCRT。 | 大腫瘤（≥4 cm）首選 CCRT；避免「手術 + 必加輔助 RT」雙重治療 |

### Stage II — 腫瘤超出子宮頸但未達骨盆壁 / 陰道下 1/3

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIA1** | 侵犯陰道上 2/3，無 parametrial 侵犯，腫瘤 < 4 cm | Radical hysterectomy + LND 或 definitive CCRT 二擇一 | IIA 仍可手術；IIB（parametrium+）開始全面走 CCRT |
| **IIA2** | 侵犯陰道上 2/3，無 parametrial 侵犯，腫瘤 ≥ 4 cm | Definitive CCRT 為主（大腫瘤）；手術非首選。 | IIA2 開始大多走 CCRT 而非手術 |
| **IIB** | Parametrial invasion 存在，但未達骨盆壁 | **Definitive CCRT**（cisplatin weekly + EBRT + brachytherapy）為標準；不建議 primary surgery。 | Parametrium 侵犯 = 走 CCRT，這是分水嶺；INTERLACE 2024 證實 induction chemo 加在 CCRT 前 PFS/OS 提升 |

### Stage III — 侵犯骨盆壁 / 陰道下 1/3 / LN+ / hydronephrosis

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIIA** | 侵犯陰道下 1/3，未達骨盆壁 | Definitive CCRT + brachytherapy（陰道延伸範圍納入 RT field） | 陰道下 1/3 = IIIA；考慮 vaginal brachy 提升劑量 |
| **IIIB** | 侵犯骨盆壁 OR 出現 hydronephrosis / non-functioning kidney | Definitive CCRT；hydronephrosis 可放支架（PCN / DJ stent）改善腎功能 | Hydronephrosis 即列 IIIB（不論原發腫瘤大小）；INTERLACE 主要族群即 III 期 |
| **IIIC1** | **Pelvic lymph node 轉移**（不論原發腫瘤大小或陰道侵犯範圍） | Definitive CCRT，pelvic field 含 LN drainage 範圍；若 para-aortic LN 也疑似 → 擴展 RT field | FIGO 2018 新增；LN(+) 不論原發大小都算 IIIC1；`r` 後綴 = 影像懷疑，`p` = 病理確診 |
| **IIIC2** | **Para-aortic lymph node 轉移**（不論 pelvic LN 與否） | Extended-field CCRT 包含 para-aortic 區域；考慮加 systemic chemo（如 INTERLACE pattern） | Para-aortic LN+ 預後最差的 stage III；extended-field RT 取代 pelvic-only field |

### Stage IV — 腫瘤擴展到 true pelvis 外或侵犯膀胱 / 直腸黏膜

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IVA** | 侵犯**膀胱**或**直腸黏膜**（biopsy 證實，bullous edema 不算） | Definitive CCRT（特別 fistula 風險高時謹慎）；或考慮 pelvic exenteration（選擇性個案） | Bullous edema 本身不算 IVA；要有切片才確診膀胱/直腸黏膜侵犯 |
| **IVB** | **Distant metastasis**（含 supraclavicular LN, lung, liver, bone 等） | Systemic therapy 為主：cisplatin/carbo + paclitaxel + bevacizumab + pembrolizumab（KEYNOTE-826 適應症）；palliative RT for symptomatic site | Pembrolizumab（CPS≥1）+ bevacizumab + chemo = 第一線標準；Cemiplimab 為二線；Tisotumab vedotin 為後線 |

---

## 4. 給 NotebookLM 的 review checklist

請 NotebookLM 對下列重點逐一驗證，**標記不一致處**：

### A. 分期定義數字
- [ ] IA1 / IA2 切點：3 mm（這是 FIGO 2018 深度切點）
- [ ] IB1 / IB2 / IB3 切點：5 mm / 2 cm / 4 cm
- [ ] IIA1 / IIA2 切點：4 cm
- [ ] IIIC1 vs IIIC2：pelvic vs para-aortic
- [ ] IVA：bullous edema 不算

### B. 治療首選（與 NCCN 比對）
- [ ] IA1 LVSI(+) 是否仍要 LND（NCCN 最新可能允許 SLN 取代 systematic LND）
- [ ] IB1 是否真的「open 首選」（LACC 後的 NCCN 文字）
- [ ] IB2 / IB3 治療差異（NACT vs primary surgery vs primary CCRT）
- [ ] IIB primary surgery 在哪些情況可考慮（日本等國家有不同實務）
- [ ] IIIC2 是否真的 routine 加 systemic chemo（INTERLACE adoption 狀況）
- [ ] IVB 第一線是否真是 KEYNOTE-826 regimen（看 PD-L1 CPS 切點）

### C. 缺漏項目
- [ ] 是否該加 small cell neuroendocrine carcinoma 的特殊處置
- [ ] 是否該加 adenocarcinoma / adenosquamous 的 LACC / treatment 區別
- [ ] 是否該加 fertility-sparing 適應症的完整列表（含 IB2 邊緣狀況）
- [ ] 是否該加 elderly / poor PS 病人的 modified protocol

### D. 命名與引註
- [ ] FIGO 2018 vs 2023 的標註方式是否符合最新文獻
- [ ] NCCN 章節編號是否需要明確標出

---

驗證完請把要修改的點告訴我（或直接編輯 `staging.json` + commit）。
