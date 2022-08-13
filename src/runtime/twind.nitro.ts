import { extract, install } from 'twind'
import { defineNitroPlugin } from '#imports'

import twindConfig from '~~/twind.config'

install(twindConfig, process.env.NODE_ENV === 'production')

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
