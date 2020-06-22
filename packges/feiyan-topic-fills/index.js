import fillsContentShow from './src/fillsContentShow.vue'
import feiyanImg from 'feiyan-img'
import MathLive from 'feiyan-math-input'
import 'feiyan-math-input/src/math-input.css'

export default function install(Vue) {
  Vue.use(feiyanImg)
  Vue.use(MathLive)
  Vue.component('fills-content-show', fillsContentShow)
}