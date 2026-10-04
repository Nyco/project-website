/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return `User-Agent: *\nDisallow:\n\nSitemap: ${siteUrl('/sitemap.xml')}\n`
})
