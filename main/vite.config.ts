import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/App',
      },
      remotes: {
        child: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: ['react','react-dom']
    })
  ],
  server: {
    port: 4001,
    fs: {
      strict: true,
    }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
