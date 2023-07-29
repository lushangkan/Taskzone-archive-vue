import 'reflect-metadata'

// Import styles files
import './styles/main.less'
import 'overlayscrollbars/overlayscrollbars.css';

// Import Vue and other plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initDb } from '@/database/init-db';
import VStickyElement from 'vue-sticky-element';

// Import App and router
import App from '@/App.vue'
import router from './router/router'

// Import database stores
import { useDatabaseStores } from '@/stores/database-stores';

// Import i18n
import {i18n} from "./locals/i18n";

// Create Vue app
const app = createApp(App)

// Use plugins
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VStickyElement);

// Use database stores
const dbStores = useDatabaseStores();

// Init database
initDb(() => {

},() => {
  router.isReady().then(() => {
    // Mount Vue app
    app.mount('#app')
  });
}, dbStores);