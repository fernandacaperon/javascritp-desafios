const parrafo = document.getElementById ("parrafo")

const boton = document.getElementById ("btn")

const escribir = () => { 
    let texto = alert ("El texto que probaste...")
    parrafo.textContent = texto
}

// boton.addEventListener ("click", () => {
//     escribir ()
// }) 


function test() {
    var x = document.getElementById("textoPrueba").value;
    document.getElementById("resultadoTest").innerHTML = x;
  }

function myFunction() {
  const mylist = document.getElementById("myList");
  document.getElementById("demo").value = mylist.options[mylist.selectedIndex].text;
}


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
  