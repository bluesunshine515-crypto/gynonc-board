# 卵巢癌 FIGO 分期草稿（給 NotebookLM 驗證用）

> 本檔是 `staging.json` 的 Markdown 版本，目的：上傳到 NotebookLM 與 NCCN/FIGO PDF 做交叉驗證。
> **重點**：FIGO 2014 為當前主流（卵巢/輸卵管/腹膜統一分期），2023 為微調非重大改版。需驗證 IC 三類、IIIA1/2 切分、IVA/IVB 切點。
>
> **建議的 NotebookLM source**：
> - NCCN Ovarian Cancer Guidelines v.2.2026 PDF
> - Prat J, et al. FIGO 2014 staging. *Int J Gynaecol Obstet* 2014;124(1):1-5.
> - Berek JS, et al. FIGO Cancer Report 2021 — Ovarian Cancer. *Int J Gynaecol Obstet* 2021;155 Suppl 1:61-85.
> - ESMO-ESGO consensus conference statements 2019
>
> **生成日期**：2026-05-17 · **review 狀態**：v1 draft - pending NotebookLM review
>
> **NotebookLM 建議提問範本**：
>
> ```
> 請對照 NCCN Ovarian Cancer Guidelines v.2.2026 + Prat J FIGO 2014 + Berek FIGO Cancer Report 2021，
> 檢視我這份「卵巢癌 FIGO 分期草稿」並指出：
>
> 1. FIGO 2014 IC 三類切分（IC1 surgical spill / IC2 術前破裂或表面 / IC3 washing+）是否準確
> 2. IIIA1(i)/(ii) ≤10 mm vs >10 mm 切點，以及 IIIA1 與 IIIA2 的差別是否正確
> 3. IIIC 與 IVB 的「肝/脾包膜 vs 實質」切點是否符合 FIGO 2014
> 4. IVA 必須 pleural cytology 陽性、IVB parenchymal mets / 腹腔外 LN / 腸壁全層 是否正確
> 5. 3 個 histology subtypes 的 molecular signatures 與 fertility-sparing 條件是否最新
> 6. 6 個 special considerations（PDS vs NACT / BRCA-HRD / fertility-sparing / IP / HIPEC / tumor markers）是否準確
> 7. 是否有缺漏的重要分期細節（如 borderline ovarian tumor、carcinosarcoma、low-grade serous 特殊）
> 8. 2023 FIGO 微調具體內容是否需要更新
>
> 請引用 NCCN 章節編號（如 OV-A、OV-B、OV-C）或 FIGO 文獻頁碼。
> ```

---

## 1. FIGO 2014 重大改革（vs FIGO 1988）

| 變動 | 1988 | 2014 | 原因 |
|---|---|---|---|
| **統一分期** | 卵巢、輸卵管、腹膜癌獨立分期 | 三者合併為單一分期系統 | High-grade serous 三者起源常同源（fallopian tube fimbriae STIC → 腹膜散播） |
| **IC 三類細分** | IC = 單一分類（含表面、破裂、washing+） | **IC1 surgical spill** / **IC2 術前破裂或表面** / **IC3 washing+ 或腹水+** | 預後不同：IC1 ~ IA-IB；IC2/IC3 較差 |
| **IIIA 重整** | IIIA = microscopic peritoneal | **IIIA1**: 純 LN+（細胞學/組織學證實），分 (i) ≤10mm / (ii) >10mm；**IIIA2**: microscopic extrapelvic peritoneal | IIIA1 純 LN+ 預後接近 II 期，不該與 III 大群混 |
| **IV 細分** | IV 單一分類 | **IVA**: pleural effusion cytology+；**IVB**: parenchymal mets / 腹腔外 LN / 腸壁全層 | IVA OS 比 IVB 好 |
| **必須註明 primary site** | 分開分期，不需註明 | 報告須註記 ovary / fallopian tube / peritoneum 起源 | 治療同但流行病學追蹤需要 |

