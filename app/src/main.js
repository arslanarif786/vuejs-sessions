import './assets/main.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'

const pinia = createPinia()
const app = createApp(App)

// createApp(App).mount('#app')
app.use(router)
app.use(pinia)
app.mount('#app')
