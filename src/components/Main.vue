<template>
    <div class="main">
        <my-header>
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
                            <a class="nav-link" href="#quem" style="color: white; font-size: 18px">O que somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#como" style="color: white; font-size: 18px">Como apostar</a>
                        </li>
                    </ul>
                    <a class="navbar-dark" href="/">
                        <router-link v-if="loggedIn" style="margin-right: 50px" :to="{ name: 'logout' }">Logout
                        </router-link>
                        <router-link v-else="loggedIn" style="margin-right: 50px" :to="{ name: 'Login' }">Login
                        </router-link>
                    </a>
                </div>
            </slot>
        </my-header>
        <div class="custom-bc">
        <div class="row mt-5">
            <div class="col"></div>
            <div class="col text-center border-choice">
                <h1>Escolha seu time de coração</h1>
                <select v-model="selectedTime" class="form-control" id="clubs">
                    <option v-for="time in times">{{ time.nome }}</option>
                </select>
                <button v-if="selectedTime" @click.stop.prevent="confirmTime" class="btn btn-primary mt-3">Confirmar</button>
            </div>
            <div class="col">
                <!--                {{selectedTime}} {{selectedPrefixImg}}-->
            </div>
        </div>
        <div class="row mt-3">
            <div class="col"></div>
            <div class="col text-center">
                <img v-if="selectedTime" :src="`../../static/times/${ selectedPrefixImg }.png`"
                     style="max-height: 200px; max-width: 200px" class="img-fluid">
                <!--                {{`../../static/times/${ selectedPrefixImg }.png`}}-->
            </div>
            <div class="col"></div>
        </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from "./MyHeader"
    import Login from "@/components/auth/Login"

    export default {
        name: "Main",
        data() {
            return {
                times: [
                    {id: 1, nome: 'Athletico Paranaense'},
                    {id: 2, nome: 'Atlético Mineiro'},
                    {id: 3, nome: 'Avaí'},
                    {id: 4, nome: 'Bahia'},
                    {id: 5, nome: 'Botafogo'},
                    {id: 6, nome: 'Ceará'},
                    {id: 7, nome: 'Chapecoense'},
                    {id: 8, nome: 'Corinthians'},
                    {id: 9, nome: 'Cruzeiro'},
                    {id: 10, nome: 'CSA'},
                    {id: 11, nome: 'Flamengo'},
                    {id: 12, nome: 'Fluminense'},
                    {id: 13, nome: 'Fortaleza'},
                    {id: 14, nome: 'Goiás'},
                    {id: 15, nome: 'Grêmio'},
                    {id: 16, nome: 'Internacional'},
                    {id: 17, nome: 'Palmeiras'},
                    {id: 18, nome: 'Santos'},
                    {id: 19, nome: 'São Paulo'},
                    {id: 20, nome: 'Vasco da Gama'},
                ],
                selectedTime: '',
            }
        },
        components: {
            Login,
            MyHeader
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            },
            selectedPrefixImg() {
                return this.selectedTime.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim()
            }
        },
        methods: {
            confirmTime() {
                if (confirm(`Deseja confirmar ${this.selectedTime} como seu time do coração?`)) {
                    this.selectedTimeId = id
                } else {
                    this.selectedTime = ''
                }
            }
        }
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

    /*.custom-bc {*/
    /*    background-color: red;*/
    /*    min-height: 100%;*/
    /*}*/

</style>
