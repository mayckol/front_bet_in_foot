<template>
    <div class="main">
        <my-header>
            <slot>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="navbar-dark" href="/">
                        <img src="../../static/logo5.png" width="170" height="50" alt="" style="margin-right: 50px">
                    </a>
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li class="nav-item">
                            <a class="nav-link" href="#quem" style="color: white; font-size: 18px">O que somos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#como" style="color: white; font-size: 18px">Como apostar</a>
                        </li>
                    </ul>
                    <a class="navbar-dark" href="/">
                        <router-link v-if="loggedIn" style="margin-right: 50px" :to="{ name: 'logout' }">Logout
                        </router-link>
                        <router-link v-else="loggedIn" style="margin-right: 50px" :to="{ name: 'Login' }">Login
                        </router-link>
                    </a>
                </div>
            </slot>
        </my-header>
    </div>
</template>

<script>
    import MyHeader from "./MyHeader"
    import Login from "@/components/auth/Login"

    export default {
        name: "Main",
        components: {
            Login,
            MyHeader
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn
            }
        }
    }
</script>

<style scoped>

</style>
