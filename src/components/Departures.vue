<template>
  <div class="row text-center row-hover" style="border: solid 1px white">
    <div class="col-sm-12">
      <p>{{ departure.stadium }} {{ departure.schedule }}</p>
    </div>
    <div class="col-sm-5">
      <p>
        {{ departure.homeTeam.name.substring(0, 3) }}
        <a href=""></a>
        <img :src="`../../static/Times/${ selectedPrefixImgHome }.png`"
             style="max-height: 200px; max-width: 200px" class="img-fluid">
        <input type="number" min="0" required>
      </p>
    </div>
    <div class="col-sm-2">
      <h1>X</h1>
    </div>
    <div class="col-sm-5">
      <p>
        <input type="number" min="0" required>
        <img :src="`../../static/Times/${ selectedPrefixImgVisiting }.png`"
             style="max-height: 200px; max-width: 200px" class="img-fluid">
        {{ departure.visitingTeam.name.substring(0, 3) }}
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Departures",
        props: [
            'departure'
        ],
        data() {
            return {

            }
        },
        computed: {
            selectedPrefixImgHome() {
                console.log(this.departure.homeTeam)
                if (!this.departure.homeTeam) {
                    return
                }
                return this.departure.homeTeam.name.replace(/ /g, "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            },
            selectedPrefixImgVisiting() {
                console.log(this.departure.visitingTeam)
                if (!this.departure.visitingTeam) {
                    return
                }
                return this.departure.visitingTeam.name.replace(/ /g, "").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
            },
        }
    }
</script>

<style scoped>

  p, h1 {
    color: white;
    text-transform: uppercase;
  }

  img{
    width:100% !important;
    max-width:50px !important;
    display: inline !important;
  }

  input[type="number"] {
    background: transparent;
    border: 1px solid white;
    border-radius: 10px;
    max-width: 80px;
    padding: 5px;
    text-align: center;
    color: white;
    font-size: large;
  }

  .row-hover:hover {
    background-color: rgba(0, 1, 1, 0.7);
  }

</style>
