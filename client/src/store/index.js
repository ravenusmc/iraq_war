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
    deathsByRegion: [['Region', 'Deaths'], ['MNF-W', 336], ['MND-N', 178],
      ['MND-BAGHDAD', 161], ['MND-C', 117], ['MND-SE', 51], ['MND-S', 10],
      ['MND-NE', 0]],
    regionResponse: false,
    gettingResponseRegion: false,
    MNDBaghdadDeaths: 161,
    MNDWestDeaths: 336,
    MNDNDeaths: 178,
    MNDNEDeaths: 0,
    MNDCDeaths: 117,
    MNDSEDeaths: 51,
  },

  getters: {
    formData: state => state.formData,
    deathData: state => state.deathData,
    coalitionDeathData: state => state.coalitionDeathData,
    CoalitionDeathsByYear: state => state.CoalitionDeathsByYear,
    IraqiForcesByyear: state => state.IraqiForcesByyear,
    civilianDeathsByYear: state => state.civilianDeathsByYear,
    enemyDeathsByYear: state => state.enemyDeathsByYear,
    deathsByRegion: state => state.deathsByRegion,
    regionResponse: state => state.regionResponse,
    gettingResponseRegion: state => state.gettingResponseRegion,
    MNDBaghdadDeaths: state => state.MNDBaghdadDeaths,
    MNDWestDeaths: state => state.MNDWestDeaths,
    MNDNDeaths: state => state.MNDNDeaths,
    MNDNEDeaths: state => state.MNDNEDeaths,
    MNDCDeaths: state => state.MNDCDeaths,
    MNDSEDeaths: state => state.MNDSEDeaths,
  },

  actions: {

    // This action will build the data area
    buildDataArea: ({ dispatch }) => {
      dispatch('fetchDeathsByYear');
    },

    // This action will build the inital graph for the deaths by region area.
    buildInitialDeathsByRegionArea: ({ dispatch }, { payload }) => {
      dispatch('fetchDeathsByRegion', { payload });
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

    // This action will fetch deaths by region based on the year that the user
    // entered.
    fetchDeathsByRegion: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/DeathsByRegion';
      axios.post(path, payload)
        .then((res) => {
          console.log(res.data);
          res.data.forEach(([key, value]) => {
            if (key === 'MND-BAGHDAD') {
              commit('setMNDBaghdadDeaths', value);
            } else if (key === 'MNF-W') {
              commit('setMNDWestDeaths', value);
            } else if (key === 'MND-N') {
              commit('setMNDNDeaths', value);
            } else if (key === 'MND-NE') {
              commit('setMNDNEDeaths', value);
            } else if (key === 'MND-C') {
              commit('setMNDCDeaths', value);
            } else if (key === 'MND-SE') {
              commit('setMNDSEDeaths', value);
            }
          });
          res.data.sort((a, b) => b[1] - a[1]);
          const regionResponse = true;
          commit('setDeathsByRegion', res.data);
          commit('setRegionResponse', regionResponse);
          commit('setGettingResponseRegion', false);
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

    setDeathsByRegion(state, data) {
      state.deathsByRegion = data;
    },

    setGettingResponseRegion(state, data) {
      state.gettingResponseRegion = data;
    },

    setRegionResponse(state, data) {
      state.regionResponse = data;
    },

    setMNDBaghdadDeaths(state, data) {
      state.MNDBaghdadDeaths = data;
    },

    setMNDWestDeaths(state, data) {
      state.MNDWestDeaths = data;
    },

    setMNDNDeaths(state, data) {
      state.MNDNDeaths = data;
    },

    setMNDNEDeaths(state, data) {
      state.MNDNEDeaths = data;
    },

    setMNDCDeaths(state, data) {
      state.MNDCDeaths = data;
    },

    setMNDSEDeaths(state, data) {
      state.MNDSEDeaths = data;
    },

  },

});
