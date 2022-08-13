import { extract, install } from 'twind'
import twindConfig from '@@/twind.config'

// Based on https://github.com/tw-in-js/twind/blob/next/packages/gatsby-plugin/src/gatsby-ssr.ts

install(twindConfig, process.env.NODE_ENV == 'production')

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    html.body = html.body.map((chunk) => {
      const r = extract(chunk)
      if (r.css) {
        html.head.push(`<style>${r.css}</style>`)
      }
      return r.html
    })
  })
})
