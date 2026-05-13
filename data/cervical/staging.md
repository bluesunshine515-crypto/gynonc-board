# 子宮頸癌 FIGO 分期 v2（NotebookLM 驗證後）

> **狀態**：v2，已通過 NotebookLM 對照 NCCN Cervical Cancer Guidelines v.2.2026 + FIGO 2018/2023 驗證
> **生成日期**：2026-05-13
> **review status**：reviewed-by-NotebookLM-NCCN-v2.2026
>
> **資料來源**：
> - NCCN Cervical Cancer Guidelines v.2.2026
> - Bhatla N, et al. Revised FIGO staging 2018. *Int J Gynaecol Obstet* 2019;145(1):129-135.
> - Bhatla N, et al. FIGO 2023 update. *Int J Gynaecol Obstet* 2023;162(2):382-385.
>
> **v2 主要更新（NotebookLM review 結論吃入）**：
> 1. IA2-IB1 加入 NCCN 保守手術標準（Type A hysterectomy 降級選項）
> 2. IB2 trachelectomy 重新開放（強烈希望保留生育者）
> 3. IB3-IIA2 加入 selective completion hysterectomy（category 3）
> 4. III-IVA 加入 KEYNOTE-A18：Pembrolizumab + CCRT（FIGO 2014 IIIA-IVA = cat 1；FIGO 2018 IIIC = cat 2B）
> 5. INTERLACE 適用範圍擴大至 IB3, IIA2, IIB-IVA（非僅 IIB / IIIC2）
> 6. 加入 Silva classification（HPV 相關腺癌病理）
> 7. 加入 SLN algorithm strictness 與特殊組織型例外（NECC, gastric-type adeno）

---

## 1. FIGO 2009 → 2018 重大變動

| 變動 | 2009 | 2018 | 原因 |
|---|---|---|---|
| **IA 取消橫向寬度** | IA1 ≤3 mm + ≤7 mm width；IA2 >3-5 mm + ≤7 mm width | IA1 ≤3 mm；IA2 >3-5 mm（無 width 條件） | 橫向寬度再現性差 |
| **IB 細分三級** | IB1 <4 cm；IB2 ≥4 cm | IB1 >5 mm-<2 cm；IB2 ≥2-<4 cm；IB3 ≥4 cm | 2 cm 對應保留生育 / NCCN 保守手術切點 |
| **新增 IIIC（LN）** | LN 不正式分期 | IIIC1 = pelvic LN+；IIIC2 = para-aortic LN+ | 影像精準度提升 |
| **影像 / 病理可分期** | 嚴格 clinical staging | 允許 imaging + pathology（suffix r / p） | CT/MRI/PET 已是標準 |

## 2. FIGO 2023 微調

- **IIIC LN 大小定義**：Macromet (> 2 mm) 計入 IIIC；Micromet (0.2-2 mm) 計入但備註；ITC (< 0.2 mm) **不**計入
- **Suffix 強化**：IIIC1p（病理）/ IIIC1r（影像），影響預後與治療選擇
- **2018 架構不變**：定義精緻化，未變更切點

---

## 3. 各期詳表（FIGO 2018，治療依 NCCN v.2.2026）

