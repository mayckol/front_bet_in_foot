import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://betinfoot.tst/api';

export const store = new Vuex.Store({
    state: {
        selectedComponent: 'FormLogin',
        token: localStorage.getItem('access_token') || null,
        favoriteTeam: '',
        filter: 'all',
        userData: {},
        teams: [],
        users: [],
        matches: [],
        lastMatches: [],
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        userName(state) {
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
        favoriteTeam(state) {
            return state.userData
        },

        filterTeams(state) {
            return state.teams
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
        changeFavoriteTeam(state, team) {
            state.favoriteTeam = team
        },
        setMatches(state, matches) {
            state.matches = matches
        },
        getTeams(state, teams) {
            state.teams = teams
        },
        getUsers(state, users) {
            state.users = users
        },
        getMatches(state, matches) {
            state.matches = matches
        },
        lastMatches(state, matches) {
            state.lastMatches = matches
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

        getUsers(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            axios.get('/users')
                .then(response => {
                    context.commit('getUsers', response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getMatches(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            axios.get('/matches')
                .then(response => {
                    context.commit('getMatches', response.data)
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

        updatePermissions(context, data) {
            return new Promise((resolve, reject) => {
                console.log(data)
                axios.post('/update-permission', {
                    userId: data.userId,
                    userPermission: data.userPermission,
                })
                    .then(response => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        setMatches(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/set-matches', {
                    matches: data,
                })
                    .then(response => {
                        console.log(response)
                        resolve(response)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },

        getLastMatches(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('/get-last-matches', {
                    teamId: data.teamId,
                })
                    .then(response => {
                        context.commit('lastMatches', response.data)
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        },
    },
})
