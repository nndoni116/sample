/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F0E4',
        'cream-dark': '#EDE4D0',
        espresso: '#1E0F07',
        brown: '#3D1F10',
        mocha: '#7B4F2E',
        latte: '#C4965A',
        gold: '#D4A84B',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
