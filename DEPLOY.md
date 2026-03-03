# 部署指南

本指南将帮助您将 Kinarray 官网部署到 Cloudflare Pages,并教您如何日常维护内容。

## 一、前置准备

1. **GitHub 账号**: 如果没有,请访问 https://github.com 注册
2. **Cloudflare 账号**: 访问 https://cloudflare.com 注册(免费)
3. **Git 工具**: 确保电脑已安装 Git

## 二、将代码推送到 GitHub

### 步骤 1: 初始化 Git 仓库

打开命令行,进入项目目录:

```bash
cd D:\CC\webdesign\website
git init
git add .
git commit -m "Initial commit: Kinarray website"
```

### 步骤 2: 创建 GitHub 仓库

1. 登录 GitHub
2. 点击右上角 "+" → "New repository"
3. 仓库名称填写: `kinarray-website`
4. 选择 "Private"(私有)或 "Public"(公开)
5. **不要**勾选 "Initialize this repository with a README"
6. 点击 "Create repository"

### 步骤 3: 推送代码到 GitHub

复制 GitHub 显示的命令,或使用以下命令(替换 YOUR_USERNAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/kinarray-website.git
git branch -M main
git push -u origin main
```

## 三、在 Cloudflare Pages 部署

### 步骤 1: 连接 GitHub

1. 登录 Cloudflare Dashboard
2. 左侧菜单选择 "Workers & Pages"
3. 点击 "Create application" → "Pages" → "Connect to Git"
4. 选择 "GitHub",授权 Cloudflare 访问您的 GitHub
5. 选择 `kinarray-website` 仓库

### 步骤 2: 配置构建设置

在构建配置页面填写:

- **Project name**: `kinarray-website` (或您喜欢的名称)
- **Production branch**: `main`
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`

点击 "Save and Deploy"

### 步骤 3: 等待部署完成

首次部署需要 2-5 分钟。完成后,Cloudflare 会提供一个临时域名,如:
`https://kinarray-website.pages.dev`

### 步骤 4: 绑定自定义域名(可选)

1. 在项目页面点击 "Custom domains"
2. 点击 "Set up a custom domain"
3. 输入您的域名,如 `www.kinarray.com`
4. 按照提示在您的域名注册商处添加 DNS 记录
5. 等待 DNS 生效(通常 5-30 分钟)

## 四、日常内容维护

### 发布新博客文章

1. 在 `src/content/blog/` 目录下创建新的 `.mdx` 文件
2. 文件命名格式: `your-article-title-en.mdx` (英文) 或 `your-article-title-zh.mdx` (中文)

**英文文章模板**:

```mdx
---
title: "Your Article Title"
description: "Brief description of the article"
pubDate: 2024-03-15
author: "Your Name"
lang: "en"
tags: ["radar", "monitoring"]
---

<div slot="summary">
Key takeaways: Write a brief summary here.
</div>

## Introduction

Your article content here...

## Main Content

More content...
```

**中文文章模板**:

```mdx
---
title: "文章标题"
description: "文章简短描述"
pubDate: 2024-03-15
author: "作者姓名"
lang: "zh"
tags: ["雷达", "监测"]
---

<div slot="summary">
核心要点:在这里写简短摘要。
</div>

## 引言

文章内容...

## 主要内容

更多内容...
```

### 添加新术语到术语库

在 `src/content/glossary/` 目录下创建新文件:

**英文术语**:

```mdx
---
term: "Your Term"
definition: "Definition of the term"
lang: "en"
relatedArticles: ["article-slug-en"]
---

Additional explanation here.
```

**中文术语**:

```mdx
---
term: "术语名称"
definition: "术语定义"
lang: "zh"
relatedArticles: ["article-slug-zh"]
---

额外说明。
```

### 添加新产品

在 `src/content/products/` 目录下创建新文件,参考 `s500-en.mdx` 和 `s500-zh.mdx` 的格式。

### 提交更改并自动部署

每次修改内容后:

```bash
# 1. 查看修改
git status

# 2. 添加修改的文件
git add .

# 3. 提交修改
git commit -m "Add new blog post about XXX"

# 4. 推送到 GitHub
git push
```

推送后,Cloudflare Pages 会**自动检测更改并重新部署**,通常 2-3 分钟内生效。

## 五、本地预览

在推送到 GitHub 之前,可以本地预览:

```bash
# 进入项目目录
cd D:\CC\webdesign\website

# 安装依赖(首次)
npm install

# 启动开发服务器
npm run dev
```

浏览器访问 `http://localhost:4321` 预览网站。

## 六、常见问题

### Q: 部署失败怎么办?

A: 在 Cloudflare Pages 项目页面查看 "Deployments" 标签,点击失败的部署查看错误日志。

### Q: 修改后网站没有更新?

A:
1. 确认 `git push` 成功
2. 在 Cloudflare 查看部署状态
3. 清除浏览器缓存

### Q: 如何修改网站样式?

A: 编辑 `src/layouts/` 和 `src/components/` 目录下的 `.astro` 文件,使用 Tailwind CSS 类名调整样式。

### Q: 如何添加图片?

A:
1. 将图片放在 `public/images/` 目录
2. 在内容中引用: `![描述](/images/your-image.jpg)`

## 七、技术支持

如遇到问题:
- 查看 Astro 文档: https://docs.astro.build
- 查看 Cloudflare Pages 文档: https://developers.cloudflare.com/pages
- 查看 Tailwind CSS 文档: https://tailwindcss.com/docs

---

**祝您使用愉快!** 🚀
