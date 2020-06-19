import Vue from 'vue'
import App from './App.vue'
import serverRender from '../packges/server-render'
import '../packges/server-render/src/mathStyle.css'

Vue.use(serverRender)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
