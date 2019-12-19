import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import Http from './service/http'
Vue.use(Vueaxios, axios)
    //把http挂在到app实例上
Vue.prototype.$Http = Http
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')