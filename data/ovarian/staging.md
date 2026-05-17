# 卵巢癌 FIGO 分期（v2 — 吃入 NotebookLM NCCN v.3.2025 review）

> 本檔是 `staging.json` 的 Markdown 版本。
> **v2 update**（2026-05-17）：依 NotebookLM 對 NCCN Ovarian Cancer v.3.2025 + Prat FIGO 2014 + 台灣婦癌處方修訂 (20260112) 的交叉比對，套用 3 大 staging 修正。基礎結構（IA-IVB 切點 / IC1-3 / IIIA1(i)/(ii) / 肝脾包膜 vs 實質）NotebookLM 已確認準確。
>
> **修正概要**（v1 → v2）：
> 1. **Endometrioid 依 Grade 拆分**：G1 Endometrioid → 歸 low-grade（等同 LGSC 處置）；G2-3 Endometrioid → 歸 high-grade（等同 HGSC）
> 2. **Mucinous 加 Expansile vs Infiltrative pattern**：Expansile 預後極佳 Stage I 可觀察；Infiltrative 高度破壞性 IB/IC 也加 chemo
> 3. **補 Less Common Ovarian Cancers (LCOC)**：Borderline (LMP) 化療無益處純手術 + Carcinosarcoma (MMMT) 視同 high-grade epithelial + Clear cell IC 必加化療 + Mucinous 後線 FOLFIRI ± Bev Cat 2B

---

## 1. FIGO 2014 重大改革（vs FIGO 1988）

| 變動 | 1988 | 2014 | 原因 |
|---|---|---|---|
| **統一分期** | 卵巢/輸卵管/腹膜獨立分期 | 三者合併為單一分期系統 | HGSC 三者起源常同源（STIC → 腹膜散播） |
| **IC 三類細分** | IC = 單一分類 | **IC1 surgical spill** / **IC2 術前破裂或表面** / **IC3 washing+ 或腹水+** | 預後不同：IC1 ~ IA-IB；IC2/IC3 較差 |
| **IIIA 重整** | IIIA = microscopic peritoneal | **IIIA1**: 純 LN+，分 (i) ≤10mm / (ii) >10mm；**IIIA2**: microscopic extrapelvic peritoneal | IIIA1 純 LN+ 預後接近 II 期 |
| **IV 細分** | IV 單一分類 | **IVA**: pleural cytology+；**IVB**: parenchymal mets / 腹腔外 LN / 腸壁全層 | IVA OS 比 IVB 好 |
| **必須註明 primary site** | 分開分期 | 報告須註記 ovary / fallopian tube / peritoneum | 治療同但流行病學追蹤 |

> **2023 FIGO 微調**：IIIA1 LN+ 必須 cytology / histology 證實（不能只靠影像）；microscopic vs macroscopic 沿用 ≤2cm/>2cm 切點。Stages 不變。

---

## 2. 三大 Histology 分類（v2 — 含 Grade / Pattern 細節）

### 🔬 Epithelial（90%）— v2 修正

**High-grade path（HGSC + G2-3 Endometrioid + Carcinosarcoma）**：
- **High-grade serous (HGSC)** — 70% epithelial；TP53 mut 幾乎 100%、50% BRCA/HRD
- **Grade 2-3 Endometrioid** — 歸 high-grade 路徑（等同 HGSC 處置）
- **Carcinosarcoma (MMMT)** — 視同 high-grade epithelial，輔助 Pac/Carbo
- **Clear cell** — 10%；ARID1A/PIK3CA mut；platinum 反應差，**Stage IC 必加 chemo**
- → 對 platinum + PARPi 敏感（特別 BRCA/HRD+）

**Low-grade path（LGSC + G1 Endometrioid）**：
- **Low-grade serous (LGSC)** — 5%；KRAS/BRAF mut
- **Grade 1 Endometrioid** — 歸 low-grade 路徑（共享 MAPK pathway）
- → platinum 反應差，但 hormone（Letrozole/Anastrozole）+ MEKi（Trametinib/Binimetinib）+ **新 Avutometinib/Defactinib for KRAS-mut**

**Mucinous（3%）— 依 Pattern 分**：
- **Expansile pattern**：推擠式生長 → 預後極佳，**Stage I 多可 observe**
- **Infiltrative pattern**：浸潤式生長 → 高度破壞性，**Stage IB/IC 也加 chemo**
- 鑑別必排除 GI primary（CK7/CK20/CDX2/SATB2）
- 後線 **FOLFIRI ± Bev Cat 2B**（採大腸直腸路徑）

