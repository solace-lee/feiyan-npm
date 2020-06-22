import FeiyanImg from './src/feiyanImg.vue'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

export default function install(Vue) {
  Vue.use(Viewer)
  Viewer.setDefaults({
    navbar: false,
    toolbar: false,
    title: false
  })
  Vue.component('feiyan-img', FeiyanImg)
}