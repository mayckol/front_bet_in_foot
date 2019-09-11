<template>
  <div>
    <div>
      <my-header>
        <slot>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-dark" href="#">
              <img src="../../static/logo5.png" width="170" height="50" alt="" style="margin-right: 50px">
            </a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#quem" style="color: white">Quem somos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#quem" style="color: white">Como apostar</a>
              </li>
            </ul>
          </div>
        </slot>
      </my-header>
    </div>
    <div>
      <form-login></form-login>
    </div>
    <who-are-we></who-are-we>

  </div>
</template>

<script>
    import MyHeader from "../components/MyHeader"
    import FormLogin from "../components/FormLogin";
    import WhoAreWe from "../components/WhoAreWe";

    export default {
        name: "Login",
        components: {
            WhoAreWe,
            MyHeader,
            FormLogin
        }
    }
</script>

<style scoped>

  .col {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .login-bg {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

</style>
