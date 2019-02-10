<template>
    <div class="header" v-show="showAbs">
        <router-link to="/">
            <span class="iconfont iconfont-span">&#xe60f;</span>
        </router-link>
        <p>详情页面</p>
    </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
        console.log('ok')
      } else {
        this.showAbs = true
        console.log('ok')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    height $headerheight
    background $bgcolor
    text-align center
    font-size .32rem
    line-height $headerheight
    color #fff
    .iconfont-span
        position absolute
        top 0
        left .4rem
        font-size .4rem
        color #fff
</style>
