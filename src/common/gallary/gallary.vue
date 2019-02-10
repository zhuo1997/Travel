<template>
    <div class="gallary" @click="sunchangejudge">
        <div class="swiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in imgurl" :key="index">
                <img :src='item.url'>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgurl: ''
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        loop: true,
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    sunchangejudge () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container
    overflow inherit
.gallary
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    display flex
    flex-direction column
    justify-content center
    background #000
    .swiper
        // overflow hidden
        height 0
        padding-bottom 70%
        background #000
        .swiper-pagination
            bottom -.4rem
            color #fff
</style>
