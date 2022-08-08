// mock模拟数据
import Mock from 'mockjs'
// 图标数据
let List=[]
export default{
    getStatisticalData:()=>{
        // mock.random.float产生100到8000之间保留小数，最小0位最大0 位
        for(let i=0;i<7;i++){
            List.push(
                Mock.mock({
                    oppo:Mock.Random.float(100,8000,0,0),
                    vivo:Mock.Random.float(100,8000,0,0),
                    iPhone:Mock.Random.float(100,8000,0,0),
                    mi:Mock.Random.float(100,8000,0,0),
                    三星:Mock.Random.float(100,8000,0,0),
                    meizu:Mock.Random.float(100,8000,0,0),
                    
                })
            )
        }
        return{
            code:20000,
            data: {
                // 饼图
                videoData:[
                    {
                        name:'mi',
                        value:2999
                    },
                    {
                        name:'oppo',
                        value:1999
                    },
                    {
                        name:'iPhone',
                        value:5999
                    },
                    {
                        name:'vivo',
                        value:3999
                    },
                    {
                        name:'三星',
                        value:4266
                    },
                    {
                        name:'meizu',
                        value:3666
                    }
                   
                ],
                // 柱状图
                userData: [
                    {
                        date:'周一',
                        new:5,
                        active:200
                    },
                    {
                        date:'周二',
                        new:9,
                        active:500
                    },
                    {
                        date:'周三',
                        new:10,
                        active:600
                    },
                    {
                        date:'周四',
                        new:11,
                        active:550
                    },
                    {
                        date:'周五',
                        new:5,
                        active:990
                    },
                    {
                        date:'周六',
                        new:45,
                        active:589
                    },
                    {
                        date:'周日',
                        new:52,
                        active:369
                    }
                ],
                // 折线图
                orderData:{
                    date:['20191001','20191002','20191003','20191004','20191005','20191006','20191007'],
                    data: List
                },
                tableData:[
                    {name:'oppo',
                    todayBuy:500,
                    monthBuy:3500,
                    totalBuy:22000    
                    },
                    {name:'mi',
                    todayBuy:400,
                    monthBuy:2000,
                    totalBuy:30000    
                    },
                    {name:'iPhone',
                    todayBuy:123,
                    monthBuy:456,
                    totalBuy:78900    
                    },
                    {name:'meizu',
                    todayBuy:258,
                    monthBuy:5648,
                    totalBuy:32540    
                    },
                    {name:'三星',
                    todayBuy:564,
                    monthBuy:5698,
                    totalBuy:36872    
                    },
                    {name:'vivo',
                    todayBuy:236,
                    monthBuy:4596,
                    totalBuy:56975    
                    }

                ]
            }
        }
    }
}