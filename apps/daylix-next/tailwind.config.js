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
        // Система фонових кольорів (глибока, але м'яка)
        'base-100': '#242526',  // Картки та передній план
        'base-200': '#1C1E21',  // Вторинний фон
        'base-300': '#18191A',  // Основний фон

        // Система акцентних кольорів
        'primary': {
          'light': '#6E8FFA',   // Світліший акцент
          DEFAULT: '#5B7AF7',    // Основний акцент
          'dark': '#4865D6',     // Темніший акцент
          'hover': '#4D69E5'     // Стан наведення
        },

        // Система текстових кольорів
        'text': {
          'primary': '#E4E6EB',    // Основний текст
          'secondary': '#B0B3B8',  // Другорядний текст
          'muted': '#8A8D91',      // Приглушений текст
          'link': '#6E8FFA',       // Посилання
        },

        // Семантичні кольори
        'success': {
          'light': '#43A047',
          DEFAULT: '#388E3C',
          'dark': '#2E7D32'
        },
        'warning': {
          'light': '#FB8C00',
          DEFAULT: '#F57C00',
          'dark': '#EF6C00'
        },
        'error': {
          'light': '#E57373',
          DEFAULT: '#EF5350',
          'dark': '#E53935'
        },
        'info': {
          'light': '#64B5F6',
          DEFAULT: '#42A5F5',
          'dark': '#2196F3'
        },

        // Системні кольори
        'surface': {
          'overlay': 'rgba(0, 0, 0, 0.4)',
          'hover': '#2D2F31',
          'active': '#3A3B3C',
          'disabled': '#3E4042'
        },

        // Кольори рамок
        'border': {
          DEFAULT: '#3E4042',
          'light': '#474A4D',
          'focus': '#6E8FFA'
        }
      },

      // Тіні для різних рівнів елементів
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],

          // Основні кольори
          "base-100": "#242526",
          "base-200": "#1C1E21",
          "base-300": "#18191A",

          // Акцентні кольори
          "primary": "#5B7AF7",
          "primary-focus": "#4D69E5",
          "primary-content": "#FFFFFF",

          // Нейтральні кольори
          "neutral": "#3E4042",
          "neutral-focus": "#474A4D",
          "neutral-content": "#E4E6EB",

          // Статусні кольори
          "success": "#388E3C",
          "warning": "#F57C00",
          "error": "#EF5350",
          "info": "#42A5F5",

          // Налаштування компонентів
          "--rounded-box": "0.75rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.375rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "none",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1.5px",
          "--tab-border": "2px",
          "--tab-radius": "0.5rem",

          // Додаткові CSS змінні для компонентів
          "--card-shadow": "0 2px 4px rgba(0, 0, 0, 0.1)",
          "--input-shadow": "0 1px 2px rgba(0, 0, 0, 0.05)",
          "--btn-shadow": "0 1px 3px rgba(0, 0, 0, 0.1)",
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
