import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formData: {},
    deathData: [
      ['TimeFrame', 'Coalition forces killed', 'Iraq forces killed', 'Civilian kia', 'Enemy kia'],
      ['Jan 2004', 45, 48, 208, 280], ['Feb 2004', 27, 67, 274, 127], ['Mar 2004', 50, 67, 144, 176],
      ['Apr 2004', 83, 71, 243, 828], ['May 2004', 26, 21, 66, 145], ['Jun 2004', 67, 106, 305, 725],
      ['Jul 2004', 40, 79, 194, 390], ['Aug 2004', 95, 102, 143, 973], ['Sep 2004', 89, 102, 310, 841],
      ['Oct 2004', 61, 141, 231, 338], ['Nov 2004', 98, 116, 311, 694], ['Dec 2004', 64, 107, 296, 477],
      ['Jan 2005', 137, 171, 374, 310], ['Feb 2005', 58, 177, 466, 235], ['Mar 2005', 75, 150, 217, 294],
      ['Apr 2005', 60, 213, 351, 241], ['May 2005', 59, 161, 339, 270], ['Jun 2005', 69, 257, 425, 271],
      ['Jul 2005', 77, 271, 693, 286], ['Aug 2005', 54, 166, 888, 349], ['Sep 2005', 81, 212, 612, 365],
      ['Oct 2005', 71, 176, 452, 400], ['Nov 2005', 68, 147, 594, 360], ['Dec 2005', 46, 155, 332, 213],
      ['Jan 2006', 59, 306, 979, 244], ['Feb 2006', 71, 290, 1343, 200], ['Mar 2006', 49, 230, 1487, 276],
      ['Apr 2006', 74, 252, 1349, 462], ['May 2006', 68, 218, 1625, 333], ['Jun 2006', 88, 257, 2094, 355],
      ['Jul 2006', 60, 462, 2264, 373], ['Aug 2006', 72, 324, 2405, 346], ['Sep 2006', 65, 555, 2672, 451],
      ['Oct 2006', 74, 574, 2681, 500], ['Nov 2006', 62, 398, 2929, 526], ['Dec 2006', 79, 484, 3251, 568],
      ['Jan 2007', 99, 441, 3005, 872], ['Feb 2007', 77, 356, 1822, 700], ['Mar 2007', 73, 370, 2144, 584],
      ['Apr 2007', 86, 440, 2472, 537], ['May 2007', 138, 511, 2466, 567], ['Jun 2007', 121, 470, 2099, 640],
      ['Jul 2007', 90, 469, 2251, 546], ['Aug 2007', 63, 375, 2059, 521], ['Sep 2007', 63, 369, 1458, 514],
      ['Oct 2007', 42, 348, 1280, 501], ['Nov 2007', 33, 285, 1034, 323], ['Dec 2007', 34, 233, 987, 386],
      ['Jan 2008', 22, 164, 617, 290], ['Feb 2008', 30, 193, 536, 178], ['Mar 2008', 29, 320, 681, 507],
      ['Apr 2008', 39, 212, 714, 487], ['May 2008', 12, 144, 516, 182], ['Jun 2008', 25, 152, 477, 135],
      ['Jul 2008', 15, 135, 787, 144], ['Aug 2008', 24, 151, 492, 183], ['Sep 2008', 33, 160, 415, 115],
      ['Oct 2008', 20, 108, 418, 157], ['Nov 2008', 17, 86, 363, 150], ['Dec 2008', 16, 123, 338, 106],
      ['Jan 2009', 0, 0, 2, 0],
    ],
    coalitionDeathData: [
      ['TimeFrame', 'Coalition forces killed', 'Iraq forces killed'],
      ['Jan 2004', 13, 5], ['Feb 2004', 6, 0], ['Mar 2004', 7, 4], ['Apr 2004', 10, 4],
      ['May 2004', 1, 0], ['Jun 2004', 2, 2], ['Jul 2004', 6, 1], ['Aug 2004', 18, 5],
      ['Sep 2004', 10, 3], ['Oct 2004', 11, 0], ['Nov 2004', 8, 1], ['Dec 2004', 10, 3],
      ['Jan 2005', 48, 4], ['Feb 2005', 10, 6], ['Mar 2005', 6, 7], ['Apr 2005', 2, 3],
      ['May 2005', 16, 0], ['Jun 2005', 5, 7], ['Jul 2005', 6, 9], ['Aug 2005', 9, 9],
      ['Sep 2005', 13, 0], ['Oct 2005', 6, 9], ['Nov 2005', 10, 2], ['Dec 2005', 6, 4],
      ['Jan 2006', 7, 6], ['Feb 2006', 9, 4], ['Mar 2006', 4, 2], ['Apr 2006', 5, 2],
      ['May 2006', 3, 3], ['Jun 2006', 10, 4], ['Jul 2006', 7, 4], ['Aug 2006', 11, 11],
      ['Sep 2006', 6, 8], ['Oct 2006', 3, 3], ['Nov 2006', 8, 5], ['Dec 2006', 7, 4],
      ['Jan 2007', 13, 7], ['Feb 2007', 4, 3], ['Mar 2007', 5, 2], ['Apr 2007', 8, 3],
      ['May 2007', 5, 1], ['Jun 2007', 10, 5], ['Jul 2007', 8, 2], ['Aug 2007', 25, 4],
      ['Sep 2007', 14, 2], ['Oct 2007', 11, 7], ['Nov 2007', 6, 8], ['Dec 2007', 10, 4],
      ['Jan 2008', 3, 5], ['Feb 2008', 10, 5], ['Mar 2008', 4, 11], ['Apr 2008', 4, 8],
      ['May 2008', 6, 5], ['Jun 2008', 2, 5], ['Jul 2008', 6, 2], ['Aug 2008', 2, 3],
      ['Sep 2008', 13, 7], ['Oct 2008', 7, 3], ['Nov 2008', 11, 6], ['Dec 2008', 6, 5],
      ['Jan 2009', 0, 0],
    ],
    CoalitionDeathsByYear: {
      2005: 855, 2006: 818, 2007: 918, 2008: 281, 2009: 146,
    },
    IraqiForcesByyear: {
      2005: 2254, 2006: 4348, 2007: 4660, 2008: 1942, 2009: 871,
    },
    civilianDeathsByYear: {
      2005: 5732, 2006: 25029, 2007: 23060, 2008: 6343, 2009: 2666,
    },
    enemyDeathsByYear: {
      2005: 3594, 2006: 4622, 2007: 6671, 2008: 2633, 2009: 310,
    },
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
    simpleFormResponse: false,
    gettingSimpleFormResponse: false,
    formResponse: false,
    gettingFormResponse: false,
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
    simpleFormResponse: state => state.simpleFormResponse,
    gettingSimpleFormResponse: state => state.gettingSimpleFormResponse,
    formResponse: state => state.formResponse,
    gettingFormResponse: state => state.gettingFormResponse,
  },

  actions: {

    // This action will build the data area
    // buildDataArea: ({ dispatch }) => {
    //   dispatch('fetchDeathsByYear');
    // },

    // This action will build the inital graph for the deaths by region area.
    // buildInitialDeathsByRegionArea: ({ dispatch }, { payload }) => {
    //   dispatch('fetchDeathsByRegion', { payload });
    // },

    // This action will build the first graph.
    // buildInitialGraphs: ({ commit, dispatch }, { payload }) => {
    //   dispatch('fetchDeathData', { payload });
    //   commit('setFormData', payload);
    // },

    // This action will build the second graph when the application is mounted
    // buildInitialGraphsTwo: ({ dispatch }, { payload2 }) => {
    //   dispatch('fetchCoalitionDeathDataMounted', { payload2 });
    //   // commit('setFormData', payload);
    // },

    // This action will get the initial data and then build a graph based on that data
    getSimpleFormData: ({ dispatch }, { payload }) => {
      dispatch('fetchDeathData', { payload });
      // dispatch('fetchCoalitionDeathData', { payload });
      // commit('setFormData', payload);
    },

    // This action will get the death data for everything
    fetchDeathData: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/DeathData';
      axios.post(path, payload)
        .then((res) => {
          commit('setDeathData', res.data);
          commit('setSimpleFormResponse', true);
          commit('setGettingSimpleFormResponse', false);
        });
    },

    // This action will get the death data that focus on coalition forces when the
    // application initially loads.
    fetchCoalitionDeathDataGraphTwo: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/CoalitionDeathData';
      axios.post(path, payload)
        .then((res) => {
          commit('setCoalitionDeathData', res.data);
          commit('setFormResponse', true);
          commit('setGettingFormResponse', false);
        });
    },

    // This action will get the death data that focus on coalition forces.
    fetchCoalitionDeathData: ({ commit }, { payload }) => {
      console.log(payload);
      const path = 'http://localhost:5000/DeathData';
      axios.post(path, payload)
        .then((res) => {
          commit('setCoalitionDeathData', res.data);
        });
    },

    // This action will get the coalition death data by year.
    // fetchDeathsByYear: ({ commit }) => {
    //   const path = 'http://localhost:5000/CoalitionDeathDataByYear';
    //   axios.get(path)
    //     .then((res) => {
    //       commit('setCoalitionDeathsByYear', res.data[0]);
    //       commit('setIraqiForcesByyear', res.data[1]);
    //       commit('setCivilianDeathsByYear', res.data[2]);
    //       commit('setEnemyDeathsByYear', res.data[3]);
    //     });
    // },

    // This action will fetch deaths by region based on the year that the user
    // entered.
    fetchDeathsByRegion: ({ commit }, { payload }) => {
      const path = 'http://localhost:5000/DeathsByRegion';
      axios.post(path, payload)
        .then((res) => {
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

    setGettingSimpleFormResponse(state, data) {
      state.gettingSimpleFormResponse = data;
    },

    setSimpleFormResponse(state, data) {
      state.simpleFormResponse = data;
    },

    setGettingFormResponse(state, data) {
      state.gettingFormResponse = data;
    },

    setFormResponse(state, data) {
      state.formResponse = data;
    },

  },

});
