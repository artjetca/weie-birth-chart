# GitHub 設置指南

## 方法一：使用 GitHub CLI（推薦）

1. 在終端中運行以下命令進行認證：
```bash
gh auth login
```

2. 選擇 GitHub.com
3. 選擇 HTTPS 協議
4. 選擇 "Login with a web browser"
5. 按 Enter 鍵打開瀏覽器並完成認證

認證完成後，運行以下命令創建倉庫並推送：
```bash
gh repo create weie-birth-chart --public --source=. --remote=origin --push
```

## 方法二：手動創建 GitHub 倉庫

1. 訪問 https://github.com/new
2. 倉庫名稱：`weie-birth-chart`
3. 設置為 Public
4. 不要初始化 README、.gitignore 或 license（因為本地已有）
5. 點擊 "Create repository"

然後在終端中運行：
```bash
git remote add origin https://github.com/YOUR_USERNAME/weie-birth-chart.git
git push -u origin main
```

## GitHub Pages 設置

推送完成後，GitHub Pages 會自動部署（已配置工作流）：
1. 訪問倉庫的 Settings > Pages
2. 確認 Source 設置為 "GitHub Actions"
3. 等待部署完成（通常需要 1-2 分鐘）
4. 部署完成後，您的網站將在：`https://YOUR_USERNAME.github.io/weie-birth-chart`

## 當前項目狀態

✅ Git 倉庫已初始化
✅ 所有文件已添加並提交
✅ GitHub Pages 工作流已配置
✅ 項目已構建（dist 目錄包含在倉庫中）
✅ 項目名稱已更新為 "weie-birth-chart"

只需要完成 GitHub 倉庫創建和推送即可！