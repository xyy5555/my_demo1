<template>
  <div id="app"  >
     
    <!-- 引入routerview组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  
  
}
</script>

<style lang="less" scoped>
html,body{
  margin: 0;
}
#app {
  height: 100vh;
}
</style>
