import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
<<<<<<< Updated upstream

export const darkMode = ["class"];
export const content = [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
];
export const prefix = "";
export const theme = {
=======
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
  './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
  './storage/framework/views/*.php',
  './resources/views/**/*.blade.php',
  './resources/js/**/*.jsx',
  ],
  prefix: "",
  theme: {
>>>>>>> Stashed changes
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      
      },
    },
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans],
        'jakarta': ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        'playfair': ['Playfair Display', ...defaultTheme.fontFamily.serif],
        'kampungbudaya': ['KampungBudaya', ...defaultTheme.fontFamily.serif],
        'lora': ['lora', ...defaultTheme.fontFamily.serif],
        'montserrat': ['montserrat', ...defaultTheme.fontFamily.serif],
        'montserrat-light': ['montserrat-light', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary500: '#004140',
        primary300: '#005E5B',
        primary100: '#178986',
        secondary500: '#CBA237',
        secondary300: '#D3B854',
        text: '#7A7A7A',
        white: '#FBFBFB',
        green : "#206F57",
        gray : "#575757"
    },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
          
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 5s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
