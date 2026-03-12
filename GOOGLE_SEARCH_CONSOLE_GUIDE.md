# Google Search Console 提交指南

**项目**: Mirage Studio 技术博客  
**创建日期**: 2026-03-12  
**站点URL**: https://themiragestudio.github.io/tech-blog-astro/

---

## 1. 访问 Google Search Console

1. 打开浏览器访问 https://search.google.com/search-console/
2. 使用 Google 账户登录
3. 如果是首次使用，会显示欢迎页面

---

## 2. 添加资源

### 2.1 选择资源类型
Google Search Console 提供两种资源类型:

| 类型 | 说明 | 推荐 |
|------|------|------|
| **域名** | 涵盖所有子域名和协议 | 需要 DNS 验证 |
| **URL 前缀** | 特定路径/协议 | ✅ 推荐使用 |

### 2.2 添加 URL 前缀资源
1. 选择 "URL 前缀"
2. 输入完整 URL: `https://themiragestudio.github.io/tech-blog-astro/`
3. 点击 "继续"

---

## 3. 验证所有权

### 方法一: HTML 文件验证 (推荐)

1. 下载 Google 提供的验证文件 (如 `google1234567890abcdef.html`)
2. 将文件放入项目的 `public/` 目录
3. 提交代码并等待部署完成
4. 返回 Search Console 点击 "验证"

**文件位置**:
```
tech-blog-astro/
├── public/
│   └── google1234567890abcdef.html  <- 放在这里
```

### 方法二: HTML 标签验证

1. 复制 Google 提供的 meta 标签
2. 编辑 `src/layouts/BaseLayout.astro`
3. 在 `<head>` 部分添加验证标签:

```astro
<!-- Google Search Console 验证 -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

4. 提交代码并等待部署
5. 返回 Search Console 点击 "验证"

### 方法三: Google Analytics 验证

如果已配置 Google Analytics 4:
1. 确保 GA4 代码已正确安装
2. 选择此验证方法
3. 点击 "验证"

---

## 4. 提交 Sitemap

验证成功后，提交 Sitemap 以帮助 Google 发现所有页面:

1. 在 Search Console 左侧菜单点击 "Sitemap"
2. 在 "添加新的站点地图" 输入框输入:
   ```
   sitemap-index.xml
   ```
3. 点击 "提交"

### 预期结果
- 状态显示 "成功"
- 发现的 URL 数量约为 42 个
- 包含所有文章、标签和功能页面

### Sitemap 结构
```
sitemap-index.xml
└── sitemap-0.xml (包含所有页面URL)
```

---

## 5. URL 检查

提交后，使用 URL 检查工具验证重要页面:

### 5.1 检查首页
1. 在顶部搜索栏输入: `https://themiragestudio.github.io/tech-blog-astro/`
2. 点击 "请求编入索引"

### 5.2 检查文章页面
检查几篇主要文章:
- `https://themiragestudio.github.io/tech-blog-astro/posts/2026-03-14-mirage-studio-origin/`
- `https://themiragestudio.github.io/tech-blog-astro/posts/2026-03-15-svelte-to-react/`

### 5.3 检查关键页面
- 文章列表: `/posts/`
- 标签首页: `/tags/`
- 搜索页面: `/search/`

---

## 6. 性能监控

### 6.1 检查覆盖范围
- 每周检查 "覆盖范围" 报告
- 关注 "错误" 和 "排除" 的页面
- 修复任何索引问题

### 6.2 监控搜索效果
- 定期查看 "效果" 报告
- 关注:
  - 总点击次数
  - 总展示次数
  - 平均点击率 (CTR)
  - 平均排名

### 6.3 设置通知
- 启用电子邮件通知
- 接收重要问题警报
- 定期查看建议的改进措施

---

## 7. 常见问题

### Q: 验证失败怎么办?
A: 确保验证文件/代码已正确部署，等待几分钟后重试。检查文件路径是否正确。

### Q: Sitemap 显示错误?
A: 访问 `https://themiragestudio.github.io/tech-blog-astro/sitemap-index.xml` 确认文件可访问。

### Q: 页面未编入索引?
A: 使用 URL 检查工具查看具体原因，可能是:
- 页面被 robots.txt 阻止
- 页面有 noindex 标签
- 页面内容质量问题

### Q: 多久能看到数据?
A: 通常需要 2-4 周才能开始看到搜索数据。新站点可能需要更长时间。

---

## 8. 相关资源

- [Google Search Console 帮助文档](https://support.google.com/webmasters)
- [站点地图指南](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [结构化数据测试工具](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 9. 检查清单

| 任务 | 状态 |
|------|------|
| 添加 Search Console 资源 | ⬜ |
| 验证网站所有权 | ⬜ |
| 提交 Sitemap | ⬜ |
| 检查首页索引状态 | ⬜ |
| 检查主要文章索引状态 | ⬜ |
| 设置邮件通知 | ⬜ |
| 首次性能数据查看 (2-4周后) | ⬜ |

---

**文档版本**: 1.0  
**创建日期**: 2026-03-12  
**创建人**: Dr. Brown (Researcher)
