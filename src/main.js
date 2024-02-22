import { createApp } from 'vue'
import 'github-markdown-css/github-markdown-light.css'
import App from './App.vue'
import router from './utils/router'
import i18n from './utils/i18n'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
