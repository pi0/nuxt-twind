import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'twind',
    configKey: 'twind'
  },
  setup (_options, nuxt) {
    const resolver = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    addPlugin(resolver.resolve('./runtime/twind.client'))

    nuxt.options.nitro.plugins = nuxt.options.nitro.plugins || []
    nuxt.options.nitro.plugins.push(resolver.resolve('./runtime/twind.nitro'))
  }
})
