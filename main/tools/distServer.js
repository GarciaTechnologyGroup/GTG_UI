import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import { chalkProcessing } from './chalkConfig';

/* eslint-disable no-console */

console.log(chalkProcessing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: './dist',
  },

  files: [
    './*.html',
  ],

  middleware: [historyApiFallback()],
});
