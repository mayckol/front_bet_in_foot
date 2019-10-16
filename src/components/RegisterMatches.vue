<template>
    <form action="#" @submit.stop.prevent="registerMatches">
        <div class="row text-center border-all p-3 row-hover">
            <div class="col-2"><p>Jogo 1</p></div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="sendingTeam1" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="visitingTeam1" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12">
                <h5>Descrição</h5>
                <input type="text">
            </div>
        </div>
        <div class="row text-center border-all p-3 row-hover">
            <div class="col-2"><p>Jogo 2</p></div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="sendingTeam2" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="visitingTeam2" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12">
                <h5>Descrição</h5>
                <input type="text">
            </div>
        </div>
        <div class="row text-center border-all p-3 row-hover">
            <div class="col-2"><p>Jogo 3</p></div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="sendingTeam3" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="visitingTeam3" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12">
                <h5>Descrição</h5>
                <input type="text">
            </div>
        </div>
        <div class="row text-center border-all p-3 row-hover">
            <div class="col-2"><p>Jogo 4</p></div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="sendingTeam4" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="visitingTeam4" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12">
                <h5>Descrição</h5>
                <input type="text">
            </div>
        </div>
        <div class="row text-center border-all p-3 row-hover">
            <div class="col-2"><p>Jogo 5</p></div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="sendingTeam5" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-4">
                <select style="margin-bottom: 15px" v-model="visitingTeam5" class="form-control">
                    <option v-for="(team, index) in this.$store.state.teams" :value="{ id: team.id, text: team.name }">
                        {{ team.name }}
                    </option>
                </select>
            </div>
            <div class="col-sm-12">
                <h5>Descrição</h5>
                <input type="text">
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-sm-12 text-right">
                <button class="btn btn-success" type="submit">Cadastrar</button>
            </div>
        </div>
    </form>
</template>

<script>
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
            }
        },
        methods: {
            registerMatches() {
                const teams = [
                    {teamA: this.visitingTeam1, teamB: this.sendingTeam1},
                    {teamA:this.visitingTeam2, teamB: this.sendingTeam2},
                    {teamA:this.visitingTeam3, teamB: this.sendingTeam3},
                    {teamA:this.visitingTeam4, teamB: this.sendingTeam4},
                    {teamA:this.visitingTeam5, teamB: this.sendingTeam5},
                ]
                this.$store.dispatch('setMatches', {
                    teams
                }).then(response => {
                    console.log(response)
                }).catch(error => {
                    console.log(error)
                    this.serverError = error.response.data
                    this.password = ''
                    this.successMessage = ''
                })
            }
        },
        created() {
            return this.$store.dispatch('getTeams')
        }
    }
</script>

<style scoped>

    .border-all {
        border: 1px solid black;
        border-radius: 10px;
    }

    .row-hover:hover {
        background-color: #3b889a;
    }


</style>