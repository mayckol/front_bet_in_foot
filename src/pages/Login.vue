<template>
  <div>
    <my-header>
      <slot>
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">PRO</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                PT
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">EN</a>
              </div>
            </li>
          </ul>
        </div>
      </slot>
    </my-header>
    <div class="container">
      <div class="row">
        <div class="col-sm" id="logo">
          Uma de três colunas
        </div>
        <div class="col-sm">
          Uma de três colunas
        </div>
        <div class="col-sm">
          Uma de três colunas
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    import MyHeader from "../components/MyHeader"

    export default {
        name: "Login",
        components: {MyHeader}
    }
</script>

<style scoped>
  #logo{
    background-image: url("../../static/bet3.png");
  }
</style>
