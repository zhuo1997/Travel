<template>
  <div id="app">
    <router-animation>
      <router-view></router-view>
    </router-animation>
  </div>
</template>

<script>
import routerAnimation from 'common/animation/routeranimation'
export default {
  name: 'App',
  components: {
    routerAnimation
  }
}
</script>

<style lang="stylus" scoped>
.router-view
  position: absolute
</style>
