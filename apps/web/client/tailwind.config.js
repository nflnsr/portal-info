/** @type {import('tailwindcss').Config} */
module.exports = {
    // content: [
    //   "../../apps/web/**/*.{js,ts,jsx,tsx,mdx}",
  
    //   "../../apps/web/client/app/**/*.{js,ts,jsx,tsx,mdx}",
  
    //   "./src/**/*.{js,ts,jsx,tsx,mdx}",
    //   "./src/*.{js,ts,jsx,tsx,mdx}",
    //   "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    //   "./src/*.tsx",
    //   "./src/**/*.tsx",
    // ],
    darkMode: ["class"],
    content: [
      "app/**/*.{js,ts,jsx,tsx,mdx}",
      "app/*.{js,ts,jsx,tsx,mdx}",
      "components/**/*.{js,ts,jsx,tsx,mdx}",
      "components/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/src/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/dist/**/*.{js,ts,jsx,tsx,mdx}",
      "../../packages/ui/dist/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
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
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "infinite-scroll": {
            "0%": { transform: "translateY(-67.4%)" },
            "100%": { transform: "translateY(0)" },
          },
          "infinite-scroll-reverse": {
            "0%": { transform: "translateY(20%)" },
            "100%": { transform: "translateY(calc(-50%-var(--gap-infinite-scroll))" },
          },
          "infinite-scroll-reverse-x": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-100%)" },
          },
          "infinite-scroll-x": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(100%)" },
          },
        },
        animation: {
          "infinite-scroll": "infinite-scroll 15s linear infinite",
          "infinite-scroll-reverse":
            "infinite-scroll-reverse 10s linear infinite",
          "infinite-scroll-x": "infinite-scroll-x 10s linear infinite",
          "infinite-scroll-reverse-x":
            "infinite-scroll-reverse-x 10s linear infinite",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  };
  