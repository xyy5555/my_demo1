<template>
    
        <!-- gutter栅栏间隔 -->
      <el-row class="home" :gutter="20">
          <!-- 定义单元格 定义当前占用的行数-->
          <el-col :span="8" style="margin-top:20px ">
              <!-- shadow属性表示当前阴影的显示状态 -->
              <el-card shadow="hover">
                  <div   class="user">
                      <img :src="userImg"/>
                      <div class="userinfo">
                          <p class="name">admin</p>
                          <p class="access">超级管理员</p>
                      </div>
                  </div>
                  <div class="login_info">
                      <p>上次登录时间:<span>2022-06-02</span></p>
                      <p>上次登录地点:<span>武汉</span></p>
                  </div>
              </el-card>
              <el-card  style="margin-top:20px; height:500px; ">
                  <el-table :data="tableData">
                     <el-table-column
                      v-for="(val,key) in tablelabel" 
                      :key='key'
                      :prop="key"
                      :label="val">
                         
                     </el-table-column>
                  </el-table>
              </el-card>
          </el-col>
          <el-col :span="16" style="margin-top:20px">
              <div class="num">
                  <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                      <i class="icon" :class="'el-icon-${item.icon}'" :style="{background:item.color}"></i>
                      <div class="detail">
                          <p class="num">{{item.value}}</p>
                          <p class="txt">{{item.name}}</p>
                      </div>
                  </el-card>
                   </div>
                   <el-card style="height:280px">
                       <!-- <div style="height:280px" ref="echarts"></div> -->
                       <Echarts :chartData="echartData.order" style="height:280px" ></Echarts>
                   </el-card>
                      <div class="graph">
                          <el-card style="height:260px">
                             <!-- <div style="height:240px" ref="userEcharts"></div> -->
                       <Echarts :chartData="echartData.user" style="height:240px"></Echarts>

                          </el-card>
                          <el-card style="height:260px">
                             <!-- <div style="height:240px" ref="videoEcharts"></div> -->
                                <Echarts :chartData="echartData.video" :isAxisChart="false" style="height:240px"></Echarts>

                          </el-card>
                      </div>
             
          </el-col>
      </el-row>
  
</template>

<script>
  
    // import {getMenu} from '../../Api/data.js'
    import {getData} from '../../Api/data.js'
    // 引入echarts
    // import * as echarts from 'echarts'
    import Echarts from "../../src/components/Echarts.vue"
    export default {
        name:'home',
        components:{
            Echarts
        },
        data() {
            return {
                userImg:require('@/assets/img/01.jpg'),
                tableData:[],
                tablelabel:{
                    name:'课程',
                    todayBuy:'今日购买',
                    monthBuy:'本月购买',
                    totalBuy:'总购买'
                },
                countData:[
                    {
                        name:'今日支付订单',
                        value:1234,
                        icon:'success',
                        color:'#ffb980'
                    },
                     {
                        name:'今日收藏订单',
                        value:210,
                        icon:'star-on',
                        color:'#ffb980'
                    },
                     {
                        name:'今日未支付订单',
                        value:1236,
                        icon:'s-goods',
                        color:'#Sab1ef'
                    },
                     {
                        name:'本月支付订单',
                        value:1234,
                        icon:'success',
                        color:'#2ec7c9'
                    },
                     {
                        name:'本月收藏订单',
                        value:210,
                        icon:'star-on',
                        color:'#ffb980'
                    },
                     {
                        name:'本月未支付订单',
                        value:1234,
                        icon:'s-goods',
                        color:'#5ab1f'
                    }
                ],
                echartData:{
                    order:{
                        xData:[],
                        series:[]
                    },
                    user:{
                        xData:[],
                        series:[]
                    },
                    video:{
                        series:[]
                    }
                }
            }
        },
        mounted(){
        //  调用
        getData().then(res=>{
            const {code,data} = res.data
            if(code===20000){
                this.tableData=data.tableData
                const order=data.orderData
                const xData=order.date
                const keyArray= Object.keys(order.data[0])
                // 组装series数组
                const series=[]
                // 遍历
                keyArray.forEach(key=>{
                    series.push({
                        name:key,
                        data:order.data.map(item=>item[key]),
                        type:'line'
                    })
                })
                // const option={
                //     xAxis:{
                //         data:xData
                //     },
                //     yAxis:{
                //         legend:{
                //             data:keyArray
                //         }
                //     },
                //     series
                // }
                // 进行赋值
                this.echartData.order.xData=xData
                this.echartData.order.series=series
            //    const E= echarts.init(this.$refs.echarts)
            //    E.setOption(option)


            //    用户图 柱状图
            // const userOption={
            //     legend:{
            //         // 图标文字颜色
            //         textStyle:{
            //             color:"#333",
            //         },

            //     },
            //     grid:{
            //         left:"20%",
            //     },
            //     // 提示框
            //     tooltip:{
            //         trigger:"axis",
            //     },
            //     xAxis:{
            //         type:"category",
            //         data:data.userData.map(item=>item.date),
            //         axisLine:{
            //             lineStyle:{
            //                 color:"#17b3s3",
            //             },
            //         },
            //         axisLabel:{
            //             interval:0,
            //             color:"#333"
            //         }
            //     },
            //     yAxis:[
            //         {type:"value",
            //         axisLine:{
            //             lineStyle:{
            //                 color:"#17b3s3",
            //             },
            //         },
            //         },
            //     ],
            //     color:["#2ec7c9","#b6a2de"],
                // series:[
                //     {
                //         name:'新增用户',
                //         data:data.userData.map(item=>item.new),
                //         type:'bar'
                //     },
                //     {
                //         name:'活跃用户',
                //         data:data.userData.map(item=>item.active),
                //         type:'bar'
                //     }
                // ],
            // } 
            this.echartData.user.xData=data.userData.map(item=>item.date)
            this.echartData.user.series= [
                    {
                        name:'新增用户',
                        data:data.userData.map(item=>item.new),
                        type:'bar'
                    },
                    {
                        name:'活跃用户',
                        data:data.userData.map(item=>item.active),
                        type:'bar'
                    }
                ],
            // const U=echarts.init(this.$refs.userEcharts)
            // U.setOption(userOption)
            // 饼图
        //     const videoOption={
        //         tooltip:{
        //             trigger:"item",
        //         },
        //         color:[
        //             "#0f78f4",
        //             "#dd536b",
        //             "#9462e5",
        //             "#e1bb22",
        //             "#39c362",
        //             "#3ed1cf"
        //         ],
        //         series:[
        //             {
        //                 data:data.videoData,
        //                 // 饼图类型
        //                 type:'pie'
        //             }
        //         ],

        //     }
        //    const V=echarts.init(this.$refs.videoEcharts)
        //     V.setOption(videoOption)
        this.echartData.video.series= [
                    {
                        data:data.videoData,
                        // 饼图类型
                        type:'pie'
                    }
        ]

            }
            console.log(res)
        })
        }
    }
</script>

