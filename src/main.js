import { createApp } from 'vue'
import 'github-markdown-css/github-markdown-light.css'
import Profile from './components/Profile.vue'
import i18n from './utils/i18n'

const app = createApp(Profile)
app.use(i18n)
app.mount('#app')
