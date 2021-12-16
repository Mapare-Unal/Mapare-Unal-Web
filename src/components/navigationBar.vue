<template>
  <div>
    <header class="header">
      <div class="shadow-lg bg-white rounded">
        <b-navbar toggleable="lg" type="light" variant="white">
          <b-navbar-brand to="/home">
            <img src="../assets/Logo1transp.png" class="d-inline-block align-top" height="100px" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <div class="collapse navbar-collapse" id="navOpciones">
                  <ul class="navbar-nav">
                    <b-nav-item href="#" to="/home">
                    Inicio</b-nav-item>
                    <b-nav-item href="#" to="/cotizacion">
                    Cotizaciones</b-nav-item>
                  </ul>
                </div>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "navigationBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}

#navTitle {
  border-bottom: solid #000000 1px;
}
</style>
