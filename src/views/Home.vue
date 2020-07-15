<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="imagenInicial">
            <img src="../assets/general.png" style="margin-top:10%" />
          </div>
          <div id="nombreMapare">
            <h1 style="margin: 50px 0 20px 0; font-size: 60px">MAPARE</h1>
            <p style="font-size: 20px">Material Para Revivir</p>
          </div>
          <div id="seccionQS">
            <div></div>
          </div>
        </div>
        <div class="row" id="empresaInfo">
          <div class="col-md-5 offset-6" style="background-color:white; margin-top: 10%; margin-bottom: 10%">
            <div style="padding: 10%">
              <h1>Quiénes somos
              </h1>
              <h5 style="margin: 50px 0">Estamos aquí para usted
              </h5> 
              <p style="text-align: justify">Somos un Grupo de estudiantes de la Universidad Nacional de Colombia, y desarrollamos esta aplicacion como proyecto final del curso de computacion grafica.
              El proposito es adquirir experiencia en el trabajo en equipo entre miembros de varias disciplinas y asi lograr metas que solo con los conocimientos de nuestra profesión no serian posibles de desarrollar.</p> 
            </div>  
          </div> 
        </div>
      </div>
      <h1 style="margin: 50px 0 20px 0; font-size: 60px">Maquinas</h1>
      <div id="maquinasHome" class="row" style="margin-top:30px">
        <div class="col-6" align="center">
          <div id="compresoraHome">
            <img src="../assets/sheetpress.jpeg" />
            <h3>Prensa</h3>
            <p>Caracteristicas</p>
            <span>
              presiona el plástico en láminas recicladas.‍
              Esta máquina puede hacer múltiples hojas (1x1 metros) 
              por día reciclando alrededor de 20 kg de plástico por hoja.
            </span>
          </div>
          <div id="inyectoraHome">
            <img src="../assets/basic-injection.png" />
            <h3>Inyectora</h3>
            <p>Caracteristicas</p>
            <span>
              Las escamas de plástico se calientan y se
              inyectan en un molde. Es un proceso relativamente
              rápido muy adecuado para crear producciones de objetos
              pequeños. Puede hacer los moldes utilizando molinos o
              tornos CNC, o simplemente soldando.
            </span>
          </div>
        </div>
        <div class="col-6" align="center">
          <div id="estrusoraHome">
            <img src="../assets/basic-extruder.png" />
            <h3>Extrusora</h3>
            <p>Caracteristicas</p>
            <span>
              La extrusión es un proceso continuo donde las
              escamas de plástico se insertan en la tolva y se
              extruyen en una línea de plástico. Estas líneas se
              pueden usar para hacer nueva materia prima, plástico
              granulado, girar alrededor de un molde o usarse de manera
              creativa.
            </span>
          </div>
          <div id="trituradoraHome">
            <img src="../assets/basic-shredder.png" />
            <h3>Trituradora</h3>
            <p>Caracteristicas</p>
            <span>
              La Trituradora corta artículos de plástico en
              pequeñas escamas listas para ser convertidas en cosas
              nuevas por las otras máquinas. El plástico triturado
              puede ser de múltiples tamaños y colores para aumentar
              su valor.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="pieDePagina" style="background-color: black; height: 80px; width: 100%">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style lang="scss">
#maquinasHome img {
  width: 80%;
}

#empresaInfo {
  background-image: url("../assets/info.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  text-align: left;
}

#maquinasHome h3 {
  margin: 50px 10%;
}

#maquinasHome p {
  margin: 30px 10%;
}

#maquinasHome h3,
#maquinasHome p {
  text-align: left;
  width: 80%;
}

#maquinasHome span {
  width: 80%;
  display: inline-block;
  text-align: justify;
  margin: 30px 10%;
}
</style>