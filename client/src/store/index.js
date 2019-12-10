import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
    deathData: {},
    coalitionDeathData: {},
    CoalitionDeathsByYear: [],
    IraqiForcesByyear: [],
    civilianDeathsByYear: [],
    enemyDeathsByYear: [],
  },

  getters: {
    formData: state => state.formData,
    deathData: state => state.deathData,
    coalitionDeathData: state => state.coalitionDeathData,
    CoalitionDeathsByYear: state => state.CoalitionDeathsByYear,
    IraqiForcesByyear: state => state.IraqiForcesByyear,
    civilianDeathsByYear: state => state.civilianDeathsByYear,
    enemyDeathsByYear: state => state.enemyDeathsByYear,
  },

  actions: {

    // This action will build the data area
    buildDataArea: ({ dispatch }) => {
      dispatch('fetchDeathsByYear');
    },

    // This action will build the first graph.
    buildInitialGraphs: ({ commit, dispatch }, { payload }) => {
      dispatch('fetchDeathData', { payload });
      commit('setFormData', payload);
    },

    // This action will build the second graph when the application is mounted
    buildInitialGraphsTwo: ({ dispatch }, { payload2 }) => {
      dispatch('fetchCoalitionDeathDataMounted', { payload2 });
      // commit('setFormData', payload);
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

    // This action will get the death data that focus on coalition forces when the
    // application initially loads.
    fetchCoalitionDeathDataMounted: ({ commit }, { payload2 }) => {
      const path = 'http://localhost:5000/CoalitionDeathData';
      axios.post(path, payload2)
        .then((res) => {
          commit('setCoalitionDeathData', res.data);
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

    // This action will get the coalition death data by year.
    fetchDeathsByYear: ({ commit }) => {
      const path = 'http://localhost:5000/CoalitionDeathDataByYear';
      axios.get(path)
        .then((res) => {
          console.log(res.data);
          const coalitionDeaths = res.data[0];
          const iraqiForcesDeaths = res.data[1];
          const civilianDeaths = res.data[2];
          const enemyDeaths = res.data[3];
          commit('setCoalitionDeathsByYear', coalitionDeaths);
          commit('setIraqiForcesByyear', iraqiForcesDeaths);
          commit('setCivilianDeathsByYear', civilianDeaths);
          commit('setEnemyDeathsByYear', enemyDeaths);
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

    setCoalitionDeathsByYear(state, data) {
      state.CoalitionDeathsByYear = data;
    },

    setIraqiForcesByyear(state, data) {
      state.IraqiForcesByyear = data;
    },

    setCivilianDeathsByYear(state, data) {
      state.civilianDeathsByYear = data;
    },

    setEnemyDeathsByYear(state, data) {
      state.enemyDeathsByYear = data;
    },

  },

});
