<template>
  <!-- 头部组件 -->
  <div class="header">
    <h1 class="head-state">
      <a href="//wap.yy.com" class="yy-logo"></a>
    </h1>
  </div>
</template>
<style scoped lang="sass">
.header
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 97px;
  background: #fd0;
  .head-state
    width: 100%;
    height: 100%;
    padding-left: 20px;
    .yy-logo
      width: 100%;
      height: 100%;
      display: inline-block;
      background: url(//yyweb.yystatic.com/mobile/images/components/w-head/images/icon-logo-3f5e4c2589.png?v=20170916001) left center no-repeat;
      background-size: 328px 36px
</style>
