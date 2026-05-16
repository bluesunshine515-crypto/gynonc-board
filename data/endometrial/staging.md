# 子宮內膜癌 FIGO 分期（v2 — 吃入 NotebookLM NCCN v.2.2026 review）

> 本檔是 `staging.json` 的 Markdown 版本。
> **v2 update**（2026-05-16）：依 NotebookLM 對 NCCN Uterine Neoplasms v.2.2026 + Berek FIGO 2023 的交叉比對，套用 5 大修正。
>
> **修正概要**（v1 → v2）：
> 1. 🚨 **IA1 / IA2 定義對調**（v1 寫反了；正確版本：IA1 = confined to endometrium 無肌層侵犯；IA2 才是 <50% 肌層侵犯）
> 2. **IC aggressive histology 治療放寬**：non-invasive serous/clear cell 可選 observation 或 vault brachy，不一定加全身化療
> 3. **分子分群 5-yr OS** 數字加註「TCGA 整合分析約略值，非 FIGO 絕對定義」
> 4. **Stage III-IV** Carbo/Pac + Pembro/Dostarlimab 明確標 **Category 1**，且適用範圍含 stage III-IV primary/adjuvant（不限 advanced/recurrent）
> 5. **加 FIGO 2023 分子分期寫法**（IAm_POLEmut / IICm_p53abn）+ **Endometrial stromal sarcoma 範圍註**（歸 uterine sarcoma，不在本模組）

---

## 1. FIGO 2009 → 2023 重大變動（5 項）

| 變動 | 2009 | 2023 | 原因 |
|---|---|---|---|
| **首次納入 4 分子分群** | 純解剖分期 | 整合 POLEmut / MMRd / p53abn / NSMP 四群 | TCGA 2013 起發現分子型態強烈影響預後 |
| **Histology + Grade 影響分期** | Grade 不影響 stage 編號 | Aggressive histology（serous, clear cell, undiff, carcinosarcoma, mixed）即使局限於 endometrium 也升為 IC | Aggressive histology 預後與一般 endometrioid 差異極大 |
| **LVSI 納入分期** | 不在 FIGO 分期內 | **Substantial LVSI ≥ 5 LVSI 灶**（per WHO 5th ed，NCCN v.2.2026 採用）→ Stage IIB | Substantial LVSI 預後等同 cervical stromal invasion |
| **IA 切為 IA1/IA2/IA3** ⚠️ | 單一分期 | **IA1: confined to polyp/endometrium（無肌層侵犯）**；**IA2: low-grade + <50% myo + no/focal LVSI**；IA3: low-grade + concurrent ovarian（特定條件） | ⚠️ 切勿寫反：IA1 是無肌層侵犯（更早期），IA2 才是 <50% 肌層侵犯 |
| **II 切為 IIA/IIB/IIC** | 僅 cervical stroma invasion | IIA: cervical stroma（low-grade）；IIB: substantial LVSI；IIC: aggressive histology + 任何 myometrial invasion | 把高風險族群升上來獲適當輔助 |

---

## 2. 4 分子分群（FIGO 2023 整合）

> ⚠️ 5-yr OS 數字均為 **TCGA / PORTEC 整合分析的約略值**，非 FIGO 定義的絕對標準。

### 🟢 POLEmut（POLE-ultramutated）
- **盛行率**：約 7%
- **診斷**：POLE exonuclease domain mutations（POLE EDM），NGS 偵測
- **預後**：**極佳**（5-yr OS > 95%，即使 stage III-IV）
- **治療意義**：可考慮**降階治療**（observation 或縮減輔助）
- **FIGO 2023 寫法**：早期 POLEmut 寫為 **IAm_POLEmut**

### 🟡 MMRd / MSI-H（mismatch repair deficient）
- **盛行率**：約 25-30%
- **診斷**：IHC for MLH1/MSH2/MSH6/PMS2 損失，或 MSI testing
- **預後**：中等
- **治療意義**：**對 IO 反應極佳**（Pembrolizumab、Dostarlimab）；Lynch syndrome 篩檢起點
- **考點**：MMRd 雙重意義 → 免疫治療優先 + 家族遺傳評估（Lynch）

