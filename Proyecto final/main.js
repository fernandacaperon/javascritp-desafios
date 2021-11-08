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



