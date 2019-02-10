<template>
    <div>
        <city-header></city-header>
        <city-search :listData="listData"></city-search>
        <city-list :listhotData="listhotData" :listData="listData" :letter="letter"></city-list>
        <city-rightindex :listData="listData" @change="btnindex"></city-rightindex>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/list'
import CityRightindex from './components/rightindex'
Vue.prototype.$axios = axios
export default {
  name: 'City',
  data () {
    return {
      listhotData: {
        id: '',
        name: '',
        spell: ''
      },
      listData: {
        id: '',
        name: '',
        spell: ''
      },
      letter: ''
    }
  },
  methods: {
    btnindex (key) {
      this.letter = key
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityRightindex
  },
  created () {
    this.$axios.get('/listhot').then(res => {
      if (res.status === 200) {
        this.listhotData = res.data
      }
    }
    )
  },
  mounted () {
    this.$axios.get('/list').then(res => {
      if (res.status === 200) {
        this.listData = res.data.citys
      }
    }
    )
  }
}

</script>

<style>

</style>
