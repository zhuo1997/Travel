<template>
  <div class="swiper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in swiperlist" :key="item.id">
            <img :src="item.imgurl" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: true,
        loop: true,
        speed: 2700
      },
      swiperlist: [
        {
          id: '1',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1802/e3/62ce7362ca051d02.jpg_640x200_6db551b7.jpg'
        },
        {
          id: '2',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1801/93/ce59d182aca07102.jpg_640x200_ba03d44c.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
    .swiper
        overflow hidden
        width 100%
        height 0
        padding-bottom 31.25%
        img
            width 100%
</style>
