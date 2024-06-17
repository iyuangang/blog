/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/[...404]': RouteRecordInfo<'/[...404]', '/:404(.*)', { 404: ParamValue<true> }, { 404: ParamValue<false> }>,
    '/bookmarks': RouteRecordInfo<'/bookmarks', '/bookmarks', Record<never, never>, Record<never, never>>,
    '/chat': RouteRecordInfo<'/chat', '/chat', Record<never, never>, Record<never, never>>,
    '/chat-zh': RouteRecordInfo<'/chat-zh', '/chat-zh', Record<never, never>, Record<never, never>>,
    '/collective-sponsor-onetime': RouteRecordInfo<'/collective-sponsor-onetime', '/collective-sponsor-onetime', Record<never, never>, Record<never, never>>,
    '/demos': RouteRecordInfo<'/demos', '/demos', Record<never, never>, Record<never, never>>,
    '/giving-talks': RouteRecordInfo<'/giving-talks', '/giving-talks', Record<never, never>, Record<never, never>>,
    '/notes': RouteRecordInfo<'/notes', '/notes', Record<never, never>, Record<never, never>>,
    '/podcasts': RouteRecordInfo<'/podcasts', '/podcasts', Record<never, never>, Record<never, never>>,
    '/posts/': RouteRecordInfo<'/posts/', '/posts', Record<never, never>, Record<never, never>>,
    '/posts/about-yak-shaving': RouteRecordInfo<'/posts/about-yak-shaving', '/posts/about-yak-shaving', Record<never, never>, Record<never, never>>,
    '/posts/about-yak-shaving-zh': RouteRecordInfo<'/posts/about-yak-shaving-zh', '/posts/about-yak-shaving-zh', Record<never, never>, Record<never, never>>,
    '/posts/ai-qrcode': RouteRecordInfo<'/posts/ai-qrcode', '/posts/ai-qrcode', Record<never, never>, Record<never, never>>,
    '/posts/ai-qrcode-101': RouteRecordInfo<'/posts/ai-qrcode-101', '/posts/ai-qrcode-101', Record<never, never>, Record<never, never>>,
    '/posts/ai-qrcode-refine': RouteRecordInfo<'/posts/ai-qrcode-refine', '/posts/ai-qrcode-refine', Record<never, never>, Record<never, never>>,
    '/posts/animated-svg-logo': RouteRecordInfo<'/posts/animated-svg-logo', '/posts/animated-svg-logo', Record<never, never>, Record<never, never>>,
    '/posts/async-with-composition-api': RouteRecordInfo<'/posts/async-with-composition-api', '/posts/async-with-composition-api', Record<never, never>, Record<never, never>>,
    '/posts/binfe-2020-zh': RouteRecordInfo<'/posts/binfe-2020-zh', '/posts/binfe-2020-zh', Record<never, never>, Record<never, never>>,
    '/posts/bonjour-paris': RouteRecordInfo<'/posts/bonjour-paris', '/posts/bonjour-paris', Record<never, never>, Record<never, never>>,
    '/posts/break-lines-in-js': RouteRecordInfo<'/posts/break-lines-in-js', '/posts/break-lines-in-js', Record<never, never>, Record<never, never>>,
    '/posts/color-scheme-for-vscode-ext': RouteRecordInfo<'/posts/color-scheme-for-vscode-ext', '/posts/color-scheme-for-vscode-ext', Record<never, never>, Record<never, never>>,
    '/posts/composable-vue-vueconf-china-2021': RouteRecordInfo<'/posts/composable-vue-vueconf-china-2021', '/posts/composable-vue-vueconf-china-2021', Record<never, never>, Record<never, never>>,
    '/posts/composable-vue-vueday-2021': RouteRecordInfo<'/posts/composable-vue-vueday-2021', '/posts/composable-vue-vueday-2021', Record<never, never>, Record<never, never>>,
    '/posts/destructuring-with-object-or-array': RouteRecordInfo<'/posts/destructuring-with-object-or-array', '/posts/destructuring-with-object-or-array', Record<never, never>, Record<never, never>>,
    '/posts/dev-ssr-on-nuxt': RouteRecordInfo<'/posts/dev-ssr-on-nuxt', '/posts/dev-ssr-on-nuxt', Record<never, never>, Record<never, never>>,
    '/posts/domain-email': RouteRecordInfo<'/posts/domain-email', '/posts/domain-email', Record<never, never>, Record<never, never>>,
    '/posts/eslint-config-inspector': RouteRecordInfo<'/posts/eslint-config-inspector', '/posts/eslint-config-inspector', Record<never, never>, Record<never, never>>,
    '/posts/evolution-of-shiki-v1': RouteRecordInfo<'/posts/evolution-of-shiki-v1', '/posts/evolution-of-shiki-v1', Record<never, never>, Record<never, never>>,
    '/posts/get-package-root': RouteRecordInfo<'/posts/get-package-root', '/posts/get-package-root', Record<never, never>, Record<never, never>>,
    '/posts/github-alerts': RouteRecordInfo<'/posts/github-alerts', '/posts/github-alerts', Record<never, never>, Record<never, never>>,
    '/posts/github-co-authors': RouteRecordInfo<'/posts/github-co-authors', '/posts/github-co-authors', Record<never, never>, Record<never, never>>,
    '/posts/icons-in-pure-css': RouteRecordInfo<'/posts/icons-in-pure-css', '/posts/icons-in-pure-css', Record<never, never>, Record<never, never>>,
    '/posts/icons-in-pure-css-zh': RouteRecordInfo<'/posts/icons-in-pure-css-zh', '/posts/icons-in-pure-css-zh', Record<never, never>, Record<never, never>>,
    '/posts/introducing-nuxt-devtools': RouteRecordInfo<'/posts/introducing-nuxt-devtools', '/posts/introducing-nuxt-devtools', Record<never, never>, Record<never, never>>,
    '/posts/introduction-to-vitest-vue-nation-2022': RouteRecordInfo<'/posts/introduction-to-vitest-vue-nation-2022', '/posts/introduction-to-vitest-vue-nation-2022', Record<never, never>, Record<never, never>>,
    '/posts/isomorphic-dirname': RouteRecordInfo<'/posts/isomorphic-dirname', '/posts/isomorphic-dirname', Record<never, never>, Record<never, never>>,
    '/posts/journey-with-icons': RouteRecordInfo<'/posts/journey-with-icons', '/posts/journey-with-icons', Record<never, never>, Record<never, never>>,
    '/posts/journey-with-icons-continues': RouteRecordInfo<'/posts/journey-with-icons-continues', '/posts/journey-with-icons-continues', Record<never, never>, Record<never, never>>,
    '/posts/make-libraries-working-with-vue-2-and-3': RouteRecordInfo<'/posts/make-libraries-working-with-vue-2-and-3', '/posts/make-libraries-working-with-vue-2-and-3', Record<never, never>, Record<never, never>>,
    '/posts/manage-github-notifications-2023': RouteRecordInfo<'/posts/manage-github-notifications-2023', '/posts/manage-github-notifications-2023', Record<never, never>, Record<never, never>>,
    '/posts/match-chinese-characters': RouteRecordInfo<'/posts/match-chinese-characters', '/posts/match-chinese-characters', Record<never, never>, Record<never, never>>,
    '/posts/match-quotes-in-pairs': RouteRecordInfo<'/posts/match-quotes-in-pairs', '/posts/match-quotes-in-pairs', Record<never, never>, Record<never, never>>,
    '/posts/mental-health-oss': RouteRecordInfo<'/posts/mental-health-oss', '/posts/mental-health-oss', Record<never, never>, Record<never, never>>,
    '/posts/mental-health-oss-zh': RouteRecordInfo<'/posts/mental-health-oss-zh', '/posts/mental-health-oss-zh', Record<never, never>, Record<never, never>>,
    '/posts/netlify-redirects': RouteRecordInfo<'/posts/netlify-redirects', '/posts/netlify-redirects', Record<never, never>, Record<never, never>>,
    '/posts/new-house': RouteRecordInfo<'/posts/new-house', '/posts/new-house', Record<never, never>, Record<never, never>>,
    '/posts/new-ways-to-vue-london-2021': RouteRecordInfo<'/posts/new-ways-to-vue-london-2021', '/posts/new-ways-to-vue-london-2021', Record<never, never>, Record<never, never>>,
    '/posts/new-ways-to-vue-taiwan-2021': RouteRecordInfo<'/posts/new-ways-to-vue-taiwan-2021', '/posts/new-ways-to-vue-taiwan-2021', Record<never, never>, Record<never, never>>,
    '/posts/now-and-future-devtools-nuxt-nation-2023': RouteRecordInfo<'/posts/now-and-future-devtools-nuxt-nation-2023', '/posts/now-and-future-devtools-nuxt-nation-2023', Record<never, never>, Record<never, never>>,
    '/posts/npm-binary-mirrors': RouteRecordInfo<'/posts/npm-binary-mirrors', '/posts/npm-binary-mirrors', Record<never, never>, Record<never, never>>,
    '/posts/nuxt-devtools-v1': RouteRecordInfo<'/posts/nuxt-devtools-v1', '/posts/nuxt-devtools-v1', Record<never, never>, Record<never, never>>,
    '/posts/nuxt-dx-2023': RouteRecordInfo<'/posts/nuxt-dx-2023', '/posts/nuxt-dx-2023', Record<never, never>, Record<never, never>>,
    '/posts/nuxt-dx-strasbourg-2023': RouteRecordInfo<'/posts/nuxt-dx-strasbourg-2023', '/posts/nuxt-dx-strasbourg-2023', Record<never, never>, Record<never, never>>,
    '/posts/optimize-await': RouteRecordInfo<'/posts/optimize-await', '/posts/optimize-await', Record<never, never>, Record<never, never>>,
    '/posts/patterns-of-vueuse-vuefes-japan-2022': RouteRecordInfo<'/posts/patterns-of-vueuse-vuefes-japan-2022', '/posts/patterns-of-vueuse-vuefes-japan-2022', Record<never, never>, Record<never, never>>,
    '/posts/pnpm-external-disk': RouteRecordInfo<'/posts/pnpm-external-disk', '/posts/pnpm-external-disk', Record<never, never>, Record<never, never>>,
    '/posts/publish-esm-and-cjs': RouteRecordInfo<'/posts/publish-esm-and-cjs', '/posts/publish-esm-and-cjs', Record<never, never>, Record<never, never>>,
    '/posts/range-in-javascript': RouteRecordInfo<'/posts/range-in-javascript', '/posts/range-in-javascript', Record<never, never>, Record<never, never>>,
    '/posts/reflection-of-speaking-in-public': RouteRecordInfo<'/posts/reflection-of-speaking-in-public', '/posts/reflection-of-speaking-in-public', Record<never, never>, Record<never, never>>,
    '/posts/refreshed-nuxt-eslint': RouteRecordInfo<'/posts/refreshed-nuxt-eslint', '/posts/refreshed-nuxt-eslint', Record<never, never>, Record<never, never>>,
    '/posts/reimagine-atomic-css': RouteRecordInfo<'/posts/reimagine-atomic-css', '/posts/reimagine-atomic-css', Record<never, never>, Record<never, never>>,
    '/posts/reimagine-atomic-css-zh': RouteRecordInfo<'/posts/reimagine-atomic-css-zh', '/posts/reimagine-atomic-css-zh', Record<never, never>, Record<never, never>>,
    '/posts/rewrite-in-vite': RouteRecordInfo<'/posts/rewrite-in-vite', '/posts/rewrite-in-vite', Record<never, never>, Record<never, never>>,
    '/posts/roads-to-oss-progressive-vueams-2024': RouteRecordInfo<'/posts/roads-to-oss-progressive-vueams-2024', '/posts/roads-to-oss-progressive-vueams-2024', Record<never, never>, Record<never, never>>,
    '/posts/roads-to-oss-set-theory-react-paris-2024': RouteRecordInfo<'/posts/roads-to-oss-set-theory-react-paris-2024', '/posts/roads-to-oss-set-theory-react-paris-2024', Record<never, never>, Record<never, never>>,
    '/posts/roads-to-oss-set-theory-viteconf-2023': RouteRecordInfo<'/posts/roads-to-oss-set-theory-viteconf-2023', '/posts/roads-to-oss-set-theory-viteconf-2023', Record<never, never>, Record<never, never>>,
    '/posts/roads-to-oss-set-theory-vuefesjapan-2023': RouteRecordInfo<'/posts/roads-to-oss-set-theory-vuefesjapan-2023', '/posts/roads-to-oss-set-theory-vuefesjapan-2023', Record<never, never>, Record<never, never>>,
    '/posts/shiki-magic-move': RouteRecordInfo<'/posts/shiki-magic-move', '/posts/shiki-magic-move', Record<never, never>, Record<never, never>>,
    '/posts/shikiji-twoslash': RouteRecordInfo<'/posts/shikiji-twoslash', '/posts/shikiji-twoslash', Record<never, never>, Record<never, never>>,
    '/posts/sliding-enter-animation': RouteRecordInfo<'/posts/sliding-enter-animation', '/posts/sliding-enter-animation', Record<never, never>, Record<never, never>>,
    '/posts/sponsorship-forwarding': RouteRecordInfo<'/posts/sponsorship-forwarding', '/posts/sponsorship-forwarding', Record<never, never>, Record<never, never>>,
    '/posts/type-inferencing-in-vue': RouteRecordInfo<'/posts/type-inferencing-in-vue', '/posts/type-inferencing-in-vue', Record<never, never>, Record<never, never>>,
    '/posts/type-your-config': RouteRecordInfo<'/posts/type-your-config', '/posts/type-your-config', Record<never, never>, Record<never, never>>,
    '/posts/typed-provide-and-inject-in-vue': RouteRecordInfo<'/posts/typed-provide-and-inject-in-vue', '/posts/typed-provide-and-inject-in-vue', Record<never, never>, Record<never, never>>,
    '/posts/types-for-sub-modules': RouteRecordInfo<'/posts/types-for-sub-modules', '/posts/types-for-sub-modules', Record<never, never>, Record<never, never>>,
    '/posts/vite-on-demand-dx-viteconf-2022': RouteRecordInfo<'/posts/vite-on-demand-dx-viteconf-2022', '/posts/vite-on-demand-dx-viteconf-2022', Record<never, never>, Record<never, never>>,
    '/posts/vue-3-notes': RouteRecordInfo<'/posts/vue-3-notes', '/posts/vue-3-notes', Record<never, never>, Record<never, never>>,
    '/posts/vue-beijing-2021': RouteRecordInfo<'/posts/vue-beijing-2021', '/posts/vue-beijing-2021', Record<never, never>, Record<never, never>>,
    '/posts/vueuse-best-practice-vueconf-china-2022': RouteRecordInfo<'/posts/vueuse-best-practice-vueconf-china-2022', '/posts/vueuse-best-practice-vueconf-china-2022', Record<never, never>, Record<never, never>>,
    '/posts/watch-with-reactivity': RouteRecordInfo<'/posts/watch-with-reactivity', '/posts/watch-with-reactivity', Record<never, never>, Record<never, never>>,
    '/posts/why-not-prettier': RouteRecordInfo<'/posts/why-not-prettier', '/posts/why-not-prettier', Record<never, never>, Record<never, never>>,
    '/posts/why-not-prettier-zh': RouteRecordInfo<'/posts/why-not-prettier-zh', '/posts/why-not-prettier-zh', Record<never, never>, Record<never, never>>,
    '/posts/why-reproductions-are-required': RouteRecordInfo<'/posts/why-reproductions-are-required', '/posts/why-reproductions-are-required', Record<never, never>, Record<never, never>>,
    '/posts/why-reproductions-are-required-zh': RouteRecordInfo<'/posts/why-reproductions-are-required-zh', '/posts/why-reproductions-are-required-zh', Record<never, never>, Record<never, never>>,
    '/posts/windicss-and-tailwind-jit': RouteRecordInfo<'/posts/windicss-and-tailwind-jit', '/posts/windicss-and-tailwind-jit', Record<never, never>, Record<never, never>>,
    '/projects': RouteRecordInfo<'/projects', '/projects', Record<never, never>, Record<never, never>>,
    '/sponsors-list': RouteRecordInfo<'/sponsors-list', '/sponsors-list', Record<never, never>, Record<never, never>>,
    '/streams': RouteRecordInfo<'/streams', '/streams', Record<never, never>, Record<never, never>>,
    '/talks': RouteRecordInfo<'/talks', '/talks', Record<never, never>, Record<never, never>>,
  }
}
