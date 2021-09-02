import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import moment from 'moment';


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



createApp(App).use(router,moment).mount('#app');
