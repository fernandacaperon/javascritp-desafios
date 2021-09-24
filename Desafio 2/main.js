
// Desafío 2

// Determinar el perfil del cliente de acuerdo al monto invertido 
// Perfil principante, inversión no supera $500.000
// Perfil moderado, inversión entre $500.000 y $1.000.000
// Perfil experto, inversión supera $1.000.000

let inversion = prompt("Que monto desea invertir?")

const inversionPrincipante = 10000
const inversionModerado = 50000


if (inversion > 10000 && inversion < 500000) {
    alert ("Felicitaciones, ya puedes empezar a invertir y hacer rendir tu dinero")
} else if (inversion > 500000 && inversion < 1000000) {
    alert ("Invertí en CEDEARs de las compañias que se destacan en el mercado")
} else if (inversion > 1000000) {
    alert ("Conoce los packs de acciones exclusivos para vos")
} else { 
    alert ('El monto ingresado no es suficiente para comenzar a invertir')
}







