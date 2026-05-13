# gynonc-board 開發筆記

## 目標
婦癌專科醫師考試（3-6 個月內）準備。

## 6 癌別開發順序

1. ✅ **子宮頸癌** — repo skeleton + trials.json draft
2. ⏳ 子宮內膜癌
3. ⏳ 卵巢癌
4. ⏳ 外陰癌
5. ⏳ 陰道癌
6. ⏳ 滋養細胞疾病 (GTD)

每癌別 5 sections：分期 / 處置 / 藥物 / Trials / 題庫

## 資料來源版本

| 來源 | 版本 | 取得日期 |
|---|---|---|
| NCCN Cervical Cancer Guidelines | v.X.YYYY (TBD) | TBD |
| FIGO Cancer Report | 2018, 2023 update | TBD |
| TSGH 癌症治療藥物處方 | 修訂版 (TBD) | TBD |

## 內容處理原則

- ❌ 不逐字搬運 NCCN / FIGO 文字
- ✅ 重新整理為「摘要 + 重點」，引註原始章節編號
- ✅ Trials 寫摘要可放原始 PMID / Lancet doi
- ✅ TSGH 處方僅放規格框架（劑量、週期），不放院內細節（成本、廠商等）

## 版型 (5 sections per cancer)

1. **分期速查** — JSON-driven 表格 + FIGO 2018 vs 2023 變動對照
2. **處置流程** — Mermaid 決策樹 + Sedlis/Peters criteria
3. **藥物 cheatsheet** — 表格列出 regimen + dose + cycle
4. **Landmark trials** — 卡片式 trial summary + 比較表
5. **練習題** — Obstetrica 格式 (q/options/answer/explanation_structured)

## 進度追蹤

每章節掌握度 → 學員自評 1-5 stars，存 localStorage。間隔複習 (SRS) 後期加入。

## 與 Obstetrica 的關係

兩個獨立 repo + 部署。Obstetrica = 住院醫師訓練（國考第二階段醫學六婦產科），gynonc-board = 婦癌專科考試。

兩者可能未來合併「題庫」，但目前先各自演進。
