import Axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    results: [],
    icons: [],
    types: [{ name: "Доход", name_plural: "Доходы", value: "account-revenue" },
    { name: "Расход", name_plural: "Расходы", value: "account-expense" },
    { name: "Счёт", name_plural: "Счета", value: "account-asset" }]
  },

  getters: {
    get_results: state => {
      return state.results.sort((a, b) => a.name.localeCompare(b.name))
    },
    get_acc_icons: state => {
      return state.icons
    }
  },

  mutations: {
    SET_RESULTS: (state, payload) => {
      state.results = payload;
    },

    ADD_RESULTS: (state, payload) => {
      state.results.push(payload);
    },
    REMOVE_FROM_RESULTS: (state, payload) => {
      const i = state.results.map(item => item.id).indexOf(payload);
      state.results.splice(i, 1);
    },
    UPDATE_RESULT: (state, payload) => {
      const w = state.results.map(item => item.id).indexOf(payload.id)
      state.results[w] = payload
    },
    SET_ICONS: (state, payload) => {
      state.icons = payload;
    },
  },

  actions: {
    get_data: async (context) => {
      let { data } = await Axios.get('http://localhost:8081/account');
      context.commit('SET_RESULTS', data);
    },

    set_data: async (context, payload) => {
      await Axios.post('http://localhost:8081/account', payload);
      context.commit('ADD_RESULTS', payload);
    },
    remove_data: async (context, payload) => {
      await Axios.delete('http://localhost:8081/account/', { data: { "id": payload } })
      context.commit('REMOVE_FROM_RESULTS', payload)
    },
    update_data: async (context, payload) => {
      await Axios.put('http://localhost:8081/account', {
        "id": payload.id,
        "name": payload.name,
        "limit": payload.limit,
        "type": payload.type,
        "icon": payload.icon
      });
      context.commit('UPDATE_RESULT', payload)
    },
    get_icons: async (context) => {
      let { data } = await Axios.get('http://localhost:8081/icon');
      context.commit('SET_ICONS', data);
    },
  }
});