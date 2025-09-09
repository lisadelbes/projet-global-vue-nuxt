// Dans main il faudra dire à notre Application 
// Qu'elle va importer et utiliser le router
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')