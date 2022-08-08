<template>
    <el-container style="100%">
       <el-aside width="auto">
           <CommonAside/>
       </el-aside>
       <el-container>
          <el-header style="background:grey" >
            <CommonHeader/>
            </el-header>
          <CommonTag/>
          <el-main>
              <router-view></router-view>
          </el-main>
       </el-container>
</el-container>
</template>

<script>
// 引入公共区域组件

   import CommonAside from '@/components/CommonAside.vue'
    import CommonHeader from '@/components/CommonHeader.vue'
    import CommonTag from '../src/components/CommonTag.vue'
    export default {
        name:'Home',
        data() {
            return {
                
            }
        },
        components:{
            CommonAside ,
            CommonHeader,
            CommonTag
    }
}
</script>
<!-- 用npm i less下载less npm i less loader下载依赖 -->
<style lang="less" >
    .el-header{
        background: #333;
    }
    .el-main{
        padding: 0;
    }
</style>