/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export default defineEventHandler((event) => {
  const lastmod = new Date().toISOString().slice(0, 10)
  const alternates = siteLocales
    .map(l => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${siteUrl(l.path)}"/>`)
    .join('\n')
  const urls = siteLocales
    .map(l => `  <url>\n    <loc>${siteUrl(l.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`)
    .join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
})
