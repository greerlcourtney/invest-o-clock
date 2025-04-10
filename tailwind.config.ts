import type { Config } from "tailwindcss";
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        matrix: {
          green: "#00FF41",
          dark: "#0A0A0A",
          light: "#1A1A1A",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        mono: ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glow: {
          "0%, 100%": { filter: "brightness(100%)" },
          "50%": { filter: "brightness(150%)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#00FF41',
              '&:hover': {
                color: '#00FF41',
              },
            },
            p: {
              color: 'inherit',
            },
            h1: {
              color: '#00FF41',
            },
            h2: {
              color: '#00FF41',
            },
            h3: {
              color: '#00FF41',
            },
            h4: {
              color: '#00FF41',
            },
            code: {
              color: '#00FF41',
            },
            strong: {
              color: '#00FF41',
            },
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), 
require("@tailwindcss/typography")],
} satisfies Config;