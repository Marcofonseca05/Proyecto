//baner


//pablin

function traerPeliculas() {
    fetch("peliculas.json")
      .then(respuesta => respuesta.json())
      .then(datosEst => {
        escribe = ``
        console.log("dataEst", datosEst);
        for (peli of datosEst.pelis) {
          document.getElementById("acaPostre").innerHTML = escribe +=
            `<div class='col-4'>
                    <img src='${peli.imagen}'  style='width:200px; height: 200px'>
                    <h3>${peli.nombre}</h3> 
                </div>`
        }
        //mostrarPeliculas(datosEst);
      }).catch(error => {
        console.log("Error", error.message);
      });
  
  };
  
  traerPeliculas();