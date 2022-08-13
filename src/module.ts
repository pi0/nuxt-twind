import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'twind',
    configKey: 'twind',
    compatibility: {
      nuxt: '^3.0.0-rc.8'
    }
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    addPlugin(resolver.resolve('./runtime/twind.client'))

    nuxt.options.nitro = defu(nuxt.options.nitro, {
      plugins: [
        resolver.resolve('./runtime/twind.nitro')
      ],
      externals: {
        inline: [
          resolver.resolve('./runtime'),
          'twind',
          '@twind/preset-tailwind'
        ]
      }
    })
  }
})
