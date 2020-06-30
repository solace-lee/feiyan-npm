<template>
  <div :style="`width:${width};height:${height}`">
    <div
      v-if="imgList.length"
      :class="`d-${display} ${display === 'flex' ? ('justify-'+ float + ' flex-wrap') : ''}`"
    >
      <viewer :images="imgList">
        <img
          v-for="(i, index) in imgList"
          :key="index"
          :src="i"
          style="width:100%;height:100%"
        />
      </viewer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeiyanImg',
  props: {
    imgdata: {
      type: [String, Array],
      default: ''
    },
    float: {
      type: String,
      default: 'end'
    },
    display: {
      type: String,
      default: 'flex'
    },
    width: {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  data () {
    return {
      imgList: []
    }
  },
  watch: {
    imgdata: {
      deep: true,
      handler (val, oldval) {
        if (val !== oldval && val) {
          this.imgList = Array.isArray(val) ? val : [val]
        }
      },
      immediate: true
    }
  }
}
</script>