> **2023 FIGO 微調**：主要為語句澄清（IIIA1 LN+ 必須 cytology/histology 證實，不能只靠影像；microscopic vs macroscopic 沿用 2014 ≤2cm/>2cm 切點）。Stages 不變。

---

## 2. 三大 Histology 分類（影響治療策略）

### 🔬 Epithelial（90%）— HGSC 主導
- **High-grade serous (HGSC)**：70% epithelial；TP53 mut 幾乎 100%、50% BRCA/HRD
- **Low-grade serous (LGSC)**：5%；KRAS/BRAF mut；platinum 反應差
- **Endometrioid**：10%；ARID1A/PTEN/CTNNB1 mut；常合併子宮內膜癌
- **Clear cell**：10%；ARID1A/PIK3CA mut；platinum 反應差、預後差
- **Mucinous**：3%；KRAS/HER2；需鑑別 GI primary
- **Brenner / Mixed**：稀少

**治療意義**：HGSC 對 platinum + PARPi 敏感；clear cell / mucinous platinum 反應差，需考慮替代 regimen

### 🔬 Sex Cord-Stromal（5%）
- **Adult granulosa cell**：95%；**FOXL2 c.402C>G mut >97% 特異**；endocrine active（estrogen）→ 子宮內膜增生風險
- **Juvenile granulosa cell**：年輕、預後較好
- **Sertoli-Leydig**：DICER1 mut；androgen 分泌
- **Steroid cell / Fibroma / Thecoma**：稀少

**治療意義**：surgery 為主；recurrent 可 BEP 或 hormone（letrozole 新興選項）；必做 endometrial sampling

### 🔬 Germ Cell（3%）
- **Dysgerminoma**：年輕 <30 歲；LDH ± hCG；高度 chemo/RT 敏感
- **Yolk sac (endodermal sinus)**：AFP+
- **Immature teratoma**：分 grade 1-3
- **Embryonal**：AFP + hCG
- **Choriocarcinoma**：hCG 極高
- **Mixed**

**治療意義**：fertility-sparing 首選（單側 USO + staging）；**BEP × 3-4 cycles** 為標準；治癒率 >85%

---

## 3. 各期詳表（FIGO 2014）

### Stage I — 腫瘤局限於卵巢/輸卵管

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IA** | 局限**一側**，包膜完整、無表面、washing 陰性 | Comprehensive staging surgery；low-risk observe 或 chemo × 3-6；fertility-sparing 可選 IA epithelial low-grade | 三條件齊備：單側 + 包膜完整 + washing 陰性 |
| **IB** | 局限**兩側**，包膜完整、無表面、washing 陰性 | Staging + low-grade observe / high-grade Pac/Carbo × 3-6 | 雙側但包膜完整 + washing 陰性 = IB（不是 IC） |
| **IC1** | **Surgical spill**（術中破裂） | Comprehensive staging + Pac/Carbo × 6（high-grade 必加） | IC1 為「醫師造成的」，預後接近 IA-IB |
| **IC2** | **術前破裂或腫瘤在表面** | Comprehensive staging + Pac/Carbo × 6 | Surface 侵犯 = 腫瘤已可能擴散 |
| **IC3** | **腹腔細胞學陽性**（washing/腹水） | Comprehensive staging + Pac/Carbo × 6 | 強調 staging 時必做 washing |

### Stage II — 骨盆腔擴散

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIA** | 侵犯**子宮和/或輸卵管和/或卵巢**（reproductive organs） | Cytoreductive surgery + Pac/Carbo × 6 | 侵犯生殖相連器官 |
| **IIB** | 侵犯**其他骨盆腔內腹膜組織**（膀胱、直腸、骨盆腹膜） | Cytoreductive surgery + Pac/Carbo × 6 ± IP chemo | IIB 為 pelvic intraperitoneal 但不限生殖系統 |