### 🔴 p53abn（copy-number high）
- **盛行率**：約 15%
- **診斷**：p53 IHC abnormal（complete absence 或 strong overexpression）；常見 serous, carcinosarcoma
- **預後**：**最差**（5-yr OS ~50%）
- **治療意義**：**升階治療** — 即使 stage I 也考慮 adjuvant chemo + RT；**HER2 IHC 必做**（NCCN v.2.2026 擴大：所有 p53abn 不論組織學都做 HER2）
- **FIGO 2023 寫法**：p53abn 寫為 **IICm_p53abn** 等

### ⚫ NSMP（no specific molecular profile）
- **盛行率**：約 50%
- **診斷**：排除上述三類
- **預後**：中等
- **治療意義**：依解剖分期 + LVSI 走標準路徑；ER/PR status 影響賀爾蒙治療反應

---

## 3. 各期詳表（FIGO 2023，治療依 NCCN v.2.2026）

### Stage I — 腫瘤局限於子宮體

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA1** ⚠️ | Low-grade endometrioid，**侷限於子宮內膜瘜肉或子宮內膜**（confined to endometrium，no myometrial invasion） | TAH + BSO ± SLN。**Fertility-sparing 最佳候選**。POLEmut 可 observation。 | FIGO 2023：IA1 = 無肌層侵犯（預後最好）；IA1 ≠ <50% 肌層侵犯（那是 IA2） |
| **IA2** ⚠️ | Low-grade endometrioid，**<50% myometrial invasion** + no/focal LVSI | TAH + BSO ± SLN/LND。Fertility-sparing 仍需嚴格挑（含 no invasion 影像）。POLEmut 可 observation。 | FIGO 2023：IA2 = <50% 肌層侵犯（與 IA1 切勿混淆） |
| **IA3** | Low-grade + simultaneous ovarian（單側、無 surface、無 LVSI） | TAH + BSO + staging。預後等同 Stage I。 | FIGO 2023 新分類；2009 此情境會升 stage III，2023 因預後好降為 IA3 |
| **IB** | Low-grade endometrioid + ≥50% myometrium + no/focal LVSI | TAH + BSO + SLN/LND + vault brachy（PORTEC-2 standard） | 深層肌層侵犯 = adjuvant RT；vault brachy 副作用低於 pelvic EBRT |
| **IC** | **Aggressive histology** confined to polyp/endometrium（no myometrial invasion） | TAH + BSO + 完整 staging（含 omentectomy）。**Non-invasive 可選 observation 或 vault brachy 單獨使用，不一定加 chemo**；有肌層侵犯（升 IIC）才必加 chemo ± RT。HER2 testing 必做 | FIGO 2023 新增 IC；輔助治療分層 observe → vault brachy → chemo，不要一律 chemo |

### Stage II

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIA** | Cervical stromal invasion（low-grade endometrioid） | TAH + BSO + LND ± parametrectomy。Adjuvant pelvic RT 為主流 | 不要混淆 endocervical glandular only（仍為 Stage I） |
| **IIB** | **Substantial LVSI ≥ 5 LVSI 灶**（low-grade，不論有無 cervical invasion） | TAH + BSO + LND。Adjuvant pelvic RT ± chemo | FIGO 2023 新增 IIB；WHO 5th ed 與 NCCN v.2.2026 採用「≥ 5 LVSI 灶」定義 |
| **IIC** | **Aggressive histology + 任何 myometrial invasion** | 完整 staging + adjuvant chemo（Pac/Carbo × 6）+ RT。HER2(+) serous → +trastuzumab | FIGO 2023 新增 IIC；治療強度近 III 期 |

### Stage III

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIIA** | Serosa, adnexa, 或 simultaneous ovarian（非 IA3 條件） | 完整 staging surgery + adjuvant chemo ± RT（PORTEC-3） | PORTEC-3 證實 CCRT + chemo 提升 OS（HR 0.7） |
| **IIIB** | Vagina 或 parametrium 侵犯 | Surgery + CCRT + adjuvant chemo（PORTEC-3 pattern） | 較少見；治療強度等同 IIIC |
| **IIIC1** | **Pelvic LN 轉移** | Staging surgery + adjuvant chemo + RT。**Carbo/Pac + Pembro (NRG-GY018) 或 + Dostarlimab (RUBY) = NCCN Cat 1**（primary 或 adjuvant，不限 advanced/recurrent） | Pelvic LN+ = 全身性疾病；IO+chemo Cat 1 涵蓋 III-IV primary |
| **IIIC2** | **Para-aortic LN 轉移** | Extended-field RT + adjuvant chemo + **Carbo/Pac + Pembro/Dostarlimab（Cat 1）** | 預後最差 Stage III；IO+chemo Cat 1 |

