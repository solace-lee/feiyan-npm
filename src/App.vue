<template>
  <div id="app">
    <div style="display:flex;justify-content:center;align-items:center">
      <img alt="Vue logo" width="80" height="80" src="./assets/logo.svg">
      <h2>组件库模板</h2>
    </div>
    <ServerRender />
    <feiyanmathinput />
  </div>
</template>

<script>
import ServerRender from './template/serverRender.vue'
import feiyanmathinput from './template/feiyanmathinput.vue'

export default {
  name: 'App',
  components: {
    ServerRender,
    feiyanmathinput
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
