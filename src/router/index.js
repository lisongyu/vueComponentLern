import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/index'
import GoTop from '@/components/gotop'
import VueIscroll from '@/components/vueiscroll'
import VueSwiper from '@/components/swiper';
import borderActive from '@/components/borderActive';
import Aaxios from '@/components/axios';
import Echarts from '@/components/echarts';
import Vfocus from '@/components/vfocus';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      meta:{index:0},
      name: "entry",
      component: Entry,
    },
    {
      path: "/gotop",
      meta:{index:1},
      name: "gotop",
      component: GoTop,
    },
      {
          path: "/vueiscroll",
          meta:{index:2},
          name: "vueiscroll",
          component: VueIscroll,
      },
      {
          path: "/swiper",
          meta:{index:3},
          name: "swiper",
          component: VueSwiper,
      },
      {
          path: "/borderActive",
          meta:{index:4},
          name: "borderActive",
          component: borderActive,
      },
    {
      path: "/axios",
      meta:{index:5},
      name: "axios",
      component: Aaxios,
    },
    {
      path: "/echarts",
      meta:{index:6},
      name: "echarts",
      component: Echarts,
    },
    {
      path: "/vfocus",
      meta:{index:7},
      name: "vfocus",
      component: Vfocus,
    }


  ]
})
