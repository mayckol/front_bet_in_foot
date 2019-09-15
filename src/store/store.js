import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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