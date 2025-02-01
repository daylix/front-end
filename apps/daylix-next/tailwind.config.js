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
        'base-100': '#1E1E1E',
        'base-200': '#252526',
        'base-300': '#2D2D2D',

        // Primary accent colors
        'primary': {
          'light': '#6B84F5',
          DEFAULT: '#405FF3',
          'dark': '#2D4BE0',
          'hover': '#3654E8'
        },

        // Text colors
        'text': {
          'primary': '#D4D4D4',
          'secondary': '#9D9D9D',
          'muted': '#6E6E6E',
          'link': '#4DC9FF',
        },

        // Semantic colors
        'success': {
          'light': '#89D185',
          DEFAULT: '#388A34',
          'dark': '#2D6A2D'
        },
        'warning': {
          'light': '#CCA700',
          DEFAULT: '#997000',
          'dark': '#664900'
        },
        'error': {
          'light': '#F48771',
          DEFAULT: '#E51400',
          'dark': '#A31515'
        },
        'info': {
          'light': '#75BEFF',
          DEFAULT: '#0078D4',
          'dark': '#005A9E'
        },

        // UI element colors
        'surface': {
          'overlay': 'rgba(0, 0, 0, 0.4)',
          'hover': '#2A2D2E',
          'active': '#37373D',
          'disabled': '#4D4D4D'
        },

        // Border colors
        'border': {
          DEFAULT: '#454545',
          'light': '#5A5A5A',
          'focus': '#007FD4'
        }
      },

      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.18)',
        DEFAULT: '0 2px 8px rgba(0, 0, 0, 0.24)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.3)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.36)',
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
          "base-100": "#1E1E1E",
          "base-200": "#252526",
          "base-300": "#2D2D2D",

          // Accent colors
          "primary": "#405FF3",
          "primary-focus": "#3654E8",
          "primary-content": "#FFFFFF",

          // Neutral colors
          "neutral": "#37373D",
          "neutral-focus": "#3E3E42",
          "neutral-content": "#D4D4D4",

          // Status colors
          "success": "#388A34",
          "warning": "#997000",
          "error": "#E51400",
          "info": "#0078D4",

          // Component settings
          "--animation-btn": "0.1s",
          "--animation-input": "0.1s",
          "--btn-text-case": "none",
          "--btn-focus-scale": "0.98",
          "--tab-border": "1px",
          "--tab-radius": "0.25rem",
          "--card-shadow": "0 2px 8px rgba(0, 0, 0, 0.24)",
          "--input-shadow": "0 1px 4px rgba(0, 0, 0, 0.18)",
          "--btn-shadow": "0 1px 4px rgba(0, 0, 0, 0.18)",
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
