import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
            },
            colors: {
                midnight: "#0b011d", // A more visible deep purple
                primary: {
                    500: "#9d4edd", // Vibrant purple
                    600: "#7b2cbf",
                    400: "#c77dff",
                },
                ide: {
                    bg: "#0b011d",
                    purple: "#bd93f9",
                    pink: "#ff79c6",
                    cyan: "#8be9fd",
                    selection: "#44475a",
                }
            },
        },
    },
    plugins: [],
};
export default config;
