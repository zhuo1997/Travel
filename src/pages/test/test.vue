<template>
  <div @click="btn">
    <input type="text" class="inputbtn" v-model="keyworld">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
    <p>1111111111111111111111111111111{{ keyworld }}</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      listData: {
        'A': [
          {
            id: '01',
            name: '安阳',
            spell: 'anyang'
          },
          {
            id: '02',
            name: '安好',
            spell: 'anhao'
          }
        ],
        'B': [
          {
            id: '03',
            name: '宝庆',
            spell: 'baoqing'
          },
          {
            id: '04',
            name: '保安',
            spell: 'baoan'
          }
        ]
      },
      keyworld: '',
      list: ''
    }
  },
  methods: {
    btn () {
      if (this.keyworld) {
        console.log('ok')
      } else {
        console.log('no')
      }
    }
  },
  watch: {
    keyworld () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        console.log('++++++')
        console.log(this.listData)
        console.log(typeof (this.listData))
        for (let i in this.listData) {
          this.listData[i].forEach((value) => {
            console.log(value)
            if (value.spell.indexOf(this.keyworld) > -1 || value.name.indexOf(this.keyworld) > -1) {
              result.push(value)
              console.log(result + '111111111')
            }
          })
        }
        this.list = result
        console.log(this.list + '0000000000000000')
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
.inputbtn
  height 50px
  width 100%
  background #eef
</style>
