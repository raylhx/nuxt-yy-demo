<template>
  <section class="container">
    <div class="nav">
      <div class="nav-wrapper">
        <ul class="nav-slide-list">
          <li v-for="(item, index) in navData" :key="index">
            <h2>
              <nuxt-link :to="{name: 'id', params:{id:item.tag}}">
                {{item.name}}
              </nuxt-link>
            </h2>
          </li>
        </ul>
        <div class="nav-menu">
          <div class="menu-icon">
            <div v-if="closeMenu" class="icon close" @click.stop.prevent="isShow"></div>
            <div v-else class="icon" @click="isShow"></div>
          </div>
        </div>
        <div class="menu-box" v-if="closeMenu">
          <ul class="">
            <li v-for="(item, index) in navData" :key="index" @click.stop.prevent="isShow">
              <h2>
                <nuxt-link :to="{name: 'id', params:{id:item.tag}}">
                  <img src="~assets/img/menu_icon2.png" />
                  <span class="text">{{item.name}}</span>
                </nuxt-link>
              </h2>
            </li>
          </ul>
          <div class="mask" @click.stop.prevent="isShow"></div>
        </div>
      </div>
    </div>
    <div class="main-box">
      <ul class="list">
        <li v-for="(item, index) in listData" :key="index">
          <div class="cover-wrapper">
            <div class="tag"></div>
            <img class="cover" :src="item.url"/>
            <div class="uses">
              <img src="~assets/img/live_icon.png"/>
              <span>{{item.users}}万</span>
            </div>
          </div>
          <h3 class="desc">{{item.name}}</h3>
        </li>
      </ul>
      <div class="tips">
        上YY看直播, 更流畅, 更清晰
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'
import Nav from '~/components/Nav.vue'
import List from '~/components/List.vue'

export default {
  comonents: {
    Nav,
    List
  },
  data () {
    return {
      closeMenu: false
    }
  },
  async asyncData () {
    const res1 = await axios.get('/api/nav')
    const res2 = await axios.get('/api/list/index')
    return {
      navData: res1.data,
      listData: res2.data
    }
  },
  methods: {
    isShow () {
      this.closeMenu = !this.closeMenu
    }
  },
  head () {
    return {
      title: 'YY-全民娱乐的互动直播平台',
      meta: [
        { hid: 'description', name: 'description', content: 'YY致力于打造全民娱乐的互动直播平台，以多样的美女互动、优质的直播内容、极致的互动体验，满足用户音乐、舞蹈、户外等直播及绝地求生、王者荣耀等热门游戏直播的观看需求。' },
        { hid: 'keywords', name: 'keywords', content: 'yy,直播,音乐,舞蹈,户外,脱口秀,二次元,mc,游戏,ASMR,小视频,神曲,吃鸡,购物,电影,绝地求生,王者荣耀' }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~assets/css/index.scss'
</style>
