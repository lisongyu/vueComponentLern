<template>
    <div>

        <router-link to="/">返回</router-link>
        <div ref="wrapbox" id="wrapbox" style="height:1px"></div>

    <vue-better-scroll :style="{'top':getTop}"
    class="wrapper"
    ref="scroll"
    :scrollbar="scrollbarObj"
    :pullDownRefresh="pullDownRefreshObj"
    :pullUpLoad="pullUpLoadObj"
    :startY="parseInt(startY)"
     :listenScroll=true
    @pullingDown="onPullingDown"
    @scroll="initScroll"
    @pullingUp="onPullingUp">
    <ul ref="list" class="list-content">
        <li class="list-item" v-for="item in items" :key="item">{{item}} </li>
    </ul>
    </vue-better-scroll>
        <goTop :flag="flag" @scrollTo="scrollTo"></goTop>

    </div>
</template>

<script>
    import VueBetterScroll from 'vue2-better-scroll';
    import goTop from './goTopiscroll.vue'
    let count = 1;
    export default  {
        data () {
            return {
                // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
                scrollbarObj: {
                    fade: true
                },
                // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
                pullDownRefreshObj: {
                    threshold: 90,
                    stop: 40
                },
                // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
                pullUpLoadObj: {
                    threshold: 0,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                },
                startY: 0,  // 纵轴方向初始化位置
                scrollToX: 0,
                scrollToY: 0,
                scrollToTime: 700,
                items: [],
                getTop: 0,
                flag:false

            }
        },

        components: { VueBetterScroll,goTop },
        created(){

        },
        mounted(){
              setTimeout(()=>{
                  var getTop = this.$refs.wrapbox.getBoundingClientRect().top;


                  this.getTop = parseInt(getTop) + "px";
              },0)




            this.onPullingDown()

        },
        methods: {
            // 滚动到页面顶部
            scrollTo () {
                this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime);
//                this.flag=false;
            },
            initScroll(pos){
                var clientHeight=document.documentElement.clientHeight;
                this.scrollY=Math.abs(Math.round(pos.y));
                if(this.scrollY>clientHeight){
                    this.flag=true;
                }else{
                    this.flag=false;
                }


//         console.log(obj);
            },
            // 模拟数据请求
            getData () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const arr = []
                        for (let i = 0; i < 20; i++) {
                            arr.push(count++)
                        }
                        resolve(arr)
                    }, 1000)
                })
            },
            onPullingDown () {
                // 模拟下拉刷新
                console.log('下拉刷新')
                count = 0
                this.getData().then(res => {
                    this.items = res
                    this.$refs.scroll.forceUpdate(true)
                })
            },
            onPullingUp () {
                // 模拟上拉 加载更多数据
                console.log('上拉加载')
                this.getData().then(res => {
                    this.items = this.items.concat(res)
                    if(count<50){
                        this.$refs.scroll.forceUpdate(true)
                    }else{
                        this.$refs.scroll.forceUpdate(false)
                    }
                })
            }

        }
    }
</script>

<style lang="scss">
    li,ul{
        margin: 0;
        padding:0;
    }
    .wrapper{
        position: fixed;
        bottom: 0px;
        width: 750px;
        margin: 0 auto;
        overflow: hidden;
    }
    li{
        list-style: none;
    }
    .list-item{
        height: 60px;
        line-height: 60px;
        font-size: 36px;
        text-align: center;
    }

</style>