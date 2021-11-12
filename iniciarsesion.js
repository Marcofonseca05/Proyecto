document.getElementById("boton").addEventListener('click', getValueInput);

function getValueInput(){
    var correoo ='';
    var contraa ='';
    var Acceso = false;

    var correoo = document.querySelector('#name').value;
    var contraa = document.querySelector('#password').value;
    Acceso = validarUsuario(correoo,contraa);
    localStorage.setItem("primeritem",correoo);
    localStorage.setItem("segundoitem",contraa);
    console.log(Acceso);
      }