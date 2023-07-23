import 'reflect-metadata'

// Import styles files
import './styles/main.less'

// Import Vue and other plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { initDb } from '@/database/init-db';

// import VueI18n from 'vue-i18n'

// Import App and router
import App from '@/App.vue'
import router from './router/router'

// Import database stores
import { useDatabaseStores } from '@/stores/database-stores';
const dbStores = useDatabaseStores();

const app = createApp(App)

// Init database
initDb(() => {
  // Use plugins
  app.use(createPinia())
  app.use(router)
// app.use(VueI18n)

  router.isReady().then(() => {
    // Mount Vue app
    app.mount('#app')
  });
}, dbStores);