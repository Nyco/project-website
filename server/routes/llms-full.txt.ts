/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// Full website copy for LLMs, built from the i18n messages so it never drifts from the pages
type Messages = typeof siteLocales[number]['messages']

function renderPage(m: Messages): string {
  const list = (items: Record<string, { title: string, description: string }>) =>
    Object.values(items).map(i => `- **${i.title}**: ${i.description}`).join('\n')

  return [
    `### ${m.hero.title} ${m.hero.titleAccent}`, m.hero.description,
    `### ${m.method.title}`, m.method.description, list(m.method.steps),
    `### ${m.maturity.title} (${m.maturity.badge})`,
    Object.values(m.maturity.criteria).map(c => `- **${c.title}**: ${c.description} (${c.topics.join(', ')})`).join('\n'),
    `### ${m.value.title}`, list(m.value.cards),
    `### ${m.why.title}`, m.why.description,
    `### ${m.roadmap.title}`, list(m.roadmap.phases),
    `### ${m.cta.title}`, m.cta.description,
    m.footer.copyright
  ].join('\n\n')
}

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return `# Eclipse QSOS\n\n${siteLocales
    .map(l => `## ${l.name}\n\nSource: ${siteUrl(l.path)}\n\n${renderPage(l.messages)}`)
    .join('\n\n')}\n`
})
