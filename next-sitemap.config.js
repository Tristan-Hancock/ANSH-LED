/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // either hard‐code your canonical domain…
  siteUrl: 'https://www.anshled.com',
  // …or pick it up from your VERCEL_URL / NEXT_PUBLIC_SITE_URL env var:
  // siteUrl: process.env.NEXT_PUBLIC_SITE_URL,

  // write the generated XML+TXT into ./public
  outDir: './public',

  // tell it to generate robots.txt for you
  generateRobotsTxt: true,

  // (optional) how often pages change
  changefreq: 'daily',
  // (optional) give them a decent priority
  priority: 0.7,

  // split into multiple sitemap files once you have >5k URLs
  sitemapSize: 5000,
}
