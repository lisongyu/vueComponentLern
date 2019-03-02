<template>
  <transition name="fade">
    <div class="goTop" @click="goBack" ref="goTop" v-show="show"></div>
  </transition>
</template>
<script>
  export default  {
    data(){
      return {
        show:false

      }

    },
    mounted(){
      var that=this;

      that.getInit();

    },
    methods: {

      getInit(){
        var clientHeight = document.documentElement.clientHeight;
        window.onscroll=()=>{
            var osTop=document.documentElement.scrollTop || document.body.scrollTop;
          if(osTop >= clientHeight){
            this.show=true
          }else{
            this.show=false
          }


        }
      },
      goBack(){
        document.documentElement.scrollTop=document.body.scrollTop = 0
      }
    }
  }
</script>

<style >
  .goTop {
    position: fixed;
    left:50%;
    margin-left: 270px;
    bottom: 220px;
    width: 84px;
    height: 84px;
    background:url("../images/scroll-top.png") no-repeat center center;
    background-size: cover;
    z-index: 99;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
