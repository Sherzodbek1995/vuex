import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import vueRouter from 'vue-router'

loadFonts()

const app = createApp(App)
  
  app
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
