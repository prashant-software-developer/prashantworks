/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: "hsl(var(--secondary))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
      },
      fontFamily: {
        sans: ['"Inter Tight"', "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.5rem, 1.75rem + 3.4vw, 4.75rem)", { lineHeight: "1.02", fontWeight: "300" }],
        section: ["clamp(1.75rem, 1.4rem + 1.6vw, 2.75rem)", { lineHeight: "1.1", fontWeight: "300" }],
        title: ["clamp(1.25rem, 1.15rem + 0.45vw, 1.5rem)", { lineHeight: "1.3", fontWeight: "300" }],
        "body-lg": ["clamp(1.0625rem, 1rem + 0.25vw, 1.125rem)", { lineHeight: "1.7" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
        eyebrow: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      keyframes: {
        "dash-flow": { to: { strokeDashoffset: "-240" } },
        draw: { from: { strokeDashoffset: "1" }, to: { strokeDashoffset: "0" } },
        halo: { "0%": { transform: "scale(0.6)", opacity: "0.5" }, "100%": { transform: "scale(2.2)", opacity: "0" } },
        "page-in": { from: { opacity: "0", transform: "translateY(4px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "dash-flow": "dash-flow 6s linear infinite",
        draw: "draw 1.8s cubic-bezier(0.65, 0, 0.35, 1) both",
        halo: "halo 2.4s ease-out infinite",
        "page-in": "page-in 0.28s ease-out both",
      },
    },
  },
  plugins: [],
};
