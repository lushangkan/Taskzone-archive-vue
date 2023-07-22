// Import styles files
import './styles/main.less'

// Import Vue and other plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import VueI18n from 'vue-i18n'

// Import App and router
import App from '@/App.vue'
import router from './router/router'

// Import Capacitor plugins
import { Capacitor } from '@capacitor/core'


customElements.define('jeep-sqlite', JeepSqlite);

const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)
// app.use(VueI18n)

router.isReady().then(() => {
  // Mount Vue app
  app.mount('#app')
});