### Stage III — 骨盆腔外擴散 / 淋巴結

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IIIA1(i)** | 純 LN+，≤10 mm | Surgery（含 LND）+ Pac/Carbo × 6 + maintenance | FIGO 2014 改革：純 LN+ 預後較好 |
| **IIIA1(ii)** | 純 LN+，>10 mm | Surgery（含 LND）+ Pac/Carbo × 6 + maintenance | 同上但 LN size 較大 |
| **IIIA2** | **Microscopic** extrapelvic peritoneal ± LN+ | Cytoreductive surgery + Pac/Carbo × 6 ± Bev + PARPi | 顯微鏡才看到，需病理切片確認 |
| **IIIB** | **Macroscopic** extrapelvic peritoneal **≤2 cm** ± LN+ | Primary cytoreduction（R0 為目標）→ Pac/Carbo × 6 + maintenance | 肉眼可見、≤2 cm |
| **IIIC** | **Macroscopic** extrapelvic peritoneal **>2 cm** ± LN+；含肝/脾**包膜** | Primary cytoreduction 或 NACT-IDS + Pac/Carbo + maintenance | **肝/脾包膜仍為 IIIC**；實質才升 IVB |

### Stage IV — 遠端轉移

| 分期 | 定義 | 治療摘要 | 考點 |
|---|---|---|---|
| **IVA** | **胸水細胞學陽性** | NACT × 3-6 → IDS（視 response）+ maintenance | **必須 cytology 證實**；單純胸水陰性 cytology 仍為 III |
| **IVB** | **Parenchymal mets**（肝/脾實質）、腹腔外器官、腹腔外 LN（含腹股溝）、腸壁全層 | Systemic chemo + Bev + PARPi maintenance | 肝包膜 = IIIC，肝**實質** = IVB（易混淆） |

---

## 4. ⚠️ 特殊考量（6 項）

### 4.1 Primary Surgery vs NACT 決策（重要）
- **Primary Cytoreductive Surgery (PDS) 首選**：若可達 R0（no residual disease）—  經 high-volume center 評估
- **NACT × 3 → Interval Debulking (IDS) → chemo × 3** 適應症：
  - PS 差不耐手術
  - 大瘤量、廣泛上腹疾病（CT/laparoscopy 評估）
  - CA125/CT ratio 預測無法 R0
- **EORTC 55971 / CHORUS**：NACT-IDS 與 PDS 結果相當（非劣性），但 NACT 對 high-tumor-burden 預後較好
- **PCI score / Fagotti score**：laparoscopy 可預測 resectability

### 4.2 BRCA1/2 + HRD Testing — 必做（NCCN universal）
- **所有 epithelial ovarian cancer 都應做 germline BRCA1/2 testing**（不論年齡、家族史）
- **Somatic BRCA + HRD score** 應於 stage II-IV HGSC 加做（Myriad myChoice CDx / FoundationOne CDx）
- **盛行率**：BRCA mut（germline + somatic）~15-20% HGSC；HRD+（含 BRCA mut + BRCAness）~50%
- **PARPi maintenance 選擇邏輯**：
  - BRCA mut → **SOLO-1** Olaparib 單藥
  - HRD+ non-BRCA → **PAOLA-1** Olap + Bev
  - HRP / 不論 biomarker → **PRIMA** Niraparib

### 4.3 Fertility-Sparing 適應症
- **Epithelial**：限 stage IA + low-grade（grade 1 endometrioid, mucinous expansile，serous LGSC 個案）+ comprehensive staging
- **Germ cell**：年輕女性首選 — 單側 USO + 完整 staging；對側卵巢通常正常
- **Sex cord-stromal**（granulosa）：單側 USO + endometrial sampling（排除 estrogen-induced 子宮內膜病變）
- 完成生育後考慮 completion surgery（individualized）

### 4.4 IP Chemotherapy（GOG-172）
- **GOG-172**：Optimally debulked stage III（residual ≤1 cm）IP cisplatin + IP/IV paclitaxel vs IV chemo，**OS 65.6 vs 49.7 月（HR 0.75）**
- 毒性顯著（catheter 併發症、神經、腎），完成率僅 ~40%
- GOG-252 後續：IV bev + chemo vs IP regimens，無差異 — IP 角色受挑戰
- NCCN 列為選項而非標準

