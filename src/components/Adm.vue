<template>
    <div id="app">
        <slider :links="navLinks" :width="300" format="overlay" direction="left" :opacity="0.15"></slider>
        <div class="container text-center">
            <div class="row">
                <div class="col mt-5">
                    <h1>Seja bem vindo {{ user }}</h1>
                    <p>Para acessar o painel de opções clique no botão ao lado esquerdo</p>
                </div>
            </div>
            <div v-if="matchs" class="col">
               <register-matches></register-matches>
            </div>
            <div v-if="registerPro" class="col">
                pro
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from '@jeremyhamm/vue-slider'
    import RegisterMatches from "@/components/RegisterMatches"
    export default {
        name: "Adm",
        data() {
            return {
                matchs: true,
                registerPro: false,
                navLinks: [
                    {'id': 1, 'text': 'Cadastrar nova rodada', 'url': '#'},
                    {'id': 2, 'text': 'Habilitar Usuario PRO', 'url': '#'}
                ]
            }
        },
        components: {
            Slider,
            RegisterMatches
        },
        computed: {
            user() {
                return this.$store.getters.userName
            },
        },
        created() {
            this.$store.dispatch('getUserData')
        }
    }
</script>

<style>
    body {
        background-color: white;
    }

    .navMenu a {
        color: white !important;
        font-size: 20px !important;
    }

</style>