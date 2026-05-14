# 子宮內膜癌 FIGO 分期草稿（給 NotebookLM 驗證用）

> 本檔是 `staging.json` 的 Markdown 版本，目的：上傳到 NotebookLM 與 NCCN/FIGO PDF 做交叉驗證。
> **重點**：FIGO 2023 是大改版，首次整合 4 分子分群（POLEmut/MMRd/p53abn/NSMP），需要特別驗證。
>
> **建議的 NotebookLM source**：
> - NCCN Uterine Neoplasms Guidelines v.1.2026 PDF
> - Berek JS, et al. FIGO 2023 staging. *Int J Gynaecol Obstet* 2023;162(2):383-394.
> - Concin N, et al. ESGO/ESTRO/ESP guidelines. *Int J Gynecol Cancer* 2021;31(1):12-39.
>
> **生成日期**：2026-05-14 · **review 狀態**：draft-pending-NotebookLM-review
>
> **NotebookLM 建議提問範本**：
>
> ```
> 請對照 NCCN Uterine Neoplasms Guidelines v.1.2026 與 FIGO 2023（Berek）文獻，
> 檢視我這份「子宮內膜癌 FIGO 分期草稿」並指出：
>
> 1. FIGO 2023 5 大變動的描述是否準確（特別 IA1/IA2/IA3, IIA/IIB/IIC 的切分條件）
> 2. 4 分子分群的盛行率、診斷方法、預後敘述是否符合 TCGA/PORTEC-4a 等最新資料
> 3. 各 stage 治療摘要是否符合 NCCN 2026 v.1（特別 POLEmut 降階、p53abn 升階）
> 4. 6 個特殊考量（fertility-sparing / Lynch / HER2 / POLEmut / p53abn / SLN）的細節是否正確
> 5. 是否有缺漏的重要分期細節（如 carcinosarcoma 的特殊歸類、unusual variants）
>
> 請引用 NCCN 章節編號（如 ENDO-A）或 FIGO 文獻頁碼。
> ```

---

## 1. FIGO 2009 → 2023 重大變動（5 項）

| 變動 | 2009 | 2023 | 原因 |
|---|---|---|---|
| **首次納入 4 分子分群** | 純解剖分期，不考慮分子型態 | 整合 POLEmut / MMRd / p53abn / NSMP 四群 | TCGA 2013 起發現分子型態強烈影響預後 |
| **Histology + Grade 影響分期** | Grade 不影響 stage 編號 | Aggressive histology（serous, clear cell, undifferentiated, carcinosarcoma, mixed）即使局限於 endometrium 也升為 IC | Aggressive histology 預後與一般 endometrioid 差異極大 |
| **LVSI 納入分期** | 不在 FIGO 分期內 | Substantial LVSI（≥ 5 LVSI 灶）→ Stage IIB | Substantial LVSI 預後等同 cervical stromal invasion |
| **IA 切為 IA1/IA2/IA3** | 單一分期 | IA1: low-grade + <50% myo + no/focal LVSI；IA2: confined to polyp/endometrium；IA3: low-grade with concurrent ovarian | 細分讓 low-risk subgroup 可考慮 fertility-sparing |
| **II 切為 IIA/IIB/IIC** | 僅 cervical stroma invasion | IIA: cervical stroma；IIB: substantial LVSI（low-grade）；IIC: aggressive histology + myometrial invasion | 把高風險族群升上來獲適當輔助 |

---

## 2. 4 分子分群（FIGO 2023 整合）

### 🟢 POLEmut（POLE-ultramutated）
- **盛行率**：約 7%
- **診斷**：POLE exonuclease domain mutations（POLE EDM），NGS 偵測
- **預後**：**極佳**（5-yr OS > 95%，即使 stage III-IV）
- **治療意義**：可考慮**降階治療**（observation 或縮減輔助）
- **考點**：POLEmut 是『exception that proves the rule』— 即使解剖分期晚，預後極好

### 🟡 MMRd / MSI-H（mismatch repair deficient）
- **盛行率**：約 25-30%
- **診斷**：IHC for MLH1/MSH2/MSH6/PMS2 損失，或 MSI testing
- **預後**：中等
- **治療意義**：**對 IO 反應極佳**（Pembrolizumab、Dostarlimab）；常為 Lynch syndrome 篩檢起點
- **考點**：MMRd 雙重意義 → 免疫治療優先 + 家族遺傳評估（Lynch）

### 🔴 p53abn（copy-number high）
- **盛行率**：約 15%
- **診斷**：p53 IHC abnormal（complete absence 或 strong overexpression）；常見 serous, carcinosarcoma
- **預後**：**最差**（5-yr OS ~50%）
- **治療意義**：**升階治療** — 即使 stage I 也考慮 adjuvant chemo + RT；HER2 testing 必做（serous）
- **考點**：p53abn 跨越 endometrioid / serous 分類，治療強度比預期高

### ⚫ NSMP（no specific molecular profile / copy-number low）
- **盛行率**：約 50%
- **診斷**：排除上述三類 → 預設為 NSMP（傳統 endometrioid type I 多在此）
- **預後**：中等
- **治療意義**：依解剖分期 + LVSI 走標準路徑；ER/PR status 影響預後與賀爾蒙治療反應
- **考點**：占大宗（~50%）；ER/PR 表現是其中一個 favorable 標記

---

## 3. 各期詳表（FIGO 2023，治療依 NCCN v.1.2026）

### Stage I — 腫瘤局限於子宮體

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA1** | Low-grade endometrioid + <50% myometrium + no/focal LVSI | TAH + BSO ± SLN/LND。Fertility-sparing 候選。POLEmut 可 observation。 | Stage 最低 + 預後最好；fertility-sparing 主要候選 |
| **IA2** | Low-grade endometrioid，confined to polyp/endometrium | TAH + BSO ± SLN。Fertility-sparing 最佳候選。 | Confined to endometrium = 最適合 fertility-sparing |
| **IA3** | Low-grade + simultaneous ovarian（特定條件：單側 <5cm + no surface + no LVSI） | TAH + BSO + staging。同步 ovarian 預後等同 Stage I。 | FIGO 2023 新分類；過去這類同步 ovarian 會升 stage III |
| **IB** | Low-grade endometrioid + ≥50% myometrium + no/focal LVSI | TAH + BSO + SLN/LND + vault brachy（PORTEC-2 standard） | 深層 myometrial invasion = adjuvant RT；vault brachy 副作用低 |
| **IC** | **Aggressive histology** confined to polyp/endometrium | TAH + BSO + 完整 staging（含 omentectomy）+ adjuvant chemo ± RT。HER2 testing 必做（serous） | FIGO 2023 新增 IC；aggressive histology 即使最早期也走完整 staging + chemo |

### Stage II

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIA** | Cervical stromal invasion（low-grade endometrioid） | TAH + BSO + LND ± parametrectomy。Adjuvant pelvic RT 為主流。 | 不要混淆 endocervical glandular only（仍為 Stage I） |
| **IIB** | **Substantial LVSI**（low-grade） | TAH + BSO + LND。Adjuvant pelvic RT ± chemo | FIGO 2023 新增 IIB；substantial LVSI 升期 |
| **IIC** | **Aggressive histology + 任何 myometrial invasion** | 完整 staging + adjuvant chemo（Pac/Carbo × 6）+ RT。HER2(+) serous → +trastuzumab | FIGO 2023 新增 IIC；治療強度近 III 期 |

### Stage III

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIIA** | Serosa, adnexa, 或 simultaneous ovarian（非 IA3 條件） | 完整 staging surgery + adjuvant chemo ± RT（PORTEC-3） | PORTEC-3 證實 CCRT + chemo 提升 OS（HR 0.7） |
| **IIIB** | Vagina 或 parametrium 侵犯 | Surgery + CCRT + adjuvant chemo（PORTEC-3 pattern） | 較少見；治療強度等同 IIIC |
| **IIIC1** | **Pelvic LN 轉移** | Adjuvant chemo + RT。**Pembro + chemo（NRG-GY018）/ Dostarlimab + chemo（RUBY）** 為近年新選項 | Pelvic LN+ = 全身性疾病；IO + chemo 為標準 |
| **IIIC2** | **Para-aortic LN 轉移** | Extended-field RT + adjuvant chemo + IO | 預後最差的 Stage III |

### Stage IV

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IVA** | 膀胱/腸黏膜侵犯（biopsy 證實） | Systemic chemo + RT；選擇性 pelvic exenteration | 黏膜侵犯需切片證實 |
| **IVB** | **Abdominal peritoneal metastasis** | Systemic chemo（Pac/Carbo ± Pembro/Dostarlimab） | FIGO 2023 將腹腔內 vs 遠端轉移分開（舊版未細分） |
| **IVC** | **Distant metastasis**（lung/liver/bone 等） | Systemic therapy：Pac/Carbo + Pembro (NRG-GY018) 或 + Dostarlimab (RUBY)；後線 Lenva+Pembro (KEYNOTE-775) | FIGO 2023 新增 IVC |

