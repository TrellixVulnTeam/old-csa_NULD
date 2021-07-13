import Vue from 'vue'
import Vuex from 'vuex'

import PlatformData from '@explorelearning/platform-data';
import urls from '@explorelearning/urls';

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

const platData = new PlatformData.State({
  endpoints: {
    // auth: `${urls.getUrls().services}/reflex/auth/claims`,
    auth: `${urls.getUrls().services}/platform/auth/claims/csa`,
    
    login:  `http://localhost:8080/login`,
    logout:  `http://localhost:8080/login`,
  }
})
platData.register(store);

export default store;
