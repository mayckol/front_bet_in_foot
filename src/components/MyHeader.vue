<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <slot></slot>
  </nav>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>

  .navbar {
    font-family: "Ubuntu Mono";
  }
  .navbar-light .navbar-nav .nav-link {
    color: #ffffff;
  }

  .navbar-light a {
    color: #ffffff;
  }

  .navbar li {
    margin: 15px 40px 0 0;
  }

  .navbar-brand {
    margin: 15px 100px 0 0;
  }
  .navbar-light .navbar-nav .nav-link a:hover {
    color: black;
  }
  .dropdown-menu {
    padding: 0;
    min-width: 1rem;
    max-width: 3rem;
    background-color: #007bff;
    border: 1px solid white;
  }

  .dropdown-item {
    padding: .15rem .75rem;
    font-size: 15px;
    text-align: left;
  }

  .dropdown-menu a:hover {
    background-color: transparent;
    border: 1px solid white;
  }


</style>
