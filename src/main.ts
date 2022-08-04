import './app.css'
import App from './App.svelte'

navigator.serviceWorker.register('service-worker.js', {
  scope: '.'
});

const app = new App({
  target: document.getElementById('app')
})

export default app
