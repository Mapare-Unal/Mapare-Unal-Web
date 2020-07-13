<template>
  <div id="container-fluid">
    <div class="row" style="margin: 0;">
      <div class="col-md-6">
        <h1 style="margin-top:50px">Cotizacion</h1>
        <form id="cotizacionForm">
          <div class="row">
            <div class="col-md-6" align="left">
              <p>Ingresar nombres</p>
              <input type="text" placeholder="Nombre" v-model="name" required/>
              <p>Ingresar correo electronico</p>
              <input type="text" placeholder="E-mail" v-model="email" required/>
            </div>
            <div class="col-md-6" align="left">
              <p>Ingresar apellidos</p>
              <input type="text" placeholder="Apellidos" v-model="lastName" required/>
              <p>Ingresar maquinas</p>
              <select class="custom-select" v-model="type" required>
                <option value="1" selected>Extrusora</option>
                <option value="2">Inyectora</option>
                <option value="3">Trituradora</option>
                <option value="4">Compresora</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6" align="left">
              <p>Ingresar tamaño</p>
              <select class="custom-select" v-model="size" required>
                <option value="1" selected>Pequeña</option>
                <option value="2">Mediana</option>
                <option value="3">Grande</option>
              </select>
            </div>
          </div>
          <div class="col-md-12">
            <button id="botonCotizacion" type="button" class="btn btn-outline-dark" v-on:click="addForm">Ingresar cotización</button>
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <img id="imgCotización" src="../assets/basic-extruder.jpg" style="width:500px; height: 600px" />
      </div>
    </div>
  </div>
  
</template>

<script>
//import firebase from "firebase";
import db from "../db.js";
let size;

export default {
  mounted(){
    db.collection("forms")
      .get()
      .then(snapshot => {
        size = snapshot.size;
      })
  },
  data: function() {
    return{
      name: null,
      lastName: null,
      email: null,
      type: null,
      size: null,
    }
  },
  methods: {
    addForm: function() {

        const info = {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          type: this.type,
          size: this.size
        }

        db.collection("forms")
          .doc((size + 1).toString())
          .set({
           name: info.name,
           lastName: info.lastName,
           email: info.email,
           type: info.type,
           size: info.size,
           received: false,
           publishDate: new Date(),
           id_att: (size + 1)
          })
          .then(
            this.$bvModal
              .msgBoxOk("Cotización realizada exitosamente", {
                title: "Cotización",
                size: "sm",
                buttonSize: "sm",
                okVariant: "primary",
                headerClass: "p-2 border-bottom-0",
                footerClass: "p-2 border-top-0",
                centered: true
              })
              .then(() => {
                this.$router.push("home");
              })
          );
      }
    }
  }
</script>

<style lang="css">

#imgCotización{
  padding-top: 10%;
}

#cotizacionForm {
  /* background-color: #fffff1; */
  padding-top: 5%;
}

#cotizacionForm p{
  margin: 5% 10%;
}

#cotizacionForm input,
select {
  width: 80%;
  height: 50px;
  margin: 5% 10%;
  border: none;
  border-bottom: solid black 1px;
}

.custom-select{
  width: 80% !important;
  margin: 10% 10%;
  height: 60px;
}

#botonCotizacion{
  border-radius: 20px;
  width: 50%;
  margin: 30px 0;
}

</style>
