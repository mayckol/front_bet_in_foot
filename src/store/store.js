import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://www.betinfoot.com/api';

export const store = new Vuex.Store({
    state: {
        selectedComponent: 'FormLogin',
        token: localStorage.getItem('access_token') || null,
        favoriteTeam: '',
        filter: 'all',
        userData: {},
        teams: [],
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        userName(state){
            return state.userData.name
        },
        teamsFiltered(state) {
          if (state.filter === 'all') {
            return state.teams
          } /*else if (state.filter == 'active') {
            return state.teams.filter(todo => !team.completed)
          } else if (state.filter == 'completed') {
            return state.teams.filter(team => team.completed)
          }*/
          return state.teams
        },
        favoriteTeam(state){
          return state.userData
        }
    },
    mutations: {
        changeToRegister: state => {
            state.selectedComponent = 'Register'
        },
        changeToLogin: state => [
            state.selectedComponent = 'FormLogin'
        ],
        retrieveToken(state, token) {
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        },
        clearTodos(state) {
            state.todos = []
        },
        changeFavoriteTeam(state, team){
            state.favoriteTeam = team
        },
        getTeams(state, teams) {
          state.teams = teams
        },
        getUserData(state, userData) {
          state.userData = userData
          state.favoriteTeam = userData.team_id
        },
    },
    actions: {
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                        .then(response => {
                            localStorage.removeItem('access_token')
                            context.commit('destroyToken')
                            resolve(response)

                        })
                        .catch(error => {
                            localStorage.removeItem('access_token')
                            context.commit('destroyToken')
                            reject(error)
                        })
                })
            }
        },
        clearTodos(context) {
            context.commit('clearTodos')
        },
        retrieveToken(context, credentials) {
            return new Promise((resolve, reject) => {
                axios.post('/login', {
                    username: credentials.username,
                    password: credentials.password,
                })
                    .then(response => {
                        const token = response.data.access_token
                        localStorage.setItem('access_token', token)
                        context.commit('retrieveToken', token)
                        resolve(response)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },

        register(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                })
                    .then(response => {
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        getTeams(context) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

          axios.get('/teams')
            .then(response => {
              context.commit('getTeams', response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },

        getUserData(context) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

          axios.get('/user')
            .then(response => {
              console.log(response.data)
              context.commit('getUserData', response.data)
            })
            .catch(error => {
              console.log(error)
            })
        },

        setFavoriteTeam(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/set-favorite-team', {
                    favorite_team: data.favoriteTeam,
                })
                    .then(response => {
                      console.log(data.favoriteTeam)
                      context.commit('changeFavoriteTeam', data.favoriteTeam)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    },
})
