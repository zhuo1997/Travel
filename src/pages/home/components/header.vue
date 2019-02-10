<template>
    <div class="header">
        <div class="header-left">
          <span class="iconfont">&#xe60f;</span>
        </div>
        <div class="header-input">
          <span class="iconfont">&#xe628;</span>
          输入
        </div>
        <router-link to="city">
          <div class="header-right">
            {{ this.city }}
            <span class="iconfont">&#xe6aa;</span>
          </div>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState({
      city: 'city'
    })
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
.header
  display flex
  height $headerheight
  line-height $headerheight
  color #fff
  background $bgcolor
  .header-left
    float left
    width 0.6rem
    padding-left 0.4rem
    .iconfont
      font-size 0.4rem
  .header-input
    flex 1
    height 0.66rem
    line-height 0.66rem
    padding-left 0.2rem
    margin 0.1rem 0.2rem
    border-radius 0.1rem
    background #fff
    color #999
    font-size 0.3rem
    .iconfont
      font-size 0.4rem
  .header-right
    float right
    min-width 1.6rem
    padding 0 0 0 0.1rem
    font-size 0.3rem
    color #fff
    .iconfont
      font-size 0.4rem
</style>
