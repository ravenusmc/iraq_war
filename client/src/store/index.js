import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
    coalitionDeathData: {},
  },

  getters: {
    formData: state => state.formData,
    coalitionDeathData: state => state.coalitionDeathData,
  },

  actions: {

    // This action will get the initial data and then build a graph based on that data
    getFormData: ({ commit, dispatch }, { payload }) => {
      dispatch('fetchCoalitionDeathData', { payload });
      commit('setFormData', payload);
    },

    // This action will get the coalition death data
    fetchCoalitionDeathData: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/CoalitionDeathData';
      axios.post(path, payload)
        .then((res) => {
          console.log(res.data);
          commit('setCoalitionDeathData', res.data);
        });
    },

  },

  mutations: {

    setFormData(state, data) {
      state.formData = data;
    },

    setCoalitionDeathData(state, data) {
      state.coalitionDeathData = data;
    },

  },

});
