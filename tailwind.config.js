/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
      mytheme: {
              
        'text': '#f6fdfd',
        'primary': '#48fec8',
        'secondary': '#82f0fb',
        'accent': '#3224c6',
              
        "neutral": "#f3f4f6",
              
        "base-100": "#000000",
              
        "info": "#447CC5",
              
        "success": "#4ade80",
              
        "warning": "#fbbf24",
              
        "error": "#F82112",
          },
        },
    ],
  },
  plugins: [require("daisyui")],
}

