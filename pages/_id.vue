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
  name: 'id',
  components: {
    Nav,
    List
  },
  async asyncData ({ params, error }) {
    const res1 = await axios.get('/api/nav')
    const res2 = await axios.get(`/api/list/${params.id}`)
    return {
      navData: res1.data,
      listData: res2.data,
      idx: params.id
    }
  },
  data () {
    return {
      closeMenu: false
    }
  },
  methods: {
    isShow () {
      this.closeMenu = !this.closeMenu
    }
  },
  head () {
    let data = ''
    for (let i = 0, len = this.navData.length; i < len; i++) {
      if (this.navData[i].tag === this.idx) {
        data = this.navData[i]
      }
    }
    return {
      title: `${data.title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${data.desc.description}` },
        { hid: 'keywords', name: 'keywords', content: `${data.desc.keywords}` }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/css/index.scss'
</style>
