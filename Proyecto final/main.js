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



  let cantidadTipografias = 15
  localStorage.setItem ("catalogo", cantidadTipografias)
  console.log (cantidadTipografias);



  function myFunction() {
    var mylist = document.getElementById("myList");
    document.getElementById("demo").value = mylist.options[mylist.selectedIndex].text;
  }