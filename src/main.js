import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './routes';
Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(ElementUI);

const router = new VueRouter({routes});

new Vue({
   router,
  render: h => h(App),
}).$mount('#app')

