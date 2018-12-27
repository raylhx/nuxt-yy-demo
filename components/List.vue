<template>
<div class="main-box">
  <ul class="list">
    <li v-for="(item, index) in list" :key="index">
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
</template>
<script>
export default {
  props: ['list']
}
</script>

<style lang="scss" scoped>
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
