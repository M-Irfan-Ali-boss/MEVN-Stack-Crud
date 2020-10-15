import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import { routes } from './routes/routes';
import { storeVuex } from './store/Store';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(storeVuex);

const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
