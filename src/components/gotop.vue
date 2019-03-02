<template>
  <div>
    <h2 class="maintitle">我是回到顶部组件</h2>
    <div style="height: 2000px">我是里边的内容</div>
    <goTop></goTop>
  </div>
</template>

<script>
import goTop from "./gotopC.vue";

export default {
  data() {
    return {};
  },
  components: {
    goTop
  },
  methods: {}
};
</script>

<style lang="scss">
.maintitle {
  font-size: 28px;
}
</style>
