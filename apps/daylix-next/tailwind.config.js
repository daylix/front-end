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
  theme: {
    themes: ["light", "dark", "night"],
  },
  daisyui: {
    themes: ["light", "dark", "night"],
  },
  plugins: [daisyui],
};