### Stage IV

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IVA** | 膀胱/腸黏膜侵犯（biopsy 證實） | Systemic chemo + RT；選擇性 pelvic exenteration | 黏膜侵犯需切片證實（不是壓迫即可） |
| **IVB** | **Abdominal peritoneal metastasis** | **Carbo/Pac + Pembro (NRG-GY018) 或 + Dostarlimab (RUBY) = Cat 1**；Cytoreductive surgery 在精選個案 | FIGO 2023 將腹腔內 vs 遠端分開；IO+chemo Cat 1 |
| **IVC** | **Distant metastasis**（lung/liver/bone 等） | **Carbo/Pac + Pembro/Dostarlimab = Cat 1**；後線 pMMR Lenva + Pembro (KEYNOTE-775, Cat 1，限 platinum-failed) | FIGO 2023 新增 IVC；IO+chemo Cat 1 |

---

## 4. 特殊考量（6 項）

### 4.1 Fertility-Sparing 適應症
- **適用**：IA1（confined to endometrium） / IA2（<50% myo invasion 但需「無侵犯影像」嚴格挑）
- **條件**：grade 1 endometrioid + no invasion (MRI) + no LVSI + 強烈希望保留生育 + 生育後 definitive hyst
- **療程**：Progestin（MPA 或 megestrol）+ 每 3-6 月 D&C
- **效果**：CR 率 ~70%，復發率 ~30%

### 4.2 Lynch Syndrome 篩檢（建議全部 endometrial cancer）
- **流程**：MMR IHC → MMR 缺損 → MLH1 methylation testing → 無甲基化則疑似 Lynch
- **注意**：MSH6 與 PMS2 在 endometrial cancer 比大腸癌更常見

### 4.3 HER2 Testing — NCCN v.2.2026 擴大
- **新版適用**：所有 **p53abn**（不論組織學）+ 所有轉移/復發疾病
- **舊版**：僅限 stage III-IV 或 recurrent serous / carcinosarcoma
- **判讀**：IHC 3+ → HER2+；IHC 2+ → 加 ISH 確認
- **後線 T-DXd**：一般 IHC 2+/3+；**Carcinosarcoma IHC 1+/2+/3+ 都可**

### 4.4 POLEmut 降階考量
- 適用 POLEmut at any stage I-II → 可 observation 或極簡輔助（PORTEC-4a 等試驗）

### 4.5 p53abn 升階治療
- 即使 stage I 也考慮 adjuvant chemo + RT；HER2 IHC 必做（NCCN v.2.2026 擴大）

### 4.6 Sentinel Lymph Node Mapping
- ICG cervical injection；mapping failure 那側 → side-specific pelvic LND
- Ultrastaging 偵測 micromet / ITC，影響 staging（FIGO 2023 計入 IIIC）

---

## 5. 範圍註

**不在本模組**：
- **Endometrial stromal sarcoma (ESS)**：歸 uterine sarcoma 範疇（另一套 AJCC/FIGO 肉瘤分期）。低/高惡性度 ESS 治療首選為 BSO + 抗雌激素賀爾蒙（aromatase inhibitors），與此處的化放療邏輯完全不同。
- 其他 uterine sarcoma（leiomyosarcoma 等）同樣不在此。

**FIGO 2023 分子分期完整寫法**：羅馬數字 + 小寫 m + 下標分子型態，如 `IAm_POLEmut`、`IICm_p53abn`。本表 stage 欄為純解剖分期，搭配「分子分群」一同呈現完整 FIGO 2023 標示。

---

*v2 修正基於 NCCN Uterine Neoplasms Guidelines v.2.2026 + Berek FIGO 2023 + ESGO/ESTRO/ESP 2021。*
