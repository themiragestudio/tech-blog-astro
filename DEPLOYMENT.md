# 部署指南 - Mirage Studio 技术博客

## 概述
本文档描述了如何将技术博客项目部署到 GitHub Pages。

## 部署方式

### 自动部署 (推荐)
项目已配置 GitHub Actions 工作流，当代码推送到 `main` 分支时会自动触发部署。

**工作流文件**: `.github/workflows/deploy.yml`

**触发条件**:
- Push 到 `main` 分支
- Pull Request 到 `main` 分支
- 手动触发 (Workflow Dispatch)

**部署步骤**:
1. 检出代码
2. 设置 Node.js 20 环境
3. 安装依赖 (使用 `npm ci`)
4. 构建项目 (`npm run build`)
5. 上传构建产物
6. 部署到 GitHub Pages

### 手动部署
如果需要手动部署，可以运行以下命令：

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages (需要配置 GitHub Pages)
# 将 dist 目录的内容推送到 gh-pages 分支
```

## GitHub Pages 配置

### 首次设置
1. 访问仓库的 **Settings** 页面
2. 导航到 **Pages** 部分
3. 配置以下设置:
   - **Source**: GitHub Actions
   - **Branch**: 保持默认 (gh-pages)
   - **Folder**: `/ (root)`

### 自定义域名 (可选)
如果需要使用自定义域名:
1. 在 **Pages** 设置中添加自定义域名
2. 在域名注册商处配置 DNS 记录:
   - 类型: CNAME
   - 名称: `blog` (或你想要的子域名)
   - 值: `yourusername.github.io`

## 性能预算

项目包含性能预算文件 `lighthouse-budget.json`，定义了以下性能目标:

### 核心 Web Vitals
- **First Contentful Paint (FCP)**: ≤ 1800ms
- **Largest Contentful Paint (LCP)**: ≤ 2500ms
- **Cumulative Layout Shift (CLS)**: ≤ 0.1
- **Total Blocking Time (TBT)**: ≤ 200ms
- **Speed Index**: ≤ 3400ms

### Lighthouse 评分
- **Performance**: ≥ 90%
- **Accessibility**: ≥ 95%
- **Best Practices**: ≥ 90%
- **SEO**: ≥ 90%

### 资源大小限制
- **JavaScript**: ≤ 170KB
- **CSS**: ≤ 50KB
- **Images**: ≤ 500KB

## 环境变量

项目不需要特殊的环境变量配置。

## 构建配置

构建配置在以下文件中定义:

### `astro.config.mjs`
- 站点基础 URL 配置
- 构建输出目录 (`dist`)
- 集成配置 (Tailwind, MDX, Sitemap)

### `tailwind.config.mjs`
- Tailwind CSS 配置
- 品牌色定义
- 响应式断点

## 故障排除

### 常见问题

#### 1. 构建失败
**症状**: GitHub Actions 工作流失败
**解决方案**:
- 检查 `npm run build` 在本地是否成功
- 查看工作流日志中的错误信息
- 确保所有依赖项都已正确安装

#### 2. 部署后页面空白
**症状**: 部署成功但页面显示空白
**解决方案**:
- 检查 `astro.config.mjs` 中的 `site` 配置
- 确保构建产物包含正确的文件
- 检查浏览器控制台是否有 JavaScript 错误

#### 3. 样式丢失
**症状**: 页面显示但样式不正确
**解决方案**:
- 检查 CSS 文件是否正确加载
- 验证 Tailwind CSS 配置
- 确保构建过程中没有 CSS 处理错误

#### 4. 图片不显示
**症状**: 图片加载失败
**解决方案**:
- 检查图片路径是否正确
- 确保图片文件在 `public` 目录中
- 验证图片文件是否包含在构建产物中

### 调试步骤
1. 在本地运行 `npm run build` 检查构建过程
2. 运行 `npm run preview` 预览构建结果
3. 检查 `dist` 目录中的文件结构
4. 查看浏览器开发者工具中的网络请求

## 监控和维护

### 部署监控
- GitHub Actions 工作流状态
- GitHub Pages 部署状态
- 网站可用性监控

### 性能监控
- 定期运行 Lighthouse 测试
- 监控 Core Web Vitals
- 检查资源大小是否超出预算

### 更新策略
1. **功能更新**: 推送到 `main` 分支触发自动部署
2. **紧急修复**: 直接推送到 `main` 分支
3. **重大变更**: 创建特性分支，通过 Pull Request 合并

## 联系信息

如有部署问题，请联系:
- **工程师**: Victor Blake
- **项目**: Mirage Studio 技术博客
- **仓库**: https://github.com/[username]/tech-blog-astro

---

**文档版本**: 1.0.0  
**最后更新**: 2026-03-12  
**状态**: ✅ 部署配置完成