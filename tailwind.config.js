import defaultTheme from "tailwindcss/defaultTheme";
import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        flowbite.content(),
    ],
    prefix: "",
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "3rem",
                "2xl": "4rem",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
                jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
                poppinslight: [
                    "Poppins-Light",
                    ...defaultTheme.fontFamily.sans,
                ],
                playfair: [
                    "Playfair Display",
                    ...defaultTheme.fontFamily.serif,
                ],
                kampungbudaya: [
                    "KampungBudaya",
                    ...defaultTheme.fontFamily.serif,
                ],
                lora: ["lora", ...defaultTheme.fontFamily.serif],
                montserrat: ["montserrat", ...defaultTheme.fontFamily.serif],
                "montserrat-light": [
                    "montserrat-light",
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            boxShadow: {
                "custom-shadow": "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                "custom-shadow2":
                    "0px 1.523px 4.568px 0px rgba(19, 18, 66, 0.07)",
            },
            colors: {
                primary500: "#004140",
                primary300: "#005E5B",
                primary100: "#178986",
                secondary500: "#CBA237",
                secondary300: "#D3B854",
                text: "#7A7A7A",
                white: "#FBFBFB",
                green: "#206F57",
                darkGreen: "#004140",
                gray: "#575757",
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
                "spin-around": {
                    "0%": {
                        transform: "translateZ(0) rotate(0)",
                    },
                    "15%, 35%": {
                        transform: "translateZ(0) rotate(90deg)",
                    },
                    "65%, 85%": {
                        transform: "translateZ(0) rotate(270deg)",
                    },
                    "100%": {
                        transform: "translateZ(0) rotate(360deg)",
                    },
                },
                meteor: {
                    "0%": {
                        transform: "rotate(215deg) translateX(0)",
                        opacity: 1,
                    },
                    "70%": { opacity: 1 },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: 0,
                    },
                },
            },
            animation: {
                "spin-around":
                    "spin-around calc(var(--speed) * 2) infinite linear",
                slide: "slide var(--speed) ease-in-out infinite alternate",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                meteor: "meteor 5s linear infinite",
                ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
                marquee: "marquee var(--duration) linear infinite",
                "marquee-vertical":
                    "marquee-vertical var(--duration) linear infinite",
            },
            slide: {
                to: {
                    transform: "translate(calc(100cqw - 100%), 0)",
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate"), flowbite.plugin()],
};

export const plugins = [require("tailwindcss-animate")];
