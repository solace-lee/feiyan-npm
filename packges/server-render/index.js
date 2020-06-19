import VueMathjax from './src/vue-mathjax.vue'

export function install (Vue) {
  Vue.component('vue-mathjax', VueMathjax)
}

const plugin = {
  version: '1.0',
  install
}

export default plugin