### 🔬 Sex Cord-Stromal（5%）
- **Adult granulosa cell** (95%)：**FOXL2 c.402C>G mut >97% 特異**；endocrine active → 必做 endometrial sampling
- **Juvenile granulosa cell**：年輕、預後較好
- **Sertoli-Leydig**：DICER1 mut；androgen 分泌
- 治療：surgery 主；recurrent 可 BEP / Letrozole

### 🔬 Germ Cell（3%）
- **Dysgerminoma**：LDH ± hCG；高度 chemo/RT 敏感
- **Yolk sac**：AFP+
- **Immature teratoma**：分 grade 1-3
- **Choriocarcinoma**：hCG 極高
- 治療：fertility-sparing 首選；BEP × 3-4；治癒率 >85%

---

## 3. 各期詳表（FIGO 2014）

### Stage I — 腫瘤局限於卵巢/輸卵管

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA** | 局限**一側**，包膜完整、無表面、washing 陰性 | Comprehensive staging；low-risk observe；**fertility-sparing 限 low-risk histology**（G1 Endo / LGSC / Mucinous expansile） | 三條件齊備：單側 + 包膜完整 + washing 陰性；**Clear cell / high-grade 不建議 fertility-sparing** |
| **IB** | 局限**兩側**，包膜完整、無表面、washing 陰性 | Staging + 依 grade 決定 observe vs chemo | 雙側但包膜完整 + washing 陰性 = IB |
| **IC1** | **Surgical spill**（術中破裂） | Staging + Pac/Carbo × 6（high-grade 必加） | IC1 預後接近 IA-IB |
| **IC2** | **術前破裂或表面** | Staging + Pac/Carbo × 6 | Surface = 已可能擴散 |
| **IC3** | **腹腔細胞學陽性** | Staging + Pac/Carbo × 6 | 強調 washing 必做 |

### Stage II / III / IV
（切點同 v1，請見 `staging.json`；v2 未動）

---

## 4. ⚠️ 特殊考量（v2 新增 4 條 LCOC）

### 4.1 Primary Surgery vs NACT 決策
（同 v1）

### 4.2 BRCA1/2 + HRD Testing
（同 v1）

### 4.3 Fertility-Sparing — v2 嚴格化
- **僅限單側 + low-risk histology**：Grade 1 Endometrioid / LGSC / Mucinous expansile / IA epithelial low-grade
- **Clear cell 與 high-grade（HGSC、G2-3 Endometrioid）不建議**，除極少數 IA + 充分告知風險
- Germ cell 與 sex cord-stromal 為主要 fertility-sparing 候選

### 4.4 IP Chemotherapy（GOG-172）
（同 v1；v2 NCCN 仍列 Stage II-IV optimally debulked 選項）

### 4.5 HIPEC at IDS — v2 升至主流程
NCCN v.3.2025 將 HIPEC 從腳註移至主流程：**Stage III NACT 後 IDS 可考慮加 HIPEC（cisplatin 100 mg/m² 42°C × 90 分鐘）**

### 4.6 Tumor Markers 鑑別
（同 v1）

### 🆕 4.7 Borderline Ovarian Tumor (LMP)
- **化療對 borderline 無益處**（含 IV 與 IP）
- 唯一標準 = 完整手術切除 + observe
- **NACT 不適用**

### 🆕 4.8 Carcinosarcoma (MMMT)
- **視同 high-grade epithelial 處理**
- 輔助 IV Pac/Carbo（與 HGSC 同骨幹）
- 不沿用 uterine CS 的 ifosfamide sarcoma 路徑

### 🆕 4.9 Clear Cell — Stage I 化療閾值
- **IC（任 subtype）= 必加化療絕對適應症**
- IA 可選化療 × 6 或 observation

### 🆕 4.10 Mucinous — Expansile vs Infiltrative
- **Expansile**：Stage I 多可 observe
- **Infiltrative**：Stage IB/IC 也加 chemo
- 復發後 **FOLFIRI ± Bev Cat 2B**（大腸直腸路徑）

---

*v2 修正基於 NCCN Ovarian Cancer v.3.2025 + Prat FIGO 2014 + Berek FIGO 2021 + 台灣婦癌處方修訂 (20260112)。*