### Stage I — 腫瘤局限於子宮頸

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA1** | Depth ≤ 3 mm | LVSI(-)：Conization 切緣陰性或 Type A hyst。LVSI(+)：加 pelvic LND 或 SLN。 | LVSI 是是否做 LND 的關鍵；conization 切緣陰性即足夠（生育保留） |
| **IA2** | Depth >3 至 ≤5 mm | **符合保守手術標準**（無 LVSI + 切緣(-) + 鱗狀/一般腺癌 + ≤2 cm + depth <10 mm）：Type A hyst + SLN/LND。**不符**：modified radical hyst + LND ± SLN。保留生育：radical trachelectomy + LND。 | IA2-IB1 是否降級為 Type A 取決於保守手術標準 |
| **IB1** | Depth >5 mm，maximum <2 cm | **符合保守手術標準**：Type A hyst + SLN/LND。**不符**：Type B/C radical hyst + pelvic LND（**open 首選 per LACC**）。保留生育：radical trachelectomy + LND。 | LACC 後 NCCN radical 預設 open；MIS 需充分知情同意；IB1 也可符合 Type A |
| **IB2** | Maximum 2-<4 cm | Radical hyst + pelvic LND ± para-aortic LND；或 definitive CCRT。**強烈希望保留生育**：abdominal radical trachelectomy + SLN/LND（經篩選，非絕對禁忌）。 | 2 cm 是 trachelectomy 最佳切點但**非絕對禁忌**；2-4 cm 經篩選可考慮 abdominal radical trachelectomy |
| **IB3** | Maximum ≥4 cm | **Definitive CCRT 優於手術**（cisplatin weekly + EBRT + IGBT）。**可考慮 INTERLACE**（前導 carbo/paclitaxel × 6 wk → CCRT）。CCRT 後若殘餘或不適合 IGBT → selective completion hyst（cat 3）。 | 大腫瘤首選 CCRT；避免「手術 + 必加 RT」雙重；INTERLACE 2024 提升 PFS/OS |

### Stage II — 超出子宮頸但未達骨盆壁 / 陰道下 1/3

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIA1** | 陰道上 2/3，無 parametrium，<4 cm | Radical hyst + LND 或 CCRT 二擇一 | IIA1 仍可手術；IIA2 開始大多 CCRT |
| **IIA2** | 陰道上 2/3，無 parametrium，≥4 cm | Definitive CCRT 為主；**INTERLACE 前導化療**；殘餘可 selective completion hyst（cat 3）。 | IIA2 開始走 CCRT；INTERLACE 與 selective completion hyst 為 NCCN v.2.2026 新增 |
| **IIB** | Parametrial invasion，未達骨盆壁 | **Definitive CCRT**（cisplatin + EBRT + IGBT）；**INTERLACE 前導化療**；不建議 primary surgery。 | Parametrium 侵犯 = CCRT 分水嶺；INTERLACE 適用 IB3/IIA2/IIB-IVA |

### Stage III — 骨盆壁 / 陰道下 1/3 / LN+ / hydronephrosis

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIIA** | 陰道下 1/3，未達骨盆壁 | Definitive CCRT + vaginal brachy；**KEYNOTE-A18：Pembrolizumab + CCRT + 維持（FIGO 2014 IIIA-IVA = cat 1）**；可 INTERLACE。 | 陰道下 1/3 = IIIA；Pembrolizumab + CCRT 為 KEYNOTE-A18 新標準 |
| **IIIB** | 骨盆壁 OR hydronephrosis | Definitive CCRT + IGBT；**Pembrolizumab + CCRT（cat 1）**；可 INTERLACE；hydronephrosis 放支架。 | Hydronephrosis 即列 IIIB；INTERLACE + KEYNOTE-A18 均屬研究族群 |
| **IIIC1** | Pelvic LN+ | Definitive CCRT（pelvic field 含 LN drainage）；**Pembrolizumab + CCRT（純 LN-defined FIGO 2018 III 為 cat 2B；若同時符合 FIGO 2014 IIIA-IVA 為 cat 1）**；可 INTERLACE。 | FIGO 2018 新增；r/p 後綴；Pembrolizumab 強度依 FIGO 2014/2018 對應 |
| **IIIC2** | Para-aortic LN+ | Extended-field CCRT；**Pembrolizumab + CCRT（同 IIIC1）**；可 INTERLACE。 | Para-aortic LN+ 預後最差 stage III；extended-field RT 取代 pelvic-only |

### Stage IV — true pelvis 外或膀胱 / 直腸黏膜

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IVA** | 膀胱 OR 直腸黏膜（biopsy 證實） | Definitive CCRT；**Pembrolizumab + CCRT（FIGO 2014 IIIA-IVA = cat 1）**；可 INTERLACE；選擇性 pelvic exenteration。 | Bullous edema 不算 IVA；需切片證實 |
| **IVB** | Distant metastasis | Systemic：cisplatin/carbo + paclitaxel + bev + **Pembrolizumab（KEYNOTE-826，CPS≥1 cat 1）**；後線：cemiplimab、tisotumab vedotin。 | KEYNOTE-826 第一線；cemiplimab 二線；tisotumab vedotin 後線 |

