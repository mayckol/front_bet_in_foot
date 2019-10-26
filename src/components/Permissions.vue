<template>
    <div>
        <slider :links="navLinks" :width="300" format="overlay" direction="left" :opacity="0.15"></slider>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <p class="p-head">Lista de usuarios e permissões</p>
                </div>
                <div class="col-sm-12 text-center">
                    <label class="p-head" for="users">Usuários</label>
                    <select v-model="userSelected" id="users" class="form-control" required>
                        <option v-for="user in users"
                                :value="{ id: user.id, permission: user.permission, name: user.name }">
                            {{ user.name }}
                        </option>
                    </select>
                </div>
                <div style="margin-top: 50px" v-if="userSelected" class="col-sm-6">
                    <div class="card" style="max-width: 500px">
                        <div class="card-body">
                            <h5 style="padding-bottom: 40px" class="card-title">Usuário: {{ userSelected.name }}</h5>
                            <h5 class="card-title alert alert-primary">Pemissão atual: {{ userSelected.permission
                                }}</h5>
                            <p class="card-text">Nova permissão</p>
                            <form @submit="checkFormPermission" @submit.stop.prevent="updatePermission">
                                <input style="border-radius: 5px" v-model="permission" type="number" min="1"
                                       placeholder="1: Usário 2: Usuário PRO 3: ADM">
                                <button type="submit" style="margin-left: 50px" class="btn btn-primary text-right">
                                    Atualizar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Slider from '@jeremyhamm/vue-slider'

    export default {

        name: "Permissions",
        data() {
            return {
                userSelected: '',
                permission: null,
                navLinks: [
                    {'id': 1, 'text': 'Início', 'url': '/home'},
                    {'id': 2, 'text': 'Registrar partidas', 'url': '/register-matches'},
                    {'id': 3, 'text': 'Logout', 'url': '/logout'}
                ],
            }
        },
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        created() {
            this.$store.dispatch('getUsers')
        },
        methods: {
            checkFormPermission(e) {
                if (this.permission == 1 || this.permission == 4 || this.permission == 7) {
                    return true
                }
                alert('Permissão inválida')
                e.preventDefault();
            },
            updatePermission() {
                this.$store.dispatch('updatePermissions', {
                    userId: this.userSelected.id,
                    userPermission: this.permission
                }).then(response => {
                    alert('Permissão atualizada com sucesso!')
                    this.$router.push({name: 'Main'})
                }).catch(error => {
                    console.log(error)
                    this.serverError = error.response.data
                })
            }
        },
        components: {
            Slider
        }
    }
</script>

<style>

    body {
        background-color: gray;
    }

    .p-head {
        padding-top: 30px;
        font-size: 30px;
    }

</style>