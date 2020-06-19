<template>
  <div class="item">
    <h3>服务端渲染组件</h3>
    <vue-mathjax
      :formula="mathDetail"
    />
  </div>
</template>

<script>
export default {
  name: 'ServerRender',
  data () {
    return {
      mathDetail: '测试数据$\\frac{2}{3}$'
    }
  }
}
</script>