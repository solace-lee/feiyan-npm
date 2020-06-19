import Vue from 'vue'
import App from './App.vue'
import serverRender from '../packges/server-render'
import '../packges/server-render/src/mathStyle.css'

import MathLive from '../packges/feiyan-math-input'
import '../packges/feiyan-math-input/src/math-input.css'

Vue.use(serverRender)
Vue.use(MathLive)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
