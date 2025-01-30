const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark", "night"],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: '',
  },
};
