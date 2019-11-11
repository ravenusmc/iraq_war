import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
  },

  getters: {
    formData: state => state.formData,
  },

  actions: {

    // This action will get the initial data and then build a graph based on that data
    getFormData: ({ commit }, { payload }) => {
      console.log('hi');
      console.log({ payload });
      commit('setFormData', payload);
    },

    // fetchGraphData: ({})

  },

  mutations: {

    setFormData(state, data) {
      state.formData = data;
    },

  },

});
