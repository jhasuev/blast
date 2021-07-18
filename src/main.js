import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Popup from '@/components/Popup'
import "./assets/scss/main.scss"

createApp(App)
  .use(router)
  .component("Popup", Popup)
  .mount('#app')
