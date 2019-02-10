<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="list-top">
                <div class="list-header">当前城市</div>
                <div class="list-content">
                    <div class="list-con">
                        {{ this.city }}
                    </div>
                </div>
            </div>
            <div class="list-mid">
                <div class="list-header">热门城市</div>
                <div class="list-content" v-for="item in listhotData" :key="item.id">
                    <div class="list-con"  @click="choosecity(item.name)">
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="list-bot" v-for="(item,key) in listData" :key="item.id" :ref="key">
                <div class=" list-header">{{ key }}</div>
                <div class="list-botcon" v-for="itemtwo in item" :key="itemtwo.id">
                    <div class="listtxt" @click="choosecity(itemtwo.name)">{{ itemtwo.name }}</div>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    listhotData: '',
    listData: '',
    letter: ''
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    choosecity (city) {
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
.list
    position absolute
    top 1.76rem
    left 0
    right  0
    bottom 0
    border 1px solid red
    overflow hidden
    .list-top,.list-mid,.list-bot
        overflow hidden
    .list-header
        border-bottom 1px solid #999
        border-top 1px solid #999
        height .4rem
        line-height .4rem
        text-indent .2rem
        background #eee
    .list-content
        float left
        width 33.33%
        .list-con
            margin .3rem .3rem .15rem .3rem
            padding .1rem
            text-align center
            border 1px solid #ccc
            cursor pointer
    .list-bot
        .list-botcon
            .listtxt
                border-bottom .02rem solid #eee
                padding .2rem
                line-height .4rem
                cursor pointer
                // border 1px solid red
</style>
