<template>
  <section class="container">
    <!-- <div class="nav">
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
                <nuxt-link :to="{name: 'id', params:{id:index}}">
                  <img src="~assets/img/menu_icon2.png" />
                  <span class="text">{{item.name}}</span>
                </nuxt-link>
              </h2>
            </li>
          </ul>
          <div class="mask" @click.stop.prevent="isShow"></div>
        </div>
      </div>
    </div> -->
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
    <!-- <Nav :info="1"></Nav> -->
    <!-- <List :list="listData"></List> -->
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
  data () {
    return {
      closeMenu: false
    }
  },
  async asyncData () {
    // let {data, list} = await Promise.all([
    //   axios.get('/api/nav'),
    //   axios.get('/api/list/index')
    // ])
    // return {
    //   navData: data,
    //   listData: list
    // }
    let res1 = await axios.get('/api/nav')
    let res2 = await axios.get('/api/list/index')
    console.log(res1)
    return {
      navData: res1,
      listData: res2
    }
  },
  methods: {
    isShow () {
      this.closeMenu = !this.closeMenu
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
.nav {
  z-index: 8;
  position: fixed;
  top: 97px;
  left: 0;
  width: 100%;
  height: 68px;
  background: #fff;
  .nav-wrapper{
    position: relative;
    width: 100%;
    height: 100%;
    .nav-slide-list{
      // width:
      width: 100%;
      height: 100%;
      overflow-x: auto;
      font-size: 0;
      white-space: nowrap;
      padding: 0 5px 0 10px;
      li{
        display: inline-block;
        padding-right: 66px;
        font-size: 30px;
        line-height: 66px;
        color: #999;
        &.active{
          color: #3a3a3a;
          h2{
            &::after{
              position: absolute;
              left: 50%;
              content: '';
              background-color: #fd0;
              transform: translateX(-50%);
              bottom: -1PX;
              border-radius: 1.5px;
              height: 6px;
              width: 50px;
            }
          }
        }
        h2{
          position: relative;
          font-weight: normal;
        }
      }
    }
    .nav-menu{
      position: absolute;
      right: 0;
      top: 15px;
      background: #fff;
      .menu-icon{

        padding-right: 20px;
        .icon{
          width: 32px;
          height: 32px;
          background: url(~assets/img/menu_icon.png) center center no-repeat;
          background-size: 32px 32px;
          &.close{
            background: url(~assets/img/menu_close.png) center center no-repeat;
            background-size: 32px 32px;
          }
          &::before{
            position: relative;
            display: block;
            content: '';
            background: -webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,#fff));
            top: -6px;
            right: 40px;
            width: 40px;
            height: 50px;
          }
        }
      }
    }
    .menu-box{
      position: relative;
      width: 100%;
      height: 780px;
      padding-top: 60px;
      // background-color: rgba(0,0,0, 0.8);
      background-color: rgba(244,244,244, 0.95);
      ul{
        font-size: 0;
        height: 100%;
        li{
          float: left;
          width: 33.3333%;
          margin-bottom: 62px;
          // height: 96px;
          h2{
            font-weight: normal;
            img{
              display: block;
              margin: 0 auto;
              width: 71px;
              height: 67px;
            }
            span.text{
              display:block;
              margin: 0 auto;
              margin-top: 20px;
              text-align: center;
              font-size: 28px;
              color: #1d1d1d;
            }
          }
        }
      }
      .mask{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.6);
      }
    }
  }
}
.main-box{
  width: 100%;
  height: 100%;
  padding-top: 165px;
  ul.list{
    margin-bottom: 56px;
    height: auto;
    background: #fff;
    overflow: auto;
    li{
      float: left;
      width: 50%;
      padding-right: 10px;
      margin-bottom: 34px;
      &:nth-child(even){
        padding-right: 0px;
      }
      .cover-wrapper{
        position: relative;
        margin-bottom: 10px;
        width: 100%;
        height: 336px;
        .cover{
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .uses{
          z-index: 2;
          position: absolute;
          bottom: 8px;
          left: 20px;
          img{
            vertical-align: middle;
            width: 27px;
            height: 27px;
          }
          span{
            vertical-align: middle;
            color: #fff;
            font-size: 26px;
            font-weight: bold;
            white-space: 1px;
          }
        }
      }
      h3.desc{
        padding-left: 20px;
        font-size: 26px;
        line-height: 28px;
        font-weight: 600;
        color: #3a3a3a;
      }
    }
  }
  .tips{
    position: relative;
    padding-bottom: 200px;
    text-align: center;
    color: #999;
    &::after{
      content: "";
      display: block;
      position: absolute;
      background: url(//yyweb.yystatic.com/mobile/images/components/w-baseText/images/line-a000c4b8a0.png) center center no-repeat;
      background-size: cover;
      width: 62px;
      height: 65px;
      right: 160px;
    }
  }
}
</style>
