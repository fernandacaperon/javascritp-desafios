const parrafo = document.getElementById ("parrafo")

const boton = document.getElementById ("btn")

const escribir = () => { 
    let texto = alert ("El texto que probaste...")
    parrafo.textContent = texto
}

boton.addEventListener ("click", () => {
    escribir ()
}) 





