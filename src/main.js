import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/all.min.css'
import '@/assets/css/custom_style.css'
import store from '@/store'
const app = createApp(App)
app
    .use(store)
    .mount('#app')
