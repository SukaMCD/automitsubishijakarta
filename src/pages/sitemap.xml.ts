import type { APIRoute } from 'astro';
import { carsData } from '../data/cars';
import { newsList } from '../data/news';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://automitsubishijakarta.com';
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/model', priority: '0.9', changefreq: 'weekly' },
    { url: '/promo', priority: '0.9', changefreq: 'daily' },
    { url: '/pricelist', priority: '0.9', changefreq: 'weekly' },
    { url: '/brosur', priority: '0.85', changefreq: 'weekly' },
    { url: '/berita', priority: '0.85', changefreq: 'daily' },
    { url: '/disclaimer', priority: '0.5', changefreq: 'monthly' },
    { url: '/kebijakan-privasi', priority: '0.5', changefreq: 'monthly' },
    { url: '/syarat-ketentuan', priority: '0.5', changefreq: 'monthly' },
  ];

  const modelRoutes = carsData.map(car => ({
    url: `/model/${car.slug}`,
    priority: car.badge ? '0.85' : '0.8',
    changefreq: 'weekly'
  }));

  const newsRoutes = newsList.map(article => ({
    url: `/berita/${article.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }));

  const allUrls = [...staticRoutes, ...modelRoutes, ...newsRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(item => `  <url>
    <loc>${baseUrl}${item.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff'
    }
  });
};
