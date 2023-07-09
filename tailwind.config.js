/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        "flex sticky flex-row text-center sm:max-w-[300px]  md:flex-row md:text-left xl:flex-row max-w-[400px] xl:px-5 min-h-screen justify-center xl: space-y-4 mx-auto items-center snap-center",
        "sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center",
        "sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-7xl mx-auto z-20 xl:items-center",
        "flex relative float-right",
        "flex flex-row items-center",
        "flex relative text-m",
        "flex relative flex-col text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-end",
        "flex relative flex-col text-center md:text-left xl:flex-row max-w-[600px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center",
        "flex relative flex-col text-center mt-20 snap-center",
        "flex absolute flex-row text-center text-gray-700 text-lg top-56 xl:flex-row max-w-[500px] items-center snap-center",
        "flex absolute flex-row text-gray-700 text-md top-18 items-center max-w-600px px-10]",
        "absolute top-16 uppercase tracking-[17px] text-gray-700 text-2xl sm:text-gray-700 sm:text-base md:text-gray-700 lg:text-gray-700 xl:text-gray-700",
        "absolute top-24 uppercase tracking-[20px] text-gray-700 text-2xl sm:text-gray-700",
        "absolute top-24 uppercase tracking-[17px] text-gray-700 text-2xl sm:text-gray-700",
        "absolute top-44 uppercase tracking-[15px] text-gray-700 text-xl sm:text-gray-700",
        "absolute bottom-48 uppercase tracking-[2px] text-gray-700 text-md marker:mb-10",
        "",
        "",
      ],
    },
    theme: {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
};