---

## 4. ⚠️ 特殊考量（重要例外與最新更新）

### 4.1 NCCN 保守手術標準（Conservative Surgery Criteria, CERV-4）
- **適用**：IA2, IB1
- **條件**：
  - 無 LVSI
  - Conization 切緣陰性
  - 鱗狀細胞癌、一般型腺癌或 adenosquamous（須評估）
  - 腫瘤 ≤ 2 cm
  - 間質侵犯深度 < 10 mm
- **意義**：符合條件且非保留生育情境 → 手術降級為 **Type A hyst + SLN/LND**

### 4.2 Silva Classification（HPV 相關子宮頸腺癌）
- **適用**：HPV-related endocervical adenocarcinoma（all stages）
- **Pattern A**：無破壞性基質侵犯 + 無 LVSI → LN/復發率極低；可考慮 conservative surgery
- **Pattern B**：局部破壞性侵犯（focal destructive）
- **Pattern C**：瀰漫破壞性侵犯（diffuse destructive）→ standard radical treatment
- **意義**：Pattern A 是擴大降級手術適應症的關鍵分型

### 4.3 Small Cell Neuroendocrine Carcinoma (NECC) 例外
- **絕對禁忌**：保留生育手術（trachelectomy）
- **IA1-IB2（≤4 cm）**：根除性子宮切除 + SLN/LND + 系統化療
- **IB3 以上**：高度依賴全身化療（cisplatin/etoposide）+ CCRT
- **廣泛轉移**：考慮 durvalumab + 鉑金/etoposide
- **意義**：NECC 高度侵襲性，治療策略明顯偏離一般鱗狀/腺癌

### 4.4 Gastric-type Adenocarcinoma / Adenoma malignum 例外
- **不適用**保留生育手術
- **不適用**保守性降級手術
- 與 NECC 同列高風險組織型，須走 standard radical treatment
- **意義**：選擇 conservative surgery 前必確認組織型為鱗狀或 grade 1/2 一般型腺癌

### 4.5 SLN Mapping Algorithm 嚴格性
- 必須**嚴格遵守 algorithm**
- 若某一側骨盆未成功標定 SLN → **該側必須做 side-specific 傳統 pelvic LND**
- 任何**肉眼懷疑的淋巴結**皆須切除（不依賴 mapping）
- **意義**：SLN 不是『取代』systematic LND，而是『取代成功標定那側』；mapping failure 仍需 side-specific 補做 LND

### 4.6 Selective Completion Hysterectomy（CCRT 後輔助子宮切除）
- **適用**：IB3, IIA2, IIB-IVA
- **情境**：CCRT 後有殘餘腫瘤或不適合 IGBT
- **NCCN category**：3（非 routine，補救選項）

### 4.7 Pembrolizumab + CCRT（KEYNOTE-A18）
- **FIGO 2014 IIIA-IVA**：Pembrolizumab + CCRT + 維持治療 = **category 1**
- **FIGO 2018 純粹 LN-defined III（IIIC1/IIIC2）**：**category 2B**
- 區別於 KEYNOTE-826（用於 IVB / persistent / recurrent）
- **意義**：婦癌專科必背近年 paradigm shift；免疫治療從 advanced/recurrent 進入 locally advanced + CCRT

---

## 5. 仍待後續補強

- [ ] NCCN 各 stage 治療決策樹（→ 處置流程 section）
- [ ] TSGH 院內化療處方對照（→ 藥物 cheatsheet section）
- [ ] 子宮頸癌題庫整合（Obstetrica 既有 11 題 + 專科自製題）
- [ ] KEYNOTE-A18 加入 trials.json（目前 9 trials 內無）
