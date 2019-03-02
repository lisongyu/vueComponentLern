<template>
     <div class="guessrankname-charts" ref="charts"></div>
</template>
<script>
import echarts from 'echarts';
export default {
     data(){

          return{
               salesRankingsList:[],
                
               barOpt:{
                     ydata: [],
                    left: -120,
                    name: '本期销售',
                    margin: 160,
                    data: [],
                    totalSaleRankings:[],
                    totalSalePriorRankings:[],
                    MOM:[],

                    MOMTrend:[],
                    ajaxUrl:''


                }

          }

     },


     created(){
          this.getBarOther();

     },

     methods:{
           getBarOther(){
                var getUrl = '/api/api/data.json';

                this.$axios.get(getUrl)
                .then(rsp => {
                    
                    this.salesRankingsList=rsp.data.salesRankingsList;
                    for (let i = 0; i < this.salesRankingsList.length; i++) {
                        
                        this.barOpt.data.unshift(this.salesRankingsList[i].totalSalePeriod);
                        this.barOpt.totalSaleRankings.unshift(this.salesRankingsList[i].totalSaleRankings);
                        this.barOpt.totalSalePriorRankings.unshift(this.salesRankingsList[i].totalSalePriorRankings);
                        this.barOpt.MOM.unshift(this.salesRankingsList[i].MOM);
                        this.barOpt.MOMTrend.unshift(this.salesRankingsList[i].MOMTrend);

                        this.barOpt.ydata.unshift((i+1) + '.' + this.salesRankingsList[i].campanyName);

                        //初始化
                        
                    }
                   
                     this.initBar();
                    
                })
                .catch(error => {console.log(error)})
                
     
            },
            initBar(){
                
                  var guessranknameId=this.$refs.charts;
                  
                this.$nextTick(()=> {
                     

                this.drawBar(guessranknameId,this.barOpt);
                })
            
            },
             drawBar(id, optData){
                var self = this;
                var barDataTem = {

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                            shadowStyle: {
                                color: 'rgba(150,150,150,0)',
                            }
                        },
                        formatter: function (params) {
                            var res='';
                         //    if(typeof(optData.totalSalePriorPeriod)!='undefined'){
                         //        //底部提示信息
                         //        var getLen=optData.totalSalePriorPeriod.length;
                         //        var getNum=params[0].name.split('.')[0];
                         //        res = params[0].name.split('.')[1] + '<br/>';
                         //        res+='环比下降金额: '+self.formatMoney(params[0].data)+'<br/>';
                         //        res+='本期销售额: '+self.formatMoney(optData.totalSalePeriod[getLen-getNum])+'<br/>';
                         //        res+='上期销售额: '+self.formatMoney(optData.totalSalePriorPeriod[getLen-getNum])+'<br/>';
                         //        res +='环比下降比率: '+optData.downChange[getLen-getNum]+'%'
                         //    }else{
                                //销售客户排行
                                var getIndex=params[0].dataIndex;

                                var trendContent='';
                                var getLastRank='第'+optData.totalSalePriorRankings[getIndex]+'名';

                                if(optData.MOMTrend[getIndex]>=0){
                                    trendContent+='↑'+optData.MOM[getIndex]
                                }else{
                                    trendContent+='↓'+optData.MOM[getIndex]
                                }
                                if(optData.MOM[getIndex]==''){
                                    trendContent='无';

                                }
                                if(typeof(optData.totalSalePriorRankings[getIndex])=='undefined' ){
                                    getLastRank='无';
                                    trendContent='无';
                                }
                                res+=params[0].name.split('.')[1]+'<br/>';
                                res+='本期销售: '+self.formatMoney(params[0].data)+'<br/>';
                                res+='销售排名: 第'+optData.totalSaleRankings[getIndex]+'名<br/>';
                                res +='上期排名: '+getLastRank+'<br/>';
                                res +='环比趋势: '+trendContent;


                         //    }




                            return res
                        }

                    },
                    xAxis: [
                        {
                            type: 'value',
                            name: '',
                            nameGap: 20,
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#999',
                                    type: 'solid'
                                }
                            },
                            // 分割线设置
                            axisTick: {
                                show: false
                            },


                        }
                    ],
                    yAxis: [
                        {
                            left: optData.left,
                            type: 'category',
                            nameRotate: 0.1,
                            minInterval:100,

                            axisLabel: {
                                margin: optData.margin,
                                formatter: function (val) {
                                    //  取得索引





                                    var getVal=val.substr(0, 10)


                                   //  if(typeof(optData.totalSalePriorPeriod)!='undefined'){

                                   //      return getVal


                                   //  }else{
                                        //排名
                                        var getIndex=val.split('.')[0];
                                        var getLen=optData.MOMTrend.length;

                                        if(optData.MOMTrend[getLen-getIndex]==0||optData.MOM[getLen-getIndex]==0){
                                            getVal+='    {c|--}'

                                        }else if(optData.MOMTrend[getLen-getIndex]==-1){

                                            getVal+='    {b|↓'+Math.abs(optData.MOM[getLen-getIndex])+'}'

                                        }else{
                                            getVal+='    {a|↑'+optData.MOM[getLen-getIndex]+'}'

                                        }

                                        return getVal;

                                   //  }


//                                    return val.substr(0, 10);
                                },

                                rich:{

                                    a:{

                                        color:'#fa4b4b',
                                        fontWeight:'bolder'
                                    },
                                    b:{
                                        color:'#01a362',
                                        fontWeight:'900'
                                    },
                                    c:{
                                        color:'#ffaa00',
                                        fontWeight:'900'
                                    }
                                },
                                align: 'left'
                            },
                            axisTick: {
                                show: false
                            },
                            // y 轴线
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: '#999',
                                    type: 'solid'
                                }

                            },
                            boundaryGap: true,
                            data: optData.ydata,


                        }
                    ],
                    grid: {
                        top: '2%',
                        left: optData.left,
                        right: '50',
                        bottom: '4%',

                        containLabel: true
                    },
                    series: [
                        {
                            axisLine: {show: true},
                            barWidth: '14',
                            barMinHeight: 100,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [2, 2, 2, 2],

                                    color: function (params) {
                                        // build a color map as your need.
                                        var colorList = [
                                            '#5fc7ff', '#56b2ff', '#56b2ff', '#51a6ff', '#50a1fc',
                                            '#4d95fc', '#4f8af1', '#517fe7', '#5476de', '#5869d1'

                                        ];
                                        return colorList[params.dataIndex]
                                    },
                                    label: {

                                        show: true,
                                        position: 'inside'

                                    },
                                    emphasis: {
                                        barBorderColor: 'red',


                                        splitLine: {show: false}
                                    }
                                }
                            },


                            name: optData.name,
                            type: 'bar',
                            data: optData.data
                        }
                    ]
                };
                this.salesChannel = echarts.init(id);
                this.salesChannel.setOption(barDataTem);
            },


     }
    
}
</script>

<style>

.guessrankname-charts{
     margin:0 auto;
     width: 970px;
     height: 300px;
}

</style>


