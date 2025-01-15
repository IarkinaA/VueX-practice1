<template>
  <div>
    <button @click="addItem({ id: 1, name: 'Товар', price: 10})">
      Добавить в корзину</button>

      <h2>Корзина покупок</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">{{ item.name }} - {{ item.price }}</li>
      </ul>
      <p>Количество товаров в корзине: {{ totalItems  }}</p>
      <p>Общая стоимость: {{ totalPrice }}</p>
  </div>
   

    
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';


export default {
  name: 'App',
 computed: {
   ...mapState(['cartItems']),
   ...mapGetters(['cartItems', 'totalItems', 'totalPrice']),
  
  },
  methods: {
    ...mapMutations(['ADD_ITEM_TO_CART']),
    ...mapActions(['addItem'])
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
