# Nuxt Twind Module

> Integrate [Nuxt](https://v3.nuxtjs.org/) with [Twind](https://twind.style/), The smallest, fastest, most feature complete tailwind-in-js solution in existence!

>  **Warning**
> 🧪  This module was a quick prototype to try twind integration with Nuxt and not well tested.

## Features

- ⚡️ **No build step:** Get all the benefits of Tailwind without the need for PostCSS, configuration, purging, or autoprefixing.
- Works with twind 1.x (next)
- 🚀 **SSR Transforms:** Fast class transformation and [Optimizations](https://twind.style/docs/grouping-syntax)
- 😎 **One low fixed cost:** Twind ships the compiler, not the CSS. This means unlimited styles and variants for one low fixed cost of ~4.5kB.
- 🚗 **Client HMR support:** Fast reloads on client-side


## Installation

Install dependencies:

```sh
# npm
npm i -D nuxt-twind twind@next @twind/preset-tailwind@next

# yarn
yarn add -D nuxt-twind twind@next @twind/preset-tailwind@next

# pnpm
pnpm i -D nuxt-twind twind@next @twind/preset-tailwind@next
```

Add module to `nuxt.config.ts`:

```ts
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    'nuxt-twind'
  ]
})
```

Create `twind.config.ts` in root of your project:


```ts
import { defineConfig } from 'twind'
import presetTailwind from '@twind/preset-tailwind'

export default defineConfig({
  presets: [presetTailwind()]
})
```

Now you can use classes in app:

```vue
<template>
  <div>
    <h2 class="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-300">
      Hey there!
    </h2>
  </div>
</template>
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.

## License

MIT. Made with 💚
