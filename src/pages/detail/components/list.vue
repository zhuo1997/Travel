<template>
    <div class="list">
        <div class="list-item" v-for="(item, index) in list" :key="index">
            <div class="list-item-con">
                <span class="list-item-icon"></span>
                {{ item.title }}
            </div>
            <div class="list-item-content" v-for="items in item" :key="items.key">
                <div class="list-item-content-left">
                    {{ items.name }} {{ items.info }}
                    {{ items.content }}
                </div>
                <div class="list-item-content-right">
                    {{ items.price }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: ''
  }
}
</script>

<style lang="stylus" scoped>
.list
    // border 1px solid red
    line-height .6rem
    .list-item
        .list-item-con
        // border 1px solid red
            .list-item-icon
                position relative
                display inline-block
                left .1rem
                top .1rem
                width .36rem
                height .36rem
                background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
                margin-right .1rem
                background-size .4rem 3rem
        .list-item-content
            display flex
            .list-item-content-left
                flex 8
                padding-left .2rem
            .list-item-content-right
                text-align right
                flex 2
                padding-right .2rem
</style>
