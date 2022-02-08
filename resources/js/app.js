require('./bootstrap');

import { createApp } from 'vue';
import { createStore } from 'vuex';
import { createWebHistory, createRouter } from 'vue-router';

import router from "./Router/index";
//import store from "./Store/index";
import App from "./App.vue";

const app = createApp({
    router,
    //store,
    components: { App }
});//.use(store);

app.use(router).mount("#app");

