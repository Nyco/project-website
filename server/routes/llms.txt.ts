/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// https://llmstxt.org/
export default defineEventHandler((event) => {
  const { messages: en } = siteLocales[0]!

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return `# Eclipse QSOS

> ${en.hero.description}

${en.footer.description} An Eclipse Foundation project. Method licensed under CC BY-SA 4.0, tooling under Apache-2.0.

## Website

${siteLocales.map(l => `- [Eclipse QSOS (${l.name})](${siteUrl(l.path)}): Method, maturity criteria, benefits and roadmap`).join('\n')}
- [Full content](${siteUrl('/llms-full.txt')}): Complete text of the website in English and French

## Project

- [Eclipse project page](https://projects.eclipse.org/projects/technology.qsos): Governance, committers and releases
- [GitHub organisation](https://github.com/eclipse-qsos): Source code and issue tracker
`
})
