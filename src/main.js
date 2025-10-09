import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './routes'
import './assets/css/main.css'

export const createApp = ViteSSG(App, { routes }, ({ app, head }) => {
  if (head) app.use(head)
})
