import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = "http://127.0.0.1:8000/api"
export const store = new Vuex.Store({
    state: {
        selectedComponent: 'FormLogin',
    },
    mutations: {
        changeToRegister: state => {
            state.selectedComponent = 'Register'
        },
        changeToLogin: state => [
            state.selectedComponent = 'FormLogin'
        ]
    }
})
