<template>
  <div>
    <div
      v-if="imgList.length"
      :class="`d-flex flex-wrap justify-${float}`"
    >
      <viewer :images="imgList">
        <img
          v-for="(i, index) in imgList"
          :key="index"
          :src="i"
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
