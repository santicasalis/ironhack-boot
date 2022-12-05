import { createApp } from 'vue'
import {createPinia} from "pinia;"
import App from './App.vue'

import './assets/main.css'

App.use(createPinia());
createApp(App).mount('#app')
