// src/app/sitemap.xml/route.ts
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  
  // Fetch all published posts
  const postsQuery = groq`*[_type == "post" && defined(slug.current)] {
    slug,
    publishedAt
  }`
  const posts = await client.fetch(postsQuery)

  // Generate dynamic XML for blogs
  const blogUrls = posts.map((post: any) => `
    <url>
      <loc>${baseUrl}/blog-details/${post.slug.current}</loc>
      <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
    </url>
  `).join('')

  // Construct the full XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/blog-list-sidebar</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${blogUrls}
    </urlset>
  `

  // Return it as an actual XML file
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}