---

## 4. ⚠️ 特殊考量（6 項）

### 4.1 Fertility-Sparing 適應症
- **適用**：IA1 grade 1 + no myometrial invasion / IA2
- **條件**：grade 1 endometrioid + no invasion (MRI) + no LVSI + 強烈希望保留生育 + 生育後 definitive hyst
- **療程**：Progestin（MPA 或 megestrol）+ 每 3-6 月 D&C 監測
- **效果**：CR 率 ~70%，復發率 ~30%

### 4.2 Lynch Syndrome 篩檢（建議全部 endometrial cancer）
- **適用**：All endometrial cancer
- **流程**：MMR IHC → MMR 缺損 → MLH1 methylation testing → 無甲基化則疑似 Lynch → 基因諮詢
- **注意**：MSH6 與 PMS2 在 endometrial cancer 比大腸癌更常見

### 4.3 HER2 Testing for Serous / Carcinosarcoma
- **適用**：Stage III-IV 或 recurrent serous / carcinosarcoma
- **判讀**：IHC 3+ → HER2+；IHC 2+ → 加 ISH 確認
- **意義**：HER2+ → Pac + Carbo + Trastuzumab（Fader 2018 Phase II 證實 OS 提升）

### 4.4 POLEmut 降階考量
- **適用**：POLEmut at any stage I-II
- **依據**：ESGO/ESTRO/ESP 2021 + FIGO 2023；PORTEC-4a 等試驗
- **策略**：可考慮 observation 或極簡化輔助治療

### 4.5 p53abn 升階治療
- **適用**：p53abn at any stage
- **依據**：ESGO/ESTRO/ESP 2021
- **策略**：即使 stage I 也考慮 adjuvant chemo + RT；HER2 IHC 必做
- **意義**：分子分群影響治療強度遠大於 anatomic stage

### 4.6 Sentinel Lymph Node Mapping
- **適用**：Apparently uterus-confined endometrial cancer
- **方法**：ICG cervical injection；FIRES, SENTI-ENDO trials 支持
- **規則**：Mapping failure 那一側 → side-specific pelvic LND
- **Ultrastaging**：偵測 micrometastasis / ITC，影響 staging（FIGO 2023 計入 IIIC）

---

## 5. 給 NotebookLM 的 review checklist

請 NotebookLM 對下列重點逐一驗證，**標記不一致處**：

### A. FIGO 2023 切點與條件
- [ ] IA1/IA2/IA3 切分條件（特別 IA3 的 ovarian 條件：單側 <5cm + no surface + no LVSI）
- [ ] IIA/IIB/IIC 切分條件（substantial LVSI 定義：≥ 5 LVSI 灶 是否準確）
- [ ] IIIC1 vs IIIC2：pelvic vs para-aortic
- [ ] IVB (peritoneal) vs IVC (distant) 切點

### B. 4 分子分群數據
- [ ] POLEmut 盛行率 7% 是否準確
- [ ] MMRd 25-30%、p53abn 15%、NSMP 50% 是否與 TCGA 一致
- [ ] POLEmut 5-yr OS > 95% 是否最新數據
- [ ] p53abn 5-yr OS ~50% 是否最新數據

### C. 治療首選對 NCCN v.1.2026
- [ ] IA1/IA2 fertility-sparing 條件是否符合 NCCN UTERINE-1
- [ ] IB vault brachy 是否仍是 PORTEC-2 標準（vs pelvic RT）
- [ ] IC aggressive histology 是否真的「即使 confined 也加 chemo」
- [ ] IIIC 第一線 Pembro/Dostarlimab + chemo 是否 cat 1
- [ ] IVB/IVC 第一線 IO + chemo 的 MMR-based 選擇

### D. 缺漏項目
- [ ] Carcinosarcoma 的特殊處置是否該分出
- [ ] Clear cell carcinoma 的特殊考量
- [ ] Undifferentiated / dedifferentiated 的處置
- [ ] Endometrial stromal sarcoma 是否該單獨列（屬 uterine sarcoma 範疇？）
- [ ] Cell type-specific 治療差異（如 ER/PR+ low-grade serous）

### E. 命名與引註
- [ ] FIGO 2023 staging 寫法（IA1m vs IA1m_POLE 之類）是否符合 Berek 推薦
- [ ] NCCN 章節編號（UTERINE-A/B/C/D）是否需明列

---

驗證完請把要修改的點告訴我（或直接編輯 `staging.json` + commit）。
