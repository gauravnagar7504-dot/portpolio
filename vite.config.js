import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies(filename, deps) {
        // Exclude motion from initial modulepreload so initial paint has 0 JS animation contention
        return deps.filter((dep) => !dep.includes('motion'));
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
        },
      },
    },
  },
})
