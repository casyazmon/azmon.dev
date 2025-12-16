import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                surface: "var(--surface)",
                border: "var(--border)",
                foreground: "var(--text-primary)",
                secondary: "var(--text-secondary)",
                accent: "var(--accent)",
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Courier New', 'monospace'],
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '24px',
                'xl': '32px',
                '2xl': '48px',
                '3xl': '64px',
            },
            animation: {
                'blink': 'blink 1s infinite',
                'typing': 'typing 2s steps(40, end)',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'border-glow': 'borderGlow 0.3s ease-out forwards',
                'grid-pulse': 'gridPulse 4s ease-in-out infinite',
            },
            keyframes: {
                blink: {
                    '0%, 50%': { opacity: '1' },
                    '51%, 100%': { opacity: '0' },
                },
                typing: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                slideUp: {
                    from: {
                        opacity: '0',
                        transform: 'translateY(30px)',
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                borderGlow: {
                    from: { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)' },
                    to: { boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)' },
                },
                gridPulse: {
                    '0%, 100%': { opacity: '0.3' },
                    '50%': { opacity: '0.5' },
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '100%',
                        color: 'var(--text-primary)',
                        fontFamily: 'Inter, system-ui, sans-serif',
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
