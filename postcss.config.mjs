/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- INI PERUBAHANNYA
    autoprefixer: {},
  },
};

export default config;