<template>
  <nav v-if="this.$store.state.userData.team_id" class="navbar navbar-expand-lg sticky-top navbar-dark bg-custom" style="height: 100px">
    <slot></slot>
    <img style="margin-left: 20px" src="../../static/logo1.png" class="img-fluid">
  </nav>
  <nav v-else class="navbar navbar-expand-lg sticky-top navbar-dark bg-custom" style="height: 100px">
    <slot></slot>
    <img src="../../static/logo1.png" class="img-fluid">
  </nav>
</template>

<script>
    export default {
        name: "MyHeader",
        computed: {
            teamColors() {
                switch (this.$store.state.userData.team_id) {
                    case 13:
                        return ['black', 'red']
                        break

                }
            }
        }
    }
</script>

<style scoped>

  .navbar {
    border-top: 3px solid #142113;
    box-shadow: 0 0 0 15px #142113;
    /*position: fixed;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*width: 100%;*/
  }

  .sticky-top {
    background-color: #22253b;
  }

  .bg-custom {
    background-color: #001003;
    height: 100px;
  }

  .img-fluid {
    max-width: 100%;
    width: 100px;
    height: 70px;
    margin-right: 5px;
  }

</style>
