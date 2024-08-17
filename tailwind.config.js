import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */

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
    container: {
        padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            lg: "3rem",
            xl: "3rem",
            "2xl": "4rem",
        },
    },
    extend: {
        fontFamily: {
            sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
            jakarta: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
            playfair: ["Playfair Display", ...defaultTheme.fontFamily.serif],
        },
        colors: {
            primary500: "#004140",
            primary300: "#005E5B",
            primary100: "#178986",
            secondary500: "#CBA237",
            secondary300: "#D3B854",
            text: "#7A7A7A",
            white: "#FBFBFB",
        },

        keyframes: {
            ripple: {
                "0%, 100%": {
                    transform: "translate(-50%, -50%) scale(1)",
                },
                "50%": {
                    transform: "translate(-50%, -50%) scale(0.9)",
                },
            },
            "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
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
        },
        animation: {
            "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
            slide: "slide var(--speed) ease-in-out infinite alternate",
        },
        keyframes: {
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
            slide: {
                to: {
                    transform: "translate(calc(100cqw - 100%), 0)",
                },
            },
        },
    },
};
export const plugins = [require("tailwindcss-animate")];
