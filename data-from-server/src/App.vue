<template>
 <div>
  <h3>Задание 3</h3>
  <ul>
    <li v-for="(item, index) in data" :key="index">{{ item }}</li>
  </ul>
  <button @click="getData">Получить данные</button>
 </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';



export default {
  name: 'App',
  computed: {
  ...mapState(['data'])
  },

  methods: {
    ...mapActions(['getData'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
