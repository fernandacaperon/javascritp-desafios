
function Tester (nombre,estilo,peso,autor) {
    this.nombre = nombre;
    this.estilo = estilo;
    this.peso = peso
    this.autor = autor
}

let nombre = prompt ("Que tipografia queres probar?")
let estilo = prompt ("Que estilo?")
let peso = prompt ("Que peso?")
let autor = prompt ("Que autor?")


const tester1 = new Tester (nombre, estilo,peso,autor);

console.log (`Probaste ${tester1}`)
