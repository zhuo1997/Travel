<template>
    <div class="icon">
        <div class="con" v-for="item in iconlist" :key="item.id">
            <div class="icon-imgcon">
                <img class="icon-img" :src="item.imgurl" alt="">
            </div>
            <p class="icon-desc">{{ item.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {
      iconlist: [
        {
          id: '01',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
          desc: '景点门票'
        },
        {
          id: '02',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        },
        {
          id: '03',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        },
        {
          id: '04',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        },
        {
          id: '05',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        },
        {
          id: '06',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '泡温泉'
        },
        {
          id: '07',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '动植园'
        },
        {
          id: '08',
          imgurl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
          desc: '一日游'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.icon
    overflow hidden
    height 0
    padding-bottom 50%
    background #666
    .con
        position relative
        float left
        background #fff
        height 0
        width 25%
        padding-bottom 25%
        .icon-imgcon
            position absolute
            margin .2rem
            width 100%
            top 0
            left -.2rem
            bottom .4rem
            // background yellow
            .icon-img
                display block
                height 100%
                margin 0 auto
        .icon-desc
            position absolute
            text-align center
            // background pink
            bottom 0
            width 100%
            line-height .4rem
</style>
