<template>
  <div class="d-inline-block">
    <div class="d-flex flex-wrap">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeiyanImg',
  props: {
    imgData: {
      type: String || Array,
      default: ''
    },
    float: {
      type: String,
      default: 'end'
    }
  }
}
</script>