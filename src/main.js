import { createApp } from 'vue'
import 'github-markdown-css/github-markdown-light.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
