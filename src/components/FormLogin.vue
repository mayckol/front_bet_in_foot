<template>
  <div class="login-bg" style="background-image: url(../../static/back.png);">
    <div class="login-wrapper">
      <form>
        <div class="row">
          <div class="col-sm-12">
            <h1>Faça seu login</h1>
          </div>
          <div class="col-sm-12">
            <p>Entre e faça sua aposta!</p>
          </div>
          <div class="col-sm-12 input-group btn-right">
            <input v-model="username" type="email" class="input" placeholder="email">
            <input v-model="password" type="password" class="input" placeholder="senha">
            <a @click.stop.prevent="changeComponent" href="#">Cadastre-se</a>
            <span class="text-center float-right">
                  <button @click.stop.prevent="login" type="submit" class="input button-primary">Entrar</button>
            </span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

    export default {
        name: "FormLogin",
        data () {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            changeComponent() {
                return this.$store.commit('changeToRegister')
            },
            login() {
                this.$store.dispatch('retrieveToken', {
                    username: this.username,
                    password: this.password,
                }).then(response => {
                    this.$router.push({ name: 'Main' })
                }).catch(error => {
                    console.log(error)
                    this.serverError = error.response.data
                    this.password = ''
                    this.successMessage = ''
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
    padding-top: 10px;
  }

  .login-wrapper {
    display: block;
    position: absolute;
    width: 400px;
    height: 400px;
    padding: 40px;
    background: rgba(0, 16, 3, 0.8);
    border-radius: 10px;
  }

  .login-wrapper h1 {
    font: 200 2.5rem/40px "Roboto", sans-serif;
    color: #ffffff;
  }

  .login-wrapper p {
    font: 400 0.9rem "Roboto", sans-serif;
    color: #fdfff1;
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
    background: rgba(0, 0, 0, .25);
    font: 400 1.25rem "Roboto", sans-serif;
    color: #ffffff;
  }

  .button-primary {
    width: auto;
    margin-top: 30px;
    background: rgb(210, 236, 255);
    color: black;
  }

  .btn-right {
    display: block;
  }
</style>
