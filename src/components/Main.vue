<template>
    <!--000c06-->
    <div class="main" :style="{ backgroundColor: userPermission !== 7 ? '#000c06' : 'grey' }">
        <my-header v-if="userPermission !== 7">
            <slot>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-dark" href="/">
                        <img src="../../static/logo5.png" width="170" height="50" alt="" style="margin-right: 50px">
                    </a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <span class="nav-link active" style="padding: 10px"
                                  v-if="userPermission === 1">Usuário</span>
                            <a class="nav-link active" style="color: white; font-size: 18px"
                               v-else-if="userPermission === 4">Usuário PRO</a>
                            <a class="nav-link active" style="color: white; font-size: 18px" v-else>ADM</a>
                        </li>
                    </ul>
                    <a class="navbar-dark" href="/">
                        <router-link v-if="loggedIn" :to="{ name: 'logout' }"><span style="padding: 10px">Logout</span>
                        </router-link>
                        <router-link v-else="loggedIn" :to="{ name: 'Login' }">Login
                        </router-link>
                    </a>
                </div>
            </slot>
        </my-header>
        <div class="custom-bc" v-if="!this.$store.state.favoriteTeam && userPermission !== 7">
            <div class="row mt-5">
                <div class="col"></div>
                <div class="col text-center border-choice">
                    <h1>Escolha seu time de coração</h1>
                    <select style="margin-bottom: 15px" v-model="selectedTeam" class="form-control">
                        <option v-for="(team, index) in this.$store.state.teams"
                                :value="{ id: team.id, text: team.name }">
                            {{ team.name }}
                        </option>
                    </select>
                    <img v-if="selectedTeam.text !== 'Não tenho time preferido' && selectedTeam.text"
                         :src="`../../static/Times/${ selectedPrefixImg }.png`"
                         style="max-height: 200px; max-width: 200px" class="img-fluid"><br/>
                    <h1>{{selectedTeam.text}}</h1>
                    <button v-if="selectedTeam.text" @click.stop.prevent="confirmTime" class="btn btn-success mt-3">
                        Confirmar
                    </button>
                </div>
                <div class="col">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col"></div>
                <div class="col text-center">
                </div>
                <div class="col"></div>
            </div>
        </div>
        <div v-if="userPermission !== 7" class="row text-center content-client custom-bc img-fluid"
             style="background-image: url(../../static/fla.png)">
            <div class="col" style="margin-top: 50px">
                <h1 style="margin-bottom: 30px">Jogos da rodada para aposta</h1>
                <div class="container">
                    <form action="#">
                        <departures v-for="departure in matches" :departure="departure"></departures>
                        <button type="submit" class="btn btn-black mt-5" style="font-size: 30px">Apostar</button>
                    </form>
                </div>
            </div>
        </div>
        <div v-else>
            <slider :links="navLinks" :width="300" format="overlay" direction="left" :opacity="0.15"></slider>
            <div class="container text-center pb-5">
                <div class="row">
                    <div class="col mt-5">
                        <h1>Seja bem vindo {{ user }}</h1>
                        <p>Para acessar o painel de opções clique no botão ao lado esquerdo</p>
                    </div>
                </div>
                <div v-if="matchs" class="col">
                    <register-matches></register-matches>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from "./MyHeader"
    import Login from "@/components/auth/Login"
    import Departures from "./Departures";
    import Slider from '@jeremyhamm/vue-slider'
    import RegisterMatches from "@/components/RegisterMatches"

    export default {
        name: "Main",
        data() {
            return {
                selectedTeam: '',
                departures: [
                    {
                        visitingTeam: 'Goiás',
                        homeTeam: 'Botafogo',
                        description: 'QUA 09/10/2019 ENGENHÃO 19:15'
                    },
                    {
                        visitingTeam: 'Internacional',
                        homeTeam: 'CSA',
                        description: 'QUA 09/10/2019 REI PELÉ 19:15'
                    },
                    {
                        visitingTeam: 'Chapecoense',
                        homeTeam: 'Fortaleza',
                        description: 'QUA 09/10/2019 CASTELÃO (CE) 20:30'
                    },
                    {
                        visitingTeam: 'Ceará',
                        homeTeam: 'Grêmio',
                        description: 'QUA 09/10/2019 CENTENÁRIO 21:00'
                    },
                    {
                        visitingTeam: 'São Paulo',
                        homeTeam: 'Bahia',
                        description: 'QUA 09/10/2019 FONTE NOVA 21:00'
                    },
                ],
                matchs: false,
                registerPro: false,
                navLinks: [
                    {'id': 1, 'text': 'Cadastrar nova rodada', 'url': '/register-matches'},
                    {'id': 2, 'text': 'Permissão de usuários', 'url': '/permissions'},
                    {'id': 3, 'text': 'Logout', 'url': '/logout'}
                ],
                /*<router-link v-if="loggedIn" :to="{ name: 'logout' }"><span style="padding: 10px">Logout</span>
                                        </router-link>*/
            }
        },
        components: {
            Departures,
            Login,
            MyHeader,
            Slider,
            RegisterMatches
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            },
            selectedPrefixImg() {
                if (!this.selectedTeam) {
                    return
                }
                return this.selectedTeam.text.replace(/ /g, "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            },
            teamColors() {
                switch (this.$store.state.userData.team_id) {
                    case 13:
                        return ['black', 'red']
                        break

                }
            },
            user() {
                return this.$store.getters.userName
            },
            userPermission() {
                return this.$store.state.userData.permission
            },
            matches() {
                return this.$store.state.matches
            }
        },
        methods: {
            confirmTime() {

                if (this.selectedTeam.text === 'Não tenho time preferido') {
                    if (!confirm('Não possui time preferido ?')) {
                        this.selectedTeam.text = ''
                    } else {
                        this.$store.dispatch('setFavoriteTeam', {
                            favoriteTeam: this.selectedTeam.id,
                        }).then(response => {
                        }).catch(error => {
                            console.log(error)
                            this.serverError = error.response.data
                            this.successMessage = ''
                        })
                    }
                } else if (!confirm(`Deseja confirmar ${this.selectedTeam.text} como seu time do coração?`)) {
                    this.selectedTeam.text = ''
                } else {
                    this.$store.dispatch('setFavoriteTeam', {
                        favoriteTeam: this.selectedTeam.id,
                    }).then(response => {
                        console.log(response)
                    }).catch(error => {
                        console.log(error)
                    })
                }
            },
        },
        created() {
            this.$store.dispatch('getTeams')
            this.$store.dispatch('getUserData')
            this.$store.dispatch('getMatches')
        },
    }
</script>

<style scoped>

    h1, p {
        color: white;
    }

    .border-choice {
        border: 1px solid white;
        padding: 10px;
    }


    .custom-bc::before {
        content: "";
        opacity: 0.3;
    }

    .custom-bc {
        width: 100%;
        min-height: 100vh;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;

    }

    .btn-black {
        background-color: #000000;
        color: white;
        border-radius: 10px;
    }

    .btn-black:hover {
        background-color: #8a0001;
        color: white;
        border-radius: 10px;
    }

    .navbar-dark a {
        color: white;
        text-decoration: none;
    }

    .custon-span:hover {
        background-color: #22253b;
        border-radius: 10px;
    }

</style>
