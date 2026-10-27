import type { APIRoute } from 'astro';
import { visiblePosts } from '../lib/posts';
import { path } from '../lib/paths';
export const GET: APIRoute = async ({ site }) => {
  const routes = ['', 'blog/', 'projects/', 'about/', ...(await visiblePosts()).filter(p => !p.data.draft).map(p => `blog/${p.id}/`)];
  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${escape(new URL(path(route), site).href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
