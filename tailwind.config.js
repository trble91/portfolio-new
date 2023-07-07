/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  options: {
    safelist: ["flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center", 'absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl', 'flex relative flex-col text-center mt-20 snap-center', 'flex absolute flex-row text-gray-500 text-md top-18 items-center max-w-600px px-10]', ''],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
},
plugins: [],
}
