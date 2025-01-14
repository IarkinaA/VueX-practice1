import { createStore } from 'vuex'

export default createStore({
  state: {
    cartItems: []
  },
  getters: {
    // выводит данные не изменяя их
    // выводим товар в корзине
    cartItems(state) {
      return state.cartItems
    },
    // выводим количество товара в корзине
    totalItems(state) {
      return state.cartItems.length
    },
    totalPrice(state) {
      return state.cartItems.reduce((a, b) => a + b.price, 0) 
    }

    },
  
  mutations: {
    ADD_ITEM_TO_CART(state, item) {
      state.cartItems.push(item)
    }
  },
  actions: {
    // действия для добавления товара в корзину
    addItem(context, item) {
      context.commit('ADD_ITEM_TO_CART', item)
    }
  },
  modules: {
  }
 
})
