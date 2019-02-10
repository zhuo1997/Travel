<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-recom></home-recom>
    </div>
</template>
<script>
import homeHeader from './components/header'
import homeSwiper from './components/swiper'
import homeIcon from './components/icon'
import homeRecom from './components/recommend'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecom
  }
}
</script>
<style scoped>

</style>
