import './assets/css/main.css'

// import "./assets/js/vendors/darkMode.js"
import "./assets/js/popper.min.js"
import "./assets/js/bootstrap.min.js"
import "./assets/js/simplebar.min.js"
import "./assets/js/theme.min.js"
import "./assets/js/vendors/validation.js"


import { createToaster } from "@meforma/vue-toaster";
window.$toast = createToaster({
    position: 'bottom'
});

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from "axios"
import VueCookies from "vue-cookies";
const app = createApp(App)


app.config.globalProperties.$API_URL = import.meta.env.VITE_APP_URL
axios.defaults.baseURL = import.meta.env.VITE_APP_URL
axios.defaults.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
}

app.use(createPinia())
app.use(router, axios)
app.use(VueCookies)

app.mount('#app')
