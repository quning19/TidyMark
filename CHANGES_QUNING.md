# TidyMark 修改说明（quning-modify 分支）

基于原项目 [PanHywel/TidyMark](https://github.com/PanHywel/TidyMark) v1.4.28 的个性化修改。

---

## 一、分类规则优化

- 新增若干高优先级分类规则及对应关键词
- 新增 Unity、Cocos 等游戏引擎分类，补充游戏开发相关分类
- 精简不常用关键词约 30%（移除小众品牌、过时技术、冗余同义词），同时恢复少量常用关键词

---

## 二、自动整理修复

- **书签移动位置修复**：自动整理后书签统一移动到书签栏根目录 + 分类文件夹下，不再受整理范围选择影响
- **分类选择器修复**：整理预览中点击书签切换分类时，下拉列表显示全部分类规则中的分类（而非仅当前预览中的分类），并按字符排序

---

## 三、整理功能增强

- **递归子目录复选框**：整理范围选择对话框中新增"是否递归子目录"选项（默认勾选），取消勾选时仅整理选中文件夹的直接子书签，不包含子文件夹内容
- **分类规则拖拽排序**：选项页的分类规则支持拖拽调整优先级顺序

---

## 四、其他改进

- 分类规则存储从 `sync` 迁移到 `local`（避免 Chrome 同步单项 8KB 限制）
- 添加 `deadSkipDomains` 选项支持
- 简化分类翻译逻辑
- 增强分类规则检索与映射

---

## 文件变更清单

| 文件 | 说明 |
|------|------|
| `services/defaultRules.js` | 默认分类规则（主要修改） |
| `src/background/index.js` | 后台整理逻辑 |
| `src/pages/options/index.js` | 选项页 UI |
| `src/pages/options/index.css` | 选项页样式 |
| `services/classificationService.js` | 分类服务 |
| `services/bookmarkService.js` | 书签服务 |
| `services/i18n.js` | 国际化字符串 |
| `extensions/organize/` | 组织版对应文件（同步修改） |
