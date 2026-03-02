import { createApp } from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'
import UserdataExternalTransmission from '../src/components/UserdataExternalTransmission.vue'

const app = createApp(UserdataExternalTransmission)
app.mount('#app')
app.use(Buefy)
