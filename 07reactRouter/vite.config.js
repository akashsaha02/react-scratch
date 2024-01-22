import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('tailwindcss').Config} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
})

