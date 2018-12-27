<template>
  <section class="container">
    <Nav :data="navData"></Nav>
    <List :list="listData"></List>
    <!-- <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul> -->
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
  async asyncData () {
    let [data, list] = await Promise.all([
      axios.get('/api/nav'),
      axios.get('/api/list/index')
    ])
    return {
      navData: data,
      listData: list
    }
  },
  head () {
    return {
      title: 'YY-全民娱乐的互动直播平台'
    }
  }
}
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}

</style>
