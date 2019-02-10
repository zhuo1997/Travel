<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyworld"/>
        </div>
        <div class="search-content" ref="gundong"  v-show="this.keyworld">
          <ul>
            <li class="search-list search-lists" v-for="item in list" :key="item.id" @click="choosecity(item.name)">{{ item.name }}</li>
            <li class="search-list" v-show="hasNodata">暂无匹配数据</li>
          </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    listData: ''
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.gundong, {click: true})
  },
  data () {
    return {
      keyworld: '',
      list: '',
      timer: null
    }
  },
  methods: {
    choosecity (city) {
      this.changecity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changecity'])
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        if (!this.keyworld) {
          this.list = []
          return
        }
        for (let i in this.listData) {
          this.listData[i].forEach((value) => {
            if (value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.search
    height $headerheigh
    background  $bgcolor
    .search-input
        width 96%
        margin .16rem
        padding .1rem 0
        text-align center
.search-content
    position absolute
    top 1.76rem
    right 0
    left 0
    bottom 0
    z-index  1
    background #eee
    .search-list
      background #fff
      line-height .7rem
      padding 0 0 0 .5rem
      border-bottom .02rem solid #eee
    .search-lists
      cursor pointer
</style>
