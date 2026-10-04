/*
 * Copyright (c) 2026 Contributors to the Eclipse Foundation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import en from '../../i18n/locales/en.json'
import fr from '../../i18n/locales/fr.json'

/** Locales and their home page path, following the i18n `prefix_except_default` strategy. */
export const siteLocales = [
  { code: 'en', name: 'English', path: '/', messages: en },
  { code: 'fr', name: 'Français', path: '/fr', messages: fr }
]

/** Absolute public URL of a path, built from NUXT_PUBLIC_SITE_URL and NUXT_APP_BASE_URL. */
export function siteUrl(path = '/'): string {
  const { public: { siteUrl }, app: { baseURL } } = useRuntimeConfig()
  return siteUrl.replace(/\/+$/, '') + baseURL.replace(/\/*$/, '/') + path.replace(/^\/+/, '')
}