### 4.5 HIPEC at Interval Debulking（OVHIPEC-1）
- **OVHIPEC-1**：NACT-IDS 時加 HIPEC（cisplatin 100 mg/m² 42°C × 90 分鐘），**RFS 14.2 vs 10.7 月，OS 45.7 vs 33.9 月（HR 0.67）**
- 適應症：Stage III ovarian cancer、NACT 後 IDS、residual ≤2.5 mm
- NCCN 列為 category 2A 選項；台灣部分中心已導入

### 4.6 Tumor Markers 鑑別
- **Epithelial**：CA125（HGSC 主標）；CA19-9（mucinous）；CEA（mucinous，需鑑別 GI primary）；HE4（與 CA125 合用 ROMA score）
- **Germ cell**：AFP（yolk sac, embryonal）；hCG（choriocarcinoma, embryonal）；LDH（dysgerminoma）
- **Sex cord-stromal**：Inhibin A/B（granulosa）；AMH（granulosa）；testosterone / estradiol

---

## 5. 給 NotebookLM 的 review checklist

### A. FIGO 2014 切點與條件
- [ ] IA / IB / IC1 / IC2 / IC3 五種切分條件是否準確
- [ ] IIA vs IIB 在 reproductive organs vs other pelvic intraperitoneal 的區別
- [ ] IIIA1(i) ≤10mm vs IIIA1(ii) >10mm 切點是否正確
- [ ] IIIA2 microscopic 是否要求 peritoneal biopsies
- [ ] IIIB vs IIIC ≤2cm vs >2cm 切點
- [ ] IIIC 含「capsular liver/splenic」是否符合 FIGO 2014
- [ ] IVA 必須 pleural cytology 陽性
- [ ] IVB parenchymal mets / 腹腔外 LN（含腹股溝）/ 腸壁全層

### B. 3 Histology subtypes 細節
- [ ] HGSC 70%、LGSC 5%、Endometrioid 10%、Clear cell 10%、Mucinous 3% 的盛行率
- [ ] Granulosa cell tumor FOXL2 c.402C>G mut >97% 特異性
- [ ] Sertoli-Leydig DICER1 mut
- [ ] Germ cell 標誌物 AFP / hCG / LDH 對應關係

### C. 治療首選對 NCCN v.2.2026
- [ ] Stage IA epithelial low-grade fertility-sparing 條件
- [ ] IC1/2/3 何時需要 adjuvant chemo（low-grade vs high-grade）
- [ ] Stage IIIB-IV Primary debulking R0 vs NACT-IDS 決策依據
- [ ] BRCA/HRD testing 時機（diagnosis 還是 1L chemo 中？）
- [ ] PARPi maintenance 三選一邏輯（SOLO-1/PAOLA-1/PRIMA）

### D. 缺漏項目
- [ ] **Borderline ovarian tumor**（serous/mucinous LMP）是否該獨立分期或註明
- [ ] **Carcinosarcoma of ovary**（MMMT）是否該獨立或併入 epithelial
- [ ] **Low-grade serous carcinoma**（LGSC）特殊處置（MEK inhibitor、hormone）
- [ ] **Clear cell carcinoma** 特殊處置（platinum 反應差、HER2 testing）
- [ ] **Mucinous ovarian cancer** 鑑別與 GI primary 區分
- [ ] STIC（serous tubal intraepithelial carcinoma）是否該註明

### E. 命名與引註
- [ ] FIGO 2014 IIIA1(i) / (ii) 是否該寫成 IIIA1(i) 或 IIIA1.i
- [ ] NCCN 章節編號（OV-A / OV-B / OV-C）是否需明列

---

驗證完請把要修改的點告訴我（或直接編輯 `staging.json` + commit）。
