import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'
import Popup from '@/components/Popup'
import "./assets/scss/main.scss"

createApp(App)
  .mixin(mixins)
  .use(store)
  .use(router)
  .component("Popup", Popup)
  .mount('#app')
