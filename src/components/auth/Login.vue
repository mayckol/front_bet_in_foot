<template>
    <div>
        <div>
            <my-header>
                <slot>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a class="navbar-dark" href="#">
                            <img src="../../../static/logo5.png" width="170" height="50" alt="" style="margin-right: 50px">
                        </a>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#quem" style="color: white; font-size: 18px">O que somos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#como" style="color: white; font-size: 18px">Como apostar</a>
                            </li>
                        </ul>
                    </div>
                </slot>
            </my-header>
        </div>
        <div>
            <component :is="selectedComponent"></component>
        </div>
        <div>
            <who-are-we></who-are-we>
        </div>
        <div>
            <how-to-bet></how-to-bet>
        </div>
        <div>
            <my-footer></my-footer>
        </div>
        <div>
            <back-to-top bottom="50px" right="50px">
                <button type="button" class="btn btn-success btn-to-top"><i class="fa fa-chevron-up"></i></button>
            </back-to-top>
        </div>
    </div>
</template>

<script>
    import MyHeader from "../MyHeader"
    import FormLogin from "../FormLogin";
    import WhoAreWe from "../WhoAreWe";
    import HowToBet from "../HowToBet"
    import MyFooter from "../MyFooter"
    import Register from "./Register"

    export default {
        name: "Login",
        components: {
            MyFooter,
            HowToBet,
            WhoAreWe,
            MyHeader,
            FormLogin,
            Register
        },
        computed: {
            selectedComponent() {
                return this.$store.state.selectedComponent
            }
        }
    }
</script>

<style scoped>

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
        /*margin-top: 110px;*/
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        z-index: 1;
    }

</style>
