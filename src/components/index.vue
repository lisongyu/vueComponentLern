<template>
  <div class="component-list">
    <h1>vue组件整理</h1>
    <ul>
      <li>
        <router-link to="/gotop">回到顶部</router-link>
      </li>
      <li>

        <router-link to="/vueiscroll">加载更多使用</router-link>
      </li>
      <li>

        <router-link to="/swiper">轮播图</router-link>
      </li>
      <li>
        <router-link to="/borderActive">底部边框运动</router-link>
      </li>

      <li>
        <router-link to="/axios">Axios请求数据</router-link>
      </li>
       <li>
        <router-link to="/echarts">echarts可视化报表</router-link>
      </li>

       <li>
        <router-link to="/vfocus">自定义指令v-focus</router-link>
      </li>

       
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1, h2 {
  font-weight: normal;
}
.component-list{
  li{
    font-size: 30px;
  }

}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  list-style: none;
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
