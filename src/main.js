import Vue from 'vue'
import App from './App.vue'
import serverRender from '../server-render'
import '../server-render/src/mathStyle.css'

Vue.use(serverRender)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
