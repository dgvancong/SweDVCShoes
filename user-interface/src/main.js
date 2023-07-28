import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import router from "@/router";
import store from './store'
import Paginate from 'vuejs-paginate-next'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

createApp(App)
.use(store)
.use(router)
.use( VueSplide )
.use(Paginate)
.mount('#app')
