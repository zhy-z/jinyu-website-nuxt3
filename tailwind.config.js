/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './views/components/**/*.{vue,js}',
    './views/layouts/**/*.vue',
    './views/pages/**/*.vue',
    './views/app.vue',
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

