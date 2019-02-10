<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont iconfont-span">&#xe60f;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
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
