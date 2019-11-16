import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import VueGoogleCharts from 'vue-google-charts';
import App from './App.vue';
import router from './router';
import store from './store';


// Vue Material
Vue.use(VueMaterial);
// Google charts plugin
Vue.use(VueGoogleCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
