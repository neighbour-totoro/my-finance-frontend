import Axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
    results: [],
  },

  getters: {
     get_results: state => {
         return state.results
     }
  },

  mutations: {
     set_results: (state, payload) => {
         state.results = payload;
     },

     add_data: (state, payload) => {
        state.results.push(payload);
      },

  },

  actions: {
    get_data: async (context) => {
        let {data} = await  Axios.get('http://localhost:8081/account');
        context.commit('set_results', data);
      },
      
     set_data: async (context, payload) => {
       await Axios.post('http://localhost:8081/account', payload);
        context.commit('add_data', payload);
      },
    remove_data: async (context, payload) => {
        await Axios.delete('http://localhost:8081/account/', {data:{"id": payload}})
        context.commit('get_results');
    }

  },
});