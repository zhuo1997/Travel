<template>
    <div class="recom">
        <div class="recom-top">
            热销推荐
        </div>
        <div class="recom-bot" v-for="item in recomlist" :key="item.id">
            <router-link class="recom-bot-con" :to="/detail/ + item.id">
                <div class="recom-bot-left">
                    <img class="recom-bot-img" :src="item.imgurl">
                </div>
                <div class="recom-bot-right">
                    <strong>{{ item.name }}</strong>
                    <p>{{ item.text }}</p>
                    <div>查看详情</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Recom',
  data () {
    return {
      recomlist: [
        {
          id: '01',
          imgurl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          name: '故宫',
          text: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '02',
          imgurl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          name: '大连圣亚海洋世界',
          text: '浪漫大连首站，浪漫的海洋主题乐园'
        },
        {
          id: '03',
          imgurl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          name: '故宫',
          text: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '04',
          imgurl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          name: '故宫',
          text: '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          id: '05',
          imgurl: 'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_140x140_73fda71d.jpg',
          name: '故宫',
          text: '东方宫殿建筑代表，世界宫殿建筑典范'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.recom
 .recom-top
    overflow hidden
    width 100%
    height 0
    padding-bottom 10%
    line-height .8rem
    text-indent .2rem
    background #eee
 .recom-bot
    overflow hidden
    width 100%
    height 0
    padding-bottom 30%
    .recom-bot-con
        .recom-bot-left
            float left
            width 30%
            .recom-bot-img
                width 85%
                margin .2rem .2rem
        .recom-bot-right
            position relative
            float left
            width 69%
            height 0
            padding-bottom 28%
            strong,p,div
                display block
                position absolute
                left .2rem
            strong
                top .3rem
                font-weight bolder
                color black
                font-size .32rem
            p
                top .8rem
                color #999
            div
                overflow hidden
                bottom .2rem
                width 25%
                height 0
                padding-bottom 10%
                line-height .56rem
                text-align center
                color #fff
                background #156
</style>
