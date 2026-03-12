<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title>Mirage Studio 技术博客 - RSS 订阅</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f9fafb;
            padding: 20px;
          }
          
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            overflow: hidden;
          }
          
          header {
            background: linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          
          .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .logo-icon {
            width: 48px;
            height: 48px;
            background: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 20px;
            color: #7C3AED;
          }
          
          h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
          }
          
          .subtitle {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 20px;
          }
          
          .stats {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
          }
          
          .stat {
            background: rgba(255, 255, 255, 0.1);
            padding: 12px 20px;
            border-radius: 8px;
            text-align: center;
          }
          
          .stat-number {
            font-size: 20px;
            font-weight: 700;
            display: block;
          }
          
          .stat-label {
            font-size: 12px;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .content {
            padding: 30px;
          }
          
          .section {
            margin-bottom: 30px;
          }
          
          h2 {
            font-size: 20px;
            font-weight: 600;
            color: #374151;
            margin-bottom: 16px;
            padding-bottom: 8px;
            border-bottom: 2px solid #E5E7EB;
          }
          
          .feed-info {
            background: #F3F4F6;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 24px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 16px;
          }
          
          .info-item {
            display: flex;
            flex-direction: column;
          }
          
          .info-label {
            font-size: 12px;
            color: #6B7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
          }
          
          .info-value {
            font-size: 14px;
            color: #111827;
            font-weight: 500;
          }
          
          .articles-list {
            list-style: none;
          }
          
          .article-item {
            background: white;
            border: 1px solid #E5E7EB;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 16px;
            transition: all 0.2s ease;
          }
          
          .article-item:hover {
            border-color: #7C3AED;
            box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1);
            transform: translateY(-2px);
          }
          
          .article-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 12px;
          }
          
          .article-title {
            font-size: 18px;
            font-weight: 600;
            color: #111827;
            text-decoration: none;
            flex: 1;
          }
          
          .article-title:hover {
            color: #7C3AED;
          }
          
          .article-date {
            font-size: 12px;
            color: #6B7280;
            white-space: nowrap;
            margin-left: 16px;
          }
          
          .article-description {
            color: #4B5563;
            margin-bottom: 12px;
            font-size: 14px;
          }
          
          .article-meta {
            display: flex;
            gap: 12px;
            font-size: 12px;
            color: #6B7280;
          }
          
          .article-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 12px;
          }
          
          .tag {
            background: #EDE9FE;
            color: #7C3AED;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
          }
          
          footer {
            text-align: center;
            padding: 30px;
            color: #6B7280;
            font-size: 14px;
            border-top: 1px solid #E5E7EB;
            background: #F9FAFB;
          }
          
          .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 16px;
          }
          
          .footer-link {
            color: #7C3AED;
            text-decoration: none;
            font-weight: 500;
          }
          
          .footer-link:hover {
            text-decoration: underline;
          }
          
          @media (max-width: 640px) {
            body {
              padding: 10px;
            }
            
            .container {
              border-radius: 8px;
            }
            
            header {
              padding: 30px 20px;
            }
            
            h1 {
              font-size: 24px;
            }
            
            .stats {
              flex-direction: column;
              gap: 10px;
            }
            
            .content {
              padding: 20px;
            }
            
            .article-header {
              flex-direction: column;
              gap: 8px;
            }
            
            .article-date {
              margin-left: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="logo">
              <div class="logo-icon">MS</div>
              <div>
                <h1>Mirage Studio 技术博客</h1>
                <div class="subtitle">技术文章、项目经验和开发心得</div>
              </div>
            </div>
            
            <div class="stats">
              <div class="stat">
                <span class="stat-number">
                  <xsl:value-of select="count(rss/channel/item)"/>
                </span>
                <span class="stat-label">篇文章</span>
              </div>
              <div class="stat">
                <span class="stat-number">
                  <xsl:value-of select="count(rss/channel/item[1]/category)"/>
                </span>
                <span class="stat-label">个标签</span>
              </div>
              <div class="stat">
                <span class="stat-number">
                  <xsl:value-of select="substring(rss/channel/lastBuildDate, 1, 10)"/>
                </span>
                <span class="stat-label">最后更新</span>
              </div>
            </div>
          </header>
          
          <div class="content">
            <div class="section">
              <div class="feed-info">
                <div class="info-grid">
                  <div class="info-item">
                    <span class="info-label">博客标题</span>
                    <span class="info-value">
                      <xsl:value-of select="rss/channel/title"/>
                    </span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">博客描述</span>
                    <span class="info-value">
                      <xsl:value-of select="rss/channel/description"/>
                    </span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">博客链接</span>
                    <span class="info-value">
                      <a href="{rss/channel/link}" style="color: #7C3AED;">
                        <xsl:value-of select="rss/channel/link"/>
                      </a>
                    </span>
                  </div>
                  <div class="info-item">
                    <span class="info-label">最后构建</span>
                    <span class="info-value">
                      <xsl:value-of select="rss/channel/lastBuildDate"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h2>最新文章</h2>
              <ul class="articles-list">
                <xsl:for-each select="rss/channel/item">
                  <li class="article-item">
                    <div class="article-header">
                      <a href="{link}" class="article-title">
                        <xsl:value-of select="title"/>
                      </a>
                      <div class="article-date">
                        <xsl:value-of select="pubDate"/>
                      </div>
                    </div>
                    
                    <div class="article-description">
                      <xsl:value-of select="description"/>
                    </div>
                    
                    <div class="article-meta">
                      <span class="article-author">
                        作者: <xsl:value-of select="author"/>
                      </span>
                      <span class="article-categories">
                        分类: 
                        <xsl:for-each select="category">
                          <xsl:value-of select="."/>
                          <xsl:if test="position() != last()">, </xsl:if>
                        </xsl:for-each>
                      </span>
                    </div>
                    
                    <xsl:if test="category">
                      <div class="article-tags">
                        <xsl:for-each select="category">
                          <span class="tag">
                            <xsl:value-of select="."/>
                          </span>
                        </xsl:for-each>
                      </div>
                    </xsl:if>
                  </li>
                </xsl:for-each>
              </ul>
            </div>
          </div>
          
          <footer>
            <p>© <xsl:value-of select="substring(rss/channel/copyright, 12, 4)"/> Mirage Studio. 保留所有权利。</p>
            <p>此 RSS 订阅由 Astro 生成，兼容所有 RSS 阅读器。</p>
            
            <div class="footer-links">
              <a href="{rss/channel/link}" class="footer-link">访问博客</a>
              <a href="https://mirage.studio" class="footer-link">访问官网</a>
              <a href="https://github.com/mirage-studio" class="footer-link">GitHub</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>