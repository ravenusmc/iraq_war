import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
    deathData: {},
    coalitionDeathData: {},
  },

  getters: {
    formData: state => state.formData,
    deathData: state => state.deathData,
    coalitionDeathData: state => state.coalitionDeathData,
  },

  actions: {

    // This action will build the graphs.
    buildInitialGraphs: ({ commit, dispatch }, { payload }) => {
      dispatch('fetchDeathData', { payload });
      commit('setFormData', payload);
    },

    // This action will get the initial data and then build a graph based on that data
    getFormData: ({ commit, dispatch }, { payload }) => {
      dispatch('fetchCoalitionDeathData', { payload });
      commit('setFormData', payload);
    },

    // This action will get the death data for everything
    fetchDeathData: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/DeathData';
      axios.post(path, payload)
        .then((res) => {
          commit('setDeathData', res.data);
        });
    },

    // This action will get the death data that focus on coalition forces.
    fetchCoalitionDeathData: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/CoalitionDeathData';
      axios.post(path, payload)
        .then((res) => {
          commit('setCoalitionDeathData', res.data);
        });
    },

  },

  mutations: {

    setFormData(state, data) {
      state.formData = data;
    },

    setDeathData(state, data) {
      state.deathData = data;
    },

    setCoalitionDeathData(state, data) {
      state.coalitionDeathData = data;
    },

  },

});
