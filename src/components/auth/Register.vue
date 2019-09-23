<template>
    <div class="login-bg" style="background-image: url(../../../static/back.png);">
        <div class="login-wrapper">
            <div class="row">
                <form action="#" @submit.stop.prevent="register">
                    <div class="col-sm-12">
                        <h1 class="mb-5">Cadastre-se</h1>
                    </div>
                    <div class="col">
                        <h5 class="mb-4">O que está esperando ?</h5>
                    </div>
                    <div class="col-sm-12 input-group btn-right">
                        <input v-model="name" type="text" class="input" placeholder="nome">
                        <input v-model="email" type="email" class="input" placeholder="email">
                        <input v-model="birthDate" type="text" class="input" placeholder="data de nascimento">
                        <input v-model="password" type="password" class="input" placeholder="senha">
                        <input v-model="confirmPassword" type="password" class="input" placeholder="confirme sua senha">
                        <a @click.stop.prevent="changeComponent" href="#" style="font-size: 20px">Já sou cadastrado</a>
                    </div>
                    <p style="color: white">
                        Ao clicar em cadastrar,<br/> Você concorda com todas as <a href="#">políticas</a> de uso da
                        plataforma.
                    </p>
                    <div class="col-sm-12">
                        <div class="form-check">
                            <input v-model="checkboxes" type="checkbox" value="isAdult" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Declaro ser maior de 18 anos.</label>
                        </div>
                    </div>
                    <div class="col-sm-12 input-group btn-right">
                        <span class="text-center float-right">
                           <button class="input button-primary">Cadastrar</button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                name: '',
                email: '',
                birthDate: '',
                password: '',
                confirmPassword: '',
                checkboxes: []
            }
        },
        methods: {
            changeComponent() {
                return this.$store.commit('changeToLogin')
            },
            register() {
                this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    birthDate: this.birthDate,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    checkboxes: [],
                }).then(response => {
                    this.$router.push({ name: 'Main' })
                })
            }
        }
    }
</script>

<style scoped>

    .top-content p {
        color: white;
        font: 65px "Ubuntu Light";
        text-align: center;
        padding-top: 0px;
    }

    .login-wrapper {
        display: block;
        padding: 40px;
        background: rgba(0, 16, 3, 0.8);
        opacity: 0.7;
        border-radius: 10px;
        max-width: 600px;
    }

    .login-wrapper h1 {
        font: 200 2.5rem/40px "Roboto", sans-serif;
        color: #ffffff;
    }

    label {
        color: #ffffff;
    }

    .login-wrapper p {
        font: 400 0.9rem "Roboto", sans-serif;
        color: #20ff11;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    .input {
        width: 100%;
        height: 50px;
        border-radius: 25px;
        border: none;
        margin-bottom: 15px;
        padding: 0 35px;
        background: rgb(0, 0, 0);
        font: 400 1.25rem "Roboto", sans-serif;
        color: #ffffff;
    }

    h5 {
        color: #ffffff;
        font-size: 14px;
    }

    h1 {
        opacity: 1;
    }

    .button-primary {
        float: right;
        width: auto;
        font: 800 1rem "Roboto", sans-serif;
        margin-top: 15px;
        margin-right: 10%;
        background: rgb(210, 236, 255);
        color: black;
    }

    .btn-right {
        display: block;
    }

</style>