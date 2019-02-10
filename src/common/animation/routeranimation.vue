<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'routerAnimation'
}
</script>

<style lang="stylus" scoped>
    .v-enter-active, .v-leave-active
        transition all 0.4s
    .v-enter, .v-leave
        transform translate3d(100%, 0, 0)
</style>
