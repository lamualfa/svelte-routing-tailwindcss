import App from './App.svelte';

const $app = document.getElementById('app');

new App({
  target: $app,
  hydrate: true,
});

if (!isProduction) $app.classList.add('debug-screens');
