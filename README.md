# Nuxt Twind Module

> Use [Twind](https://twind.style/) with [Nuxt](https://v3.nuxtjs.org/)


> 🧪 **Note:**
> This module was a quick prototype to try twind integration with Nuxt and not well tested.

## Features

- Works with twind 1.x (next)
- Quick SSR class transformation using nitro hooks
- Client HMR support

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

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
