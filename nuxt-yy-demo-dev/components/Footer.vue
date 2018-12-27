<template>
  <!-- 底部组件 -->
  <div class="footer">
    <div class="baseText-list">
      <div class="text">下载YY，获取更多精彩！</div>
      <div class="btn"></div>
    </div>
    <img src="~assets/img/logo.png" class="icon" />
  </div>
</template>
<style scoped  lang="sass">
.footer
  z-index: 8;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 116px;
  background: #fff;
  .baseText-list
    // width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    .text
      color: #1d1d1d;
      font-size: 30px;
      font-weight: 700;
    .btn
      width: 158px;
      height: 60px;
      background: url(~assets/img/download.png) center center no-repeat;
      background-size: 158px 60px;
  .icon
    position: absolute;
    left: 0;
    bottom: 94px
    width: 142px;
    height: 120px;
</style>

