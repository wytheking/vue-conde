<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <navbar></navbar>
    <div class="main media-cancel-style">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import footers from './components/Footer'

export default {
  name: 'App',
  components: {
    navbar,
    footers
  }
}
</script>

<style lang="less">
@import "../static/reset.less";
.main {
  width: 90%;
  max-width: 1400px;
  min-width: 380px;
  margin: 15px auto;
  min-height: 660px;
}
.return-top {
  width: 24px;
  color: gray;
  cursor: pointer;
  text-align: center;
  background-color: #fff;
  border-radius: 12px 0 0 12px;
  padding: 12px 0 12px 5px;
  position: fixed;
  right: 0;
  top: 139px;
  z-index: 20;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}


@media screen and (max-width: 979px) {
  .media-cancel-style {
    width: 100%;
  }
}
</style>
