import {createApp} from 'vue'
import App from './App.vue'
import store from './vuex/index'
import router from "@/router/router";
import '@material-design-icons/font'
import '../node_modules/normalize.css'

const app = createApp(App);

app
    .use(router)
    .use(store)
    .mount('#app')