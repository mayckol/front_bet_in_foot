<template>
  <div class="login-bg" style="background-image: url(../../static/back.png);">
    <div class="top-content">
      <p>Bet In Foot</p>
    </div>
    <div class="login-wrapper">
      <form>
        <h1>Faça seu login</h1>
        <p>Entre e faça sua aposta!</p>
        <input type="email" class="input" placeholder="email">
        <input type="password" class="input" placeholder="senha">
        <a href="#">Cadastre-se</a>
        <button class="input button-primary">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FormLogin"
    }
</script>

<style scoped>

  .top-content {

  }

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
    background: #22253b;
  }

  .login-wrapper h1 {
    font: 200 2.5rem/40px "Roboto", sans-serif;
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
    background: rgba(0, 0, 0, .25);
    font: 400 1.25rem "Roboto", sans-serif;
    color: #ffffff;
  }

  .button-primary {
    float: right;
    width: auto;
    font: 800 1rem "Roboto", sans-serif;
    text-transform: uppercase;
    margin-top: 15px;
  }

</style>
