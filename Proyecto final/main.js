const parrafo = document.getElementById ("parrafo")

const boton = document.getElementById ("btn")


function cambiarTipografia () {
  const select_tipografia = document.getElementById ("myList");
  console.log (select_tipografia.value);

  if ("alegreya" == select_tipografia.value) {
    document.getElementById ("resultado-cambiarTipografia").innerHTML = 'Alegreya';
    document.getElementById('resultadoTest').style.fontFamily = select_tipografia.value;
  }  
  
  if ("acme" == select_tipografia.value) {
    document.getElementById ("resultado-cambiarTipografia").innerHTML = 'Acme';
    document.getElementById('resultadoTest').style.fontFamily = select_tipografia.value;
  }

  if ("bitter" == select_tipografia.value) {
    document.getElementById ("resultado-cambiarTipografia").innerHTML = 'Bitter';
    document.getElementById('resultadoTest').style.fontFamily = select_tipografia.value;
  }

  if ("Gochi Hand" == select_tipografia.value) {
    document.getElementById ("resultado-cambiarTipografia").innerHTML = 'Gochi Hand';
    document.getElementById('resultadoTest').style.fontFamily = select_tipografia.value;
  }

  if ("piazzolla" == select_tipografia.value) {
    document.getElementById ("resultado-cambiarTipografia").innerHTML = 'Piazzolla';
    document.getElementById ("resultado-cambiarTipografia").className = "box-option";
    document.getElementById('resultadoTest').style.fontFamily = select_tipografia.value; 
  }
}

function cambiarCuerpo (){
  const select_cuerpo = document.getElementById ("cuerpo");
  console.log (select_cuerpo.value);

  if ("9" == select_cuerpo.value){
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '9';
    document.getElementById('resultadoTest').style.fontSize = "xx-small";
  }

  if ("10" == select_cuerpo.value){
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '10';
    document.getElementById('resultadoTest').style.fontSize = "x-small";
  }

  if ("13" == select_cuerpo.value){
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '13';
    document.getElementById('resultadoTest').style.fontSize = "small";
  }

  if ("16" == select_cuerpo.value){
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '16';
    document.getElementById('resultadoTest').style.fontSize = "medium";
  }

  if ("18" == select_cuerpo.value) {
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '18px';
    document.getElementById('resultadoTest').style.fontSize = "large";
  }

  if ("24" == select_cuerpo.value) {
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '24px';
    document.getElementById('resultadoTest').style.fontSize = "x-large";
  }

  if ("32" == select_cuerpo.value) {
    document.getElementById ("resultado-cambiarCuerpo").innerHTML = '32px';
    document.getElementById('resultadoTest').style.fontSize = "xx-large";
  }
}

function cambiarPeso (){
  const select_peso = document.getElementById ("peso");

  if ("ligth" == select_peso.value){
    document.getElementById ("resultado-cambiarPeso").innerHTML = '100';
    document.getElementById('resultadoTest').style.fontWeight = "100";
  }

  if ("regular" == select_peso.value){
    document.getElementById ("resultado-cambiarPeso").innerHTML = '400';
    document.getElementById('resultadoTest').style.fontWeight = "400";
  }

  if ("bold" == select_peso.value){
    document.getElementById ("resultado-cambiarPeso").innerHTML = '900';
    document.getElementById('resultadoTest').style.fontWeight = "900";
  }
}

function test() {
  var x = document.getElementById("textoPrueba").value;
  document.getElementById("resultadoTest").innerHTML = x;
}

// 

let cantidadTipografias = 15
localStorage.setItem ("catalogo", cantidadTipografias)
console.log (cantidadTipografias);


//json

class Producto {
  clasificacion (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
}

let producto = new Producto ("Sans serif", 100)

//paso de objeto a json

console.log (JSON.stringify (producto)) 


//formulario

const enviarFormularioSeguro = () => {

    const name = document.getElementById ("name").value
    const email = document.getElementById ("email").value 

    if (name.length > 0 && email.length) {
      document.getElementById ("form").submit ()
    } else { 
      return false
    }
    alert("Enviaste el formulario");
}

document.getElementById ("btn-form").addEventListener ("click", (e) => {
    e.preventDefault ()
    enviarFormularioSeguro ()
  })

//Dark

  const darkMode = () => {
    document.getElementsByTagName ("body")[0].style = "background-color: black"

    for ( let i= 0; i < document.getElementsByTagName ("h1").length; i++) {
      document.getElementsByTagName ("h1") [i].style = "color: #76f7b9"
    }
    for (let i = 0; i < document.getElementsByTagName ("p").length; i++){
      document.getElementsByTagName ("p") [i].style = "color: #6439FF"
    }
    
    localStorage.setItem ("theme", "dark")
  }
  
  
  const ligthMode = () => {
    document.getElementsByTagName ("body")[0].style = "background-color: white"
  
    for ( let i= 0; i < document.getElementsByTagName ("h1").length; i++) {
      document.getElementsByTagName ("h1")[i].style = "color: #6439FF"
    }
    for (let i = 0; i < document.getElementsByTagName ("p").length; i++){
      document.getElementsByTagName ("p") [i].style = "color: #6439FF"
    }
  
    localStorage.setItem ("theme", "ligth")
  }
  
  document.getElementById("theme").addEventListener ("click", () => {
    if (localStorage.getItem ("theme") === "dark") {
      ligthMode () 
    } else {
      darkMode ()
    }
  })
  

