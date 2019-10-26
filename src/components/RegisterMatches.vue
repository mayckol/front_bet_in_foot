<template>
    <div>
        <slider :links="navLinks" :width="300" format="overlay" direction="left" :opacity="0.15"></slider>
        <div class="container">
            <form @submit="checkForm" action="#" @submit.stop.prevent="registerMatches">
                <div class="row text-center border-all p-3 row-hover">
                    <div class="col-2"><p>Jogo 1</p></div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="sendingTeam1"
                                class="form-control" required>
                            <option v-for="(team, index) in teams" :disable="selectedTeam(team.id)"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="visitingTeam1" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <h5>Estádio</h5>
                        <input v-model="stadiumMatch1" type="text" required>
                    </div>
                    <div class="col-sm-6">
                        <h5>Data</h5>
                        <input type="date" masked="true" v-model="dateMatch1" required/>
                    </div>
                </div>
                <div class="row text-center border-all p-3 row-hover">
                    <div class="col-2"><p>Jogo 2</p></div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="sendingTeam2" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="visitingTeam2" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <h5>Estádio</h5>
                        <input v-model="stadiumMatch2" type="text" required>
                    </div>
                    <div class="col-sm-6">
                        <h5>Data</h5>
                        <input type="date" masked="true" v-model="dateMatch2" required/>
                    </div>
                </div>
                <div class="row text-center border-all p-3 row-hover">
                    <div class="col-2"><p>Jogo 3</p></div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="sendingTeam3" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="visitingTeam3" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <h5>Estádio</h5>
                        <input v-model="stadiumMatch3" type="text" required>
                    </div>
                    <div class="col-sm-6">
                        <h5>Data</h5>
                        <input type="date" masked="true" v-model="dateMatch3" required/>
                    </div>
                </div>
                <div class="row text-center border-all p-3 row-hover">
                    <div class="col-2"><p>Jogo 4</p></div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="sendingTeam4" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="visitingTeam4" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <h5>Estádio</h5>
                        <input v-model="stadiumMatch4" type="text" required>
                    </div>
                    <div class="col-sm-6">
                        <h5>Data</h5>
                        <input type="date" masked="true" v-model="dateMatch4" required/>
                    </div>
                </div>
                <div class="row text-center border-all p-3 row-hover">
                    <div class="col-2"><p>Jogo 5</p></div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="sendingTeam5" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-4">
                        <select style="margin-bottom: 15px" v-model="visitingTeam5" class="form-control" required>
                            <option v-for="(team, index) in this.$store.state.teams"
                                    :value="{ id: team.id, text: team.name }">
                                {{ team.name | unsetUndefined }}
                            </option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <h5>Estádio</h5>
                        <input v-model="stadiumMatch5" type="text" required>
                    </div>
                    <div class="col-sm-6">
                        <h5>Data</h5>
                        <input type="date" masked="true" v-model="dateMatch5" required/>
                    </div>
                </div>
                <div class="row pt-3">
                    <div class="col-sm-12 text-right">
                        <button class="btn btn-success" type="submit">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Slider from '@jeremyhamm/vue-slider'

    export default {
        name: "RegisterMatches",
        data() {
            return {
                sendingTeam1: '',
                sendingTeam2: '',
                sendingTeam3: '',
                sendingTeam4: '',
                sendingTeam5: '',
                visitingTeam1: '',
                visitingTeam2: '',
                visitingTeam3: '',
                visitingTeam4: '',
                visitingTeam5: '',
                stadiumMatch1: '',
                stadiumMatch2: '',
                stadiumMatch3: '',
                stadiumMatch4: '',
                stadiumMatch5: '',
                dateMatch1: '',
                dateMatch2: '',
                dateMatch3: '',
                dateMatch4: '',
                dateMatch5: '',
                selected: [],
                navLinks: [
                    {'id': 1, 'text': 'Início', 'url': '/home'},
                    {'id': 2, 'text': 'Permissão de usuários', 'url': '/permissions'},
                    {'id': 3, 'text': 'Logout', 'url': '/logout'}
                ],
            }
        },
        methods: {
            registerMatches() {
                const teams = [
                    {
                        teamA: this.visitingTeam1,
                        teamB: this.sendingTeam1,
                        stadium: this.stadiumMatch1,
                        schedule: this.dateMatch1
                    },
                    {
                        teamA: this.visitingTeam2,
                        teamB: this.sendingTeam2,
                        stadium: this.stadiumMatch2,
                        schedule: this.dateMatch2
                    },
                    {
                        teamA: this.visitingTeam3,
                        teamB: this.sendingTeam3,
                        stadium: this.stadiumMatch3,
                        schedule: this.dateMatch3
                    },
                    {
                        teamA: this.visitingTeam4,
                        teamB: this.sendingTeam4,
                        stadium: this.stadiumMatch4,
                        schedule: this.dateMatch4
                    },
                    {
                        teamA: this.visitingTeam5,
                        teamB: this.sendingTeam5,
                        stadium: this.stadiumMatch5,
                        schedule: this.dateMatch5
                    },
                ]
                this.$store.dispatch('setMatches', {
                    teams: teams
                }).then(response => {
                    alert('Ótimo você cadastrou as partidas da próxima rodada')
                }).catch(error => {
                    console.log(error)
                    this.serverError = error.response.data
                })
            },
            addToSelect(team) {
                console.log(this.selected)
                this.selected.push(team.id)
                console.log(this.selected)
            },
            selectedTeam(id) {
                console.log(this.selected.includes(id))
                return this.selected.includes(id)
            },
            checkForm(e) {
                var counter = 0
                const validate = [
                    this.sendingTeam1,
                    this.sendingTeam2,
                    this.sendingTeam3,
                    this.sendingTeam4,
                    this.sendingTeam5,
                    this.visitingTeam1,
                    this.visitingTeam2,
                    this.visitingTeam3,
                    this.visitingTeam4,
                    this.visitingTeam5,
                ]
                validate.forEach((item) => {
                    for (let i = 0; i < validate.length; i++) {
                        if (item.id === validate[i].id) {
                            counter++
                        }
                    }
                })
                if (counter === 10) return true
                alert('Existe um time participando de mais de uma rodada')
                e.preventDefault();
            }
        },
        components: {
            Slider
        },
        filters: {
            unsetUndefined(value) {
                if (value !== 'Não tenho time preferido') {
                    return value
                }
            }
        },
        computed: {
            teams() {
                return this.$store.getters.filterTeams
            },
        },
        created() {
            this.$store.dispatch('getTeams')
        }
    }
</script>

<style scoped>

    body {
        background-color: grey;
    }

    .border-all {
        border: 1px solid black;
        border-radius: 10px;
    }

    .row-hover:hover {
        background-color: #3b889a;
    }


</style>
