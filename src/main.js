import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from './plugins/Vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
