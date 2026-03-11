import { defineCollection, z } from 'astro:content';

/**
 * Blog Collection Schema
 *
 * 文件命名规范: YYYY-MM-DD-kebab-case-slug.mdx
 * 示例: 2026-03-14-mirage-studio-origin.mdx
 *
 * 参考: docs/TECHNICAL.md § 4.2 内容集合 Schema
 */
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** 文章标题（60字符以内，SEO 友好） */
    title: z.string(),
    /** 文章摘要（150-160字符，用于 SEO meta description 和列表预览） */
    description: z.string(),
    /** 发布日期 */
    pubDate: z.coerce.date(),
    /** 更新日期（可选，有修改时填写） */
    updatedDate: z.coerce.date().optional(),
    /** 作者名称 */
    author: z.string().default('Mirage Studio'),
    /** 标签列表（参考 TECHNICAL.md § 5.3 标签体系） */
    tags: z.array(z.string()).default([]),
    /** 是否为草稿（true = 不渲染到生产） */
    draft: z.boolean().default(false),
    /** Open Graph 封面图片路径（可选） */
    ogImage: z.string().optional(),
    /** 阅读时间（分钟） */
    readingTime: z.number().optional(),
  }),
});

export const collections = { blog };
