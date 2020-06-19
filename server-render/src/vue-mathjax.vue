<template>
  <span v-html="chtml" />
</template>

<script>
import { splitString, make2chtml } from './full'

export default {
  props: {
    formula: {
      type: String,
      default: ''
    },
    renderkey: {
      type: String,
      default: '$'
    },
    showstyle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      chtml: '',
      timer: undefined // 数据防抖
    }
  },
  watch: {
    formula: {
      deep: true,
      handler (val, oldval) {
        if (val !== oldval) {
          // 节流
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            this.makeServiceRender(val)
          }, 100)
        }
      },
      immediate: true
    }
  },
  methods: {
    async makeServiceRender (tex) {
      const x = await splitString(tex, this.renderkey || '$')
      this.chtml = x.replace(/@_@/g, '_________')
      if (this.showstyle) {
        const style = await make2chtml(tex, true)
        this.$emit('mathStyle', style)
      }
    }
  }
}
</script>
