<template>
   <div class="productdetail-nav">
       <ul ref="detailtab">
           <li v-for="(item,index) in titleList" :key="index" @click="changeTarget(index)" :class="{active:item.active}">{{item.text}}</li>
       </ul>
       <div class="productdetail-mask" :style="{'left':leftvalue}"></div>
   </div>


</template>

<script>
    export default  {
        data(){
            return {
                leftvalue:'0',
                titleList:[
                    {'text':'图文详情','targetCom':'productpic','active':1},
                    {'text':'规格参数','targetCom':'productattrs','active':0},
                    {'text':'包装售后','targetCom':'productserve','active':0}
                ]
            }
        },
        methods: {
            changeTarget(index){

            var getUlLeft=parseInt(this.$refs.detailtab.getBoundingClientRect().left);
            var getLeft=event.pageX-event.offsetX-getUlLeft;

            this.leftvalue=getLeft+'px';
           // this.currentView=this.titleList[index].targetCom;

            this.titleList.forEach((item,key)=>{
                this.titleList[key].active=0;
            });
            this.titleList[index].active=1;
        },

        }
    }
</script>

<style lang="scss">
    .productdetail-nav{
        background: #fff;
        height: 100px;
        position: relative;
        left: 0;
        top:0;
    ul{
        display: flex;

        padding: 29px 0;
    }
    li{
        width: 250px;
        height: 42px;
        font-size:30px;
        color:#333;
        text-align: center;
        line-height: 42px;
    }
    .active{
        color: #ff5844;;
    }



    }
    .productdetail-mask{
        position: absolute;
        left: 0;
        bottom:0;
        background:#ff5844;
        width:250px;
        height:4px;
        transition: all 0.2s ease-out;
    }

</style>