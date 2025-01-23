import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Esto asegura que las rutas funcionen correctamente en un entorno sin servidor
  build: {
    rollupOptions: {
      input: './index.html', // Asegura que siempre se sirva index.html
    },
  },
});
