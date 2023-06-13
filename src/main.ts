// Import styles files
import './assets/style/main.less'

// Import Vue and other plugins
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueI18n from 'vue-i18n'

// Import App and router
import App from '@/App.vue'
import router from './router'

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)
app.use(VueI18n)

// Mount Vue app
app.mount('#app')
