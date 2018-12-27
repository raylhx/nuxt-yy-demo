<template>
<div class="nav">
  <div class="nav-wrapper">
    <ul class="nav-slide-list">
      <li v-for="(item, index) in data" :key="index">
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
</div>
</template>
<script>
export default {
  props: ['data'],
  data () {
    return {
      closeMenu: false,
    }
  },
  methods:{
    isShow () {
      this.closeMenu = !this.closeMenu
    },
  },
};
</script>
<style lang="scss" scoped>
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
</style>
