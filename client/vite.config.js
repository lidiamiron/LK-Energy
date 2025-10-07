import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Configuración importante para rutas y SEO
  base: './',
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Optimizaciones para SEO y rendimiento
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    
    // Generar nombres de archivos legibles para SEO
    rollupOptions: {
      output: {
        // Nombres legibles para chunks (mejor para caching y SEO)
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
            return 'assets/[name]-[hash].[ext]'
          }
          return 'assets/[name]-[hash].[ext]'
        }
      }
    },
    
    // Mejorar el chunking para SEO
    chunkSizeWarningLimit: 1000,
    
    // Source maps para producción (opcional, útil para debugging)
    sourcemap: false
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true // Abre el navegador automáticamente
  },
  
  // Previsualización de producción
  preview: {
    port: 4173,
    host: true
  },
  
  // Optimizaciones adicionales
  esbuild: {
    legalComments: 'none' // Remover comentarios legales
  }
})