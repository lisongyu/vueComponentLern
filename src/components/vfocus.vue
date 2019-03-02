<template>
    <div class="demo">
        <input type="text" placeholder="我是自定义指令" v-focus>
    </div>
</template>
<script>
export default {
    directives:{
        focus:{
            inserted:function(el){
                el.focus();
            }
        }
    }
}
</script>
<style>

</style>

