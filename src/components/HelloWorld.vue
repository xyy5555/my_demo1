<template>
  <div class="hello">
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
     <router-link to="/"> 
       <el-button>按钮</el-button>
       </router-link>
      <router-link to="/user"> 
       <el-button type="primary">主要按钮</el-button>
       </router-link>
    
    <el-radio v-model="radio" label="1">备选项</el-radio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
