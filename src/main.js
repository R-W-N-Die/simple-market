import { createApp } from 'vue'
import App from '@/App.vue'

import { loadFonts } from '@/plugins/webfontloader'
import './style.css'

import axios from "axios";
import vuetify from '@/plugins/vuetify'
import VueAxios from "vue-axios";

import router from "@/router";

loadFonts()

createApp(App)
    .use(VueAxios, axios)
    .use(vuetify)
    .use(router)
    .mount('#app')
