
const prueba = document.createElement ("h2")
h2.setAttribute ("id", "elementoAgregado")
h2.textContent = "Ingresa tu texto de prueba"

document.getElementById("tester").appendChild (prueba)
console.log (prueba)

class p {
    constructor ({nombre, clase, peso}){
        this.nombre = nombre;
        this.clase = clase;
        this.peso = peso
    }
}

const guardarTipografia = () => {

    const test = new p ( 
        {
        nombre : document.getElementById("nombre").value,
        estilo : document.getElementById("estilo").value,
        peso : document.getElementById("peso").value,
        }
    )

    return test
}