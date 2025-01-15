import { createStore } from 'vuex'

export default createStore({
  state: {
    data:[],
  },
  getters: {
  },
  mutations: {
    setData(state, dataItem) {
      state.data = dataItem
    }
  },
  actions: {
    getData(context) {
      setTimeout(() => {
        const dataFromServer = ['data1', 'data2', 'data3'];
        context.commit('setData', dataFromServer);
      }, 1000);
    }
  },
  modules: {
  }
})