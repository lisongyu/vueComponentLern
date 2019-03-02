<template>
    <transition name="fade">
        <div class="goTop" @click="goBack" ref="goTop" v-show="flag"></div>
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


        },
        methods: {
            goBack(){
                this.$emit('scrollTo');
            }



        },
        props:{
            flag:{
                type:Boolean,
                default:false
            }


        }
    }
</script>

<style lang="scss">
    .goTop {
        position: fixed;
        left:50%;
        margin-left: 270px;
        bottom: 220px;
        width: 84px;
        height: 84px;
        background: url("../images/scroll-top.png") no-repeat center center;
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