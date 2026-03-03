# Kinarray 官网项目

基于 Astro + Tailwind CSS 构建的 B2B 官方网站,专注于公路铁路边坡形变监测雷达产品展示。

## 技术栈

- **框架**: Astro 5.x (静态站点生成)
- **样式**: Tailwind CSS 4.x
- **内容管理**: Astro Content Collections + MDX
- **多语言**: Astro i18n (en/zh)
- **部署**: Cloudflare Pages

## 项目结构

```
website/
├── src/
│   ├── components/       # 可复用组件
│   │   ├── SEO.astro    # SEO 元数据组件
│   │   └── ContactFloat.astro  # 悬浮联系按钮
│   ├── layouts/         # 页面布局
│   │   ├── BaseLayout.astro    # 基础布局
│   │   └── BlogLayout.astro    # 博客文章布局
│   ├── pages/           # 路由页面
│   │   ├── index.astro  # 重定向到 /en/
│   │   ├── en/          # 英文页面
│   │   └── zh/          # 中文页面
│   └── content/         # 内容集合
│       ├── blog/        # 博客文章
│       ├── glossary/    # 术语库
│       └── products/    # 产品介绍
├── public/              # 静态资源
├── astro.config.mjs     # Astro 配置
├── wrangler.jsonc       # Cloudflare 配置
└── DEPLOY.md            # 部署指南
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:4321

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 内容管理

### 添加博客文章

在 `src/content/blog/` 创建新的 `.mdx` 文件:

```mdx
---
title: "文章标题"
description: "文章描述"
pubDate: 2024-03-15
author: "作者"
lang: "en" # 或 "zh"
tags: ["radar", "monitoring"]
---

<div slot="summary">
核心要点摘要
</div>

## 正文内容

文章内容...
```

### 添加术语

在 `src/content/glossary/` 创建新文件:

```mdx
---
term: "术语名称"
definition: "术语定义"
lang: "en" # 或 "zh"
relatedArticles: ["article-slug"]
---

详细说明...
```

### 添加产品

在 `src/content/products/` 创建新文件,参考 `s500-en.mdx` 格式。

## 部署

详细部署指南请查看 [DEPLOY.md](./DEPLOY.md)

### 快速部署到 Cloudflare Pages

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 连接仓库
3. 构建配置:
   - Build command: `npm run build`
   - Build output: `dist`
   - Framework: Astro

## SEO 优化

- ✅ 自动生成 JSON-LD Schema (Article, DefinedTerm)
- ✅ Canonical URL 和 hreflang 标签
- ✅ Open Graph 和 Twitter Card
- ✅ 语义化 HTML 结构
- ✅ 博客文章 TL;DR 摘要块

## 功能特性

- 🌍 中英文双语支持
- 📱 响应式设计
- 🚀 静态站点生成 (SSG)
- 🔍 SEO/GEO 友好
- 📝 MDX 内容管理
- 💬 悬浮联系组件 (WhatsApp/邮箱/微信)
- 🎯 B2B 转化优化

## 许可证

Copyright © 2024 Kinarray. All rights reserved.
