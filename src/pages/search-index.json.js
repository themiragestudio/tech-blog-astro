export async function GET() {
  const posts = await import.meta.glob('../content/blog/*.{md,mdx}', { eager: true });
  
  const searchIndex = Object.entries(posts)
    .filter(([_, post]) => !post.frontmatter.draft)
    .map(([filePath, post]) => {
      const slug = filePath
        .split('/')
        .pop()
        .replace(/\.(md|mdx)$/, '');
      
      return {
        slug,
        title: post.frontmatter.title || '',
        description: post.frontmatter.description || '',
        tags: post.frontmatter.tags || [],
        pubDate: post.frontmatter.pubDate || '',
        author: post.frontmatter.author || '',
        readingTime: post.frontmatter.readingTime || 0
      };
    });
  
  return new Response(JSON.stringify(searchIndex, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}