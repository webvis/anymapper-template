import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['./**/*.{js,css,html,ico,png,svg,json}']
    },
    includeAssets: ['icon.svg'],
      manifest: {
        name: 'Anymapper Application',
        short_name: 'AnymapperApp',
        description: 'Template for anymapper application',
        theme_color: '#bf4400',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml'
          },
          {
            src: 'icon.png',
            sizes: '512x512',
            type: 'image/png'
          },
        ]
      }
  })],
  base: '',
})
