import { createApp } from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'
import CommercialLaw from '../src/components/CommercialLaw.vue'

const app = createApp(CommercialLaw)
app.mount('#app')
app.use(Buefy)
