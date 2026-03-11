import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Mirage Studio 技术博客',
    description: 'Mirage Studio 团队的技术文章、项目经验和开发心得',
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/posts/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
      author: post.data.author || 'Mirage Studio 团队',
      categories: post.data.tags || [],
    })),
    customData: `
      <language>zh-CN</language>
      <copyright>Copyright ${new Date().getFullYear()} Mirage Studio</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>60</ttl>
      <generator>Astro</generator>
      <webMaster>contact@mirage.studio (Mirage Studio)</webMaster>
      <managingEditor>contact@mirage.studio (Mirage Studio)</managingEditor>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <image>
        <url>${context.site}blog/og-image.png</url>
        <title>Mirage Studio 技术博客</title>
        <link>${context.site}blog/</link>
        <width>144</width>
        <height>144</height>
        <description>Mirage Studio 技术博客 Logo</description>
      </image>
    `,
    stylesheet: '/blog/rss-styles.xsl',
  });
}
