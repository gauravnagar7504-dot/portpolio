import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

const demoSlugs = [
  'the-aravali-palace',
  'solara-jaipur',
  'aurelia-beauty-studio',
  'elara-beauty-house',
  'nova-care',
  'dr-aarav-mehta',
  'movehouse',
  'forge-fitness',
]

function serveDemoPagesPlugin() {
  return {
    name: 'serve-demo-pages',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url.split('?')[0].split('#')[0]
        for (const slug of demoSlugs) {
          if (urlPath === `/${slug}` || urlPath === `/${slug}/`) {
            const filePath = path.resolve(__dirname, 'public', slug, 'index.html')
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.end(fs.readFileSync(filePath))
              return
            }
          }
        }
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url.split('?')[0].split('#')[0]
        for (const slug of demoSlugs) {
          if (urlPath === `/${slug}` || urlPath === `/${slug}/`) {
            const filePath = path.resolve(__dirname, 'dist', slug, 'index.html')
            if (fs.existsSync(filePath)) {
              res.setHeader('Content-Type', 'text/html; charset=utf-8')
              res.end(fs.readFileSync(filePath))
              return
            }
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveDemoPagesPlugin()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies(filename, deps) {
        // Exclude motion from initial modulepreload so initial paint has 0 JS animation contention
        return deps.filter((dep) => !dep.includes('motion'))
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
        },
      },
    },
  },
})
