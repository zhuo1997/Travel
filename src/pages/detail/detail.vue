<template>
    <div>
      <detail-header></detail-header>
      <detail-banner></detail-banner>
    </div>
</template>

<script>
import detailBanner from './components/banner'
import detailHeader from './components/header'
export default {
  name: 'detail',
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>
