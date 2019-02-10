<template>
        <div>
            <ul class="list">
                <li class="item"
                v-for="(item,key) in listData"
                :key="item.id" @click="btnindex(key)"
                >{{ key }}</li>
            </ul>
        </div>
</template>

<script>
export default {
  name: 'Rightindex',
  props: {
    listData: ''
  },
  methods: {
    btnindex (key) {
      this.$emit('change', key)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.76rem
    right 0
    bottom 0
    width .4rem
    // border 1px solid blue
    .item
        text-align center
        line-height .4rem
        color $bgcolor
        cursor pointer
</style>
