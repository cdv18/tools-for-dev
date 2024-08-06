import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "@/routers/router.js";
import {injectInstall} from '@/factory/injects.js'
const pinia = createPinia();
const app = createApp(App);
injectInstall(app);
app.use(router);
app.use(pinia)
app.mount('#app')
