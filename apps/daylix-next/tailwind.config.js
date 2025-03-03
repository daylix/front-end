const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0d1117',
        'bg-darker': '#010409',
        'bg-light': '#161b22',
        'text-primary': '#c9d1d9',
        'text-secondary': '#8b949e',
        'border-primary': '#30363d',
        'border-secondary': '#21262d',
        'accent-blue': '#58a6ff',
        'accent-green': '#3fb950',
        'accent-yellow': '#d29922',
        'accent-red': '#f85149',
        'btn-hover': '#30363d',
        'btn-active': '#282e33',
      },
      boxShadow: {
        'btn': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],

          // Base colors
          "base-100": "#0d1117",
          "base-200": "#161b22",
          "base-300": "#21262d",

          // Text colors
          "text-base-content": "#c9d1d9",
          "text-muted": "#8b949e",

          // Accent colors
          "primary": "#197ABA",
          "primary-focus": "#146294",
          "primary-content": "#ffffff",
          "secondary": "#5CAEE6",

          // Neutral colors
          "neutral": "#30363d",
          "neutral-focus": "#6e7681",
          "neutral-content": "#c9d1d9",

          // Status colors
          "success": "#3fb950",
          "warning": "#d29922",
          "error": "#f85149",
          "info": "#58a6ff",

          // Component settings
          "--rounded-box": "6px",
          "--rounded-btn": "6px",
          "--rounded-badge": "6px",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "none",
          "--btn-focus-scale": "0.98",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "6px",
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
