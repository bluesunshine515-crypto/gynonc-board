# 卵巢癌 FIGO 分期（v3 — 吃入 NotebookLM NCCN v.4.2026 重大更新）

> 本檔是 `staging.json` 的 Markdown 版本。
> **v3 update**（2026-05-17）：依 NotebookLM 對 NCCN Ovarian Cancer **v.4.2026** 的最新比對，套用 SCCOHT 獨立路徑 + biomarker 術語精確化 2 大修正。
>
> **v1 → v2 → v3 修正脈絡**：
> - **v1**：FIGO 2014 全期 + 3 histology subtypes + 6 special considerations
> - **v2**（NCCN v.3.2025）：Endometrioid 依 Grade 拆 + Mucinous Expansile/Infiltrative + 補 LCOC（Borderline / Carcinosarcoma / Clear cell IC / Mucinous FOLFIRI）
> - **v3**（NCCN v.4.2026）：🆕 **SCCOHT 獨立 histology + special consideration**（LCOC-5 新章節，SMARCA4 testing + VPCBAE/PAVEP/BEP + auto-SCT）；biomarker 術語精確化（'germline and somatic biomarker testing'、'BRCA1/2 P/LP variants'）

---

## 1. FIGO 2014 重大改革（同 v2）

| 變動 | 1988 | 2014 |
|---|---|---|
| **統一分期** | 卵巢/輸卵管/腹膜獨立 | 三者合併單一系統 |
| **IC 三類細分** | 單一分類 | IC1 surgical spill / IC2 術前破裂或表面 / IC3 washing+ |
| **IIIA 重整** | microscopic peritoneal | IIIA1 純 LN+（分 (i) ≤10mm / (ii) >10mm）；IIIA2 microscopic extrapelvic peritoneal |
| **IV 細分** | 單一 IV | IVA pleural cytology+；IVB parenchymal mets / 腹腔外 LN / 腸壁全層 |

---

## 2. Histology 分類（v3 — 加入 SCCOHT）

### 🔬 Epithelial（90%）
**High-grade path（HGSC + G2-3 Endometrioid + Carcinosarcoma）**：
- HGSC 70% — TP53 mut 幾乎 100%、50% BRCA/HRD
- **Grade 2-3 Endometrioid** — 歸 high-grade（等同 HGSC）
- Carcinosarcoma (MMMT) — 視同 high-grade epithelial
- Clear cell — ARID1A/PIK3CA mut；**Stage IC 必加 chemo**

**Low-grade path（LGSC + G1 Endometrioid）**：
- LGSC + **Grade 1 Endometrioid** — KRAS/BRAF mut；hormone + MEKi + **Avutometinib/Defactinib for KRAS-mut**

**Mucinous（3%）— 依 Pattern**：
- **Expansile**：Stage I 可 observe
- **Infiltrative**：Stage IB/IC 加 chemo
- 復發 **FOLFIRI ± Bev Cat 2B**

### 🔬 Sex Cord-Stromal（5%）
- Adult granulosa cell：**FOXL2 c.402C>G mut >97% 特異**
- Sertoli-Leydig：DICER1 mut

### 🔬 Germ Cell（3%）
- Dysgerminoma / Yolk sac / Immature teratoma / Choriocarcinoma
- BEP × 3-4；治癒率 >85%

### 🆕 🔬 SCCOHT — Small Cell Carcinoma of Ovary, Hypercalcemic Type（v.4.2026 LCOC-5）
- **三聯徵**：年輕（中位 ~24 歲）+ 高血鈣 + 卵巢腫塊
- **分子**：**SMARCA4 (BRG1) inactivation 為驅動事件** — **germline SMARCA4 testing 必考**（可能合併家族性 rhabdoid tumor 預傾向）
- **一線**：多藥化療 **VPCBAE / PAVEP / BEP**
- **Consolidation**：考慮轉介幹細胞中心 → **高劑量化療 + 自體幹細胞移植 (auto-SCT)**
- **Fertility-sparing**：SMARCA4 germline 陰性 + 強烈意願 + 充分諮詢可考慮（極限制）
- 預後差（5-yr OS ~30%），但 v.4.2026 已建立專屬演算法

---

## 3. 各期詳表（FIGO 2014，同 v2）

詳見 `staging.json`，本檔不重複貼。

---

## 4. ⚠️ 特殊考量（v3 新增 SCCOHT + biomarker 術語）

### v1-v2 已有
- 4.1 Primary Surgery vs NACT 決策
- 4.2 BRCA/HRD Testing（v3 升級為 germline + somatic biomarker testing）
- 4.3 Fertility-Sparing（v2 嚴格化）
- 4.4 IP Chemotherapy
- 4.5 HIPEC at IDS（v2 升主流程）
- 4.6 Tumor Markers
- 4.7 Borderline (LMP)
- 4.8 Carcinosarcoma (MMMT)
- 4.9 Clear Cell Stage I 化療閾值
- 4.10 Mucinous Expansile vs Infiltrative

### 🆕 v3 新增 2 條

#### 4.11 SCCOHT — Hypercalcemic Type 獨立處置（NCCN v.4.2026 LCOC-5）
- **三聯徵**：年輕女性 + 高血鈣 + 卵巢腫塊 → 高度懷疑
- **SMARCA4 (BRG1) inactivation** 驅動 — **germline SMARCA4 testing 必考**
- Stage 評估沿用 epithelial FIGO 2014
- 一線：**VPCBAE / PAVEP / BEP**；**auto-SCT consolidation** 推薦
- Fertility-sparing：SMARCA4 germline 陰性 + 強烈意願 + 充分諮詢可考慮

#### 4.12 Biomarker 術語精確化（v.4.2026 global change）
- **'testing' → 'germline and somatic biomarker testing'**：強調 germline + somatic 雙軌
- **'BRCA mutation' → 'BRCA1/2 P/LP variants'**（Pathogenic/Likely Pathogenic，排除 VUS）
- HRD assays：Myriad myChoice CDx / FoundationOne CDx 等仍主流

---

*v3 修正基於 NCCN Ovarian Cancer v.4.2026 + Prat FIGO 2014 + Berek FIGO 2021 + 台灣婦癌處方修訂 (20260112)。*
