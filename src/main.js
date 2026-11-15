import { createApp } from 'vue'
import 'github-markdown-css/github-markdown-light.css'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'
import i18n from './utils/i18n'
import router from './router'

const app = createApp(App)
app.use(Buefy)
app.use(i18n)
app.use(router)
app.mount('#app')
