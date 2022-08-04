import {createStore} from 'vuex'
import axios from "axios";


const store = createStore({
    state: {
      user: {
        data: {},
        role: '',
        token: sessionStorage.getItem('TOKEN')
      },

      admin: {
        data: {},
        role: '',
        token: sessionStorage.getItem('ADMINTOKEN')
      }
    },
    getters: {
      user: (state) => {
        return state.user.data
      },
      admin: (state)=>{
        return state.admin.data
      }
    },
    actions: {
      async register({commit}, user) {
        return await axios.post('http://127.0.0.1:8000/api/register', user)
          .then(({data}) => {
            commit('setUser', data.user);
            commit('setToken', data.token)
            return data;
          })
      },

      async login({commit}, user){
        return await axios.post('http://127.0.0.1:8000/api/login', user)
        .then(({data})=>{
          commit('setUser', data.user);
          commit('setToken', data.token)
          commit('setRole', data.role)
          return data
        })
      },

     async adminLogin({commit}, user){
      return await axios.post('http://127.0.0.1:8000/api/admin/login', user)
      .then(({data})=>{
        commit('setAdmin', data.user)
        commit('setAdminToken', data.token)
        commit('setAdminRole', data.role)
        return data
      })
     },

     async adminLogout({commit}) {
      return await axios.post('http://127.0.0.1:8000/api/admin/adminLogout')
        .then(response => {
          commit('adminLogout')
          return response;
        })
    },

     async logout({commit}) {
        return await axios.post('http://127.0.0.1:8000/api/logout')
          .then(response => {
            commit('logout')
            return response;
          })
      },
    },
    mutations: {

        adminLogout: state=>{
          state.admin.data = {};
            state.admin.token = null
            sessionStorage.removeItem("ADMINTOKEN");
        },

        logout: state=>{
            state.user.data = {};
            state.user.token = null
            sessionStorage.removeItem("TOKEN");
        },
       
        setUser: (state, user) => {
          state.user.data = user;
        },
        
        setAdmin: (state, admin) => {
          state.admin.data = admin;
        },

        setToken: (state, token) => {
          state.user.token = token;
          sessionStorage.setItem('TOKEN', token);
        },

        setAdminToken: (state, token) => {
          state.admin.token = token;
          sessionStorage.setItem('ADMINTOKEN', token);
        },

        setRole: (state, role)=>{
          state.user.role = role;
        },

        setAdminRole: (state, role)=>{
          state.admin.role = role;
        }
    },
    modules: {}
})

export default store;