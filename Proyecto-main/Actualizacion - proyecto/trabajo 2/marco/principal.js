function traerPeliculas() {
    fetch("peliculas.json")
        .then(respuesta => respuesta.json())
        .then(datosEst => {

            //console.log("dataEst", datosEst);
            mostrarPeliculas(datosEst);
        }).catch(error => {
            console.log("Error", error.message);
        });
};
traerPeliculas();