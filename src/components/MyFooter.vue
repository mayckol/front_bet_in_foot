<template>
    <!-- Footer -->
    <footer class="page-footer font-small bg-custom pt-4">

        <!-- Footer Links -->
        <div class="container-fluid text-center text-md-left">

            <!-- Grid row -->
            <div class="row">

                <!-- Grid column -->
                <div class="col-md-6 mt-md-0 mt-3">

                    <!-- Content -->
                    <h5 class="text-uppercase">Faça parte !</h5>
                    <img src="../../static/logo5.png" class="img-fluid">

                </div>
                <!-- Grid column -->

                <hr class="clearfix w-100 d-md-none pb-3">

                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">

                    <!-- Links -->
                    <h5 class="text-uppercase">Campeonato Brasileiro</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="#!">Classificação</a>
                        </li>
                        <li>
                            <a href="#!">Jogos da rodada</a>
                        </li>
                        <li>
                            <a href="#!">Artilheiros</a>
                        </li>
                        <li>
                            <a href="#!">Notícias</a>
                        </li>
                    </ul>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 mb-md-0 mb-3">

                    <!-- Links -->
                    <h5 class="text-uppercase">Parceiros</h5>

                    <ul class="list-unstyled">
                        <li>
                            <a href="https://aluno.una.br/SOL/aluno/index.php/index/seguranca/dev/instituicao/3">UNA</a>
                        </li>
                        <li>
                            <a href="https://www.w3schools.com/">W3Schools</a>
                        </li>
                        <li>
                            <a href="https://vuejs.org/">VueJs</a>
                        </li>
                        <li>
                            <a href="https://laravel.com/">Laravel</a>
                        </li>
                    </ul>
                    <ul class="list-unstyled">
                        <li>
                            <a style="color: white; text-transform: uppercase"
                               href="https://aluno.una.br/SOL/aluno/index.php/index/seguranca/dev/instituicao/3">Contato</a>
                        </li>
                    </ul>

                </div>
                <!-- Grid column -->

            </div>
            <!-- Grid row -->

        </div>
        <!-- Footer Links -->

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2019 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> betinfoot.com</a>
        </div>
        <!-- Copyright -->

    </footer>
    <!-- Footer -->
</template>

<script>
    export default {
        name: "MyFooter"
    }
</script>

<style scoped>

    h5 {
        color: #ffffff;
    }

    .page-footer {
        border-top: 1px solid white;
    }

    .list-unstyled li a {
        color: #dfefff;
    }

    .bg-custom {
        background-color: #001003;
    }

    .footer-copyright {
        color: white;
    }

</style>
