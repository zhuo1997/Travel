<template>
    <div class="con" ref="wrapper">
      <div class="content">
        <div class="banner" ref="bannerscroll" id="scrollele">
          <img class="banner-img" @click="changejudge" src="/static/images/gal2.jpg" alt="">
          <router-link class="icon" to="/" tag="div"><span class="iconfont iconfont-span">&#xe60f;</span></router-link>
          <div class="banner-info">
            <div class="banner-info-letf">
              大连圣亚海洋世界（AAAA景区）
            </div>
            <div class="banner-info-right">
              <span class="iconfont">&#xe631;</span>
              39
            </div>
          </div>
        </div>
        <detail-list :list="list"></detail-list>
      </div>
      <gal-animation>
        <common-gallary :imgurl="imgurl" v-show="judge" @change="sunchangejudge"></common-gallary>
      </gal-animation>
    </div>
</template>

<script>
import commonGallary from 'common/gallary/gallary'
import detailList from '@/pages/detail/components/list'
import galAnimation from 'common/animation/animation'
import Bscroll from 'better-scroll'
export default {
  name: 'detailBanner',
  data () {
    return {
      imgurl: {
        img1: {
          id: '1',
          url: '/static/images/gal1.jpg'
        },
        img2: {
          id: '2',
          url: '/static/images/gal2.jpg'
        },
        img3: {
          id: '3',
          url: '/static/images/gal3.jpg'
        },
        img4: {
          id: '4',
          url: '/static/images/gal4.jpg'
        },
        img5: {
          id: '5',
          url: '/static/images/gal5.jpg'
        },
        img6: {
          id: '6',
          url: '/static/images/gal6.jpg'
        },
        img7: {
          id: '7',
          url: '/static/images/gal7.jpg'
        },
        img8: {
          id: '8',
          url: '/static/images/gal8.jpg'
        },
        img9: {
          id: '9',
          url: '/static/images/gal9.jpg'
        },
        img10: {
          id: '10',
          url: '/static/images/gal10.jpg'
        },
        img11: {
          id: '11',
          url: '/static/images/gal11.jpg'
        }
      },
      list: [
        {
          title: '促销票',
          info1: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥98.0起'
          },
          info2: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥188.0起'
          }
        },
        {
          title: '热销联票',
          info1: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥98.0起'
          },
          info2: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥188.0起'
          }
        },
        {
          title: '一日游',
          info1: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥98.0起'
          },
          info2: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥188.0起'
          },
          info3: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥98.0起'
          },
          info4: {
            name: '【春节优惠】',
            info: ' 大连圣亚海洋世界五馆单人票',
            content: '韩海洋世界',
            price: '￥188.0起'
          }
        }
      ],
      judge: false,
      scroll: ''
    }
  },
  methods: {
    changejudge () {
      this.judge = !this.judge
    },
    sunchangejudge () {
      this.judge = !this.judge
    },
    handleScroll () {
      // const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      this.scroll = document.body.scrollTop
      console.log(document.getElementById(this.scroll))
    },
    menu () {
      this.scroll = document.body.scrollTop
      console.log(this.scroll)
    }
  },
  components: {
    commonGallary,
    detailList,
    galAnimation
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, { click: true })
    window.addEventListener('scroll', this.menu, true)
  },
  destroyed () {
  },
  watch: {
    scrollTop () {
      console.log('11111111111111')
    }
  }
}
</script>

<style lang="stylus" scoped>
.con
  position absolute
  top .86rem
  left 0
  right  0
  bottom 0
  // border 1px solid red
  overflow hidden
  .banner
    overflow hidden
    height 0
    padding-bottom 62.5%
    // border 1px solid blue
    .banner-img
      width 100%
    .banner-info
      position relative
      display flex
      height .8rem
      top -.8rem
      line-height .8rem
      font-size .3rem
      color #eee
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-info-letf
        flex 1
        padding-left .2rem
      .banner-info-right
        padding-right .2rem
    .icon
      position absolute
      top .3rem
      left .3rem
      padding .2rem
      border-radius 50%
      background #333
      color #fff
</style>
