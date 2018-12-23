<template>
  <section class="container">
    <div class="nav">
      <div class="nav-wrapper">
        <ul class="nav-slide-list">
          <li v-for="(item, index) in navData" :key="index">
            <h2>
              {{item.name}}
            </h2>
          </li>
        </ul>
        <div class="nav-menu">
          <div class="menu-icon">
            <div v-if="false" class="icon close"></div>
            <div v-else class="icon"></div>
          </div>
        </div>
        <div class="menu-box" v-if="false">
          <ul class="">
            <li v-for="(item, index) in navData" :key="index">
              <h2>
                <img src="~assets/img/menu_icon2.png" />
                <span class="text">{{item.name}}</span>
              </h2>
            </li>
          </ul>
          <div class="mask"></div>
        </div>
      </div>
    </div>

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

export default {
  async asyncData () {
    // let { data } = await axios.get('/api/users')
    // return { users: data }
    let { data } = await axios.get('/api/nav')
    return { navData: data }
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
.container .nav {
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
</style>
