class Receta {
    constructor (nombre, ingrediente, pasos) {
        this.nombre = nombre; 
        this.ingrediente = ingrediente;
        this.pasos = pasos;
    }
}  

const ingredientesTortillaPatatas = ["PATATA", "CEBOLLA", "HUEVO"];
const pasosTortillaPatatas = ["Para hacer Tortilla de Patatas necesitas, patatas, cebolla y huevos.", 
    "Paso 1: Cortamos y freímos las patatas y la cebolla", 
    "Paso 2: Mezclamos con los huevos", 
    "Paso 3:Cuajamos la tortilla", 
    "Paso 4: Damos la vuelta a la tortilla de patatas", 
    "¡Listo para disfrutar!"]
const tortillaPatatas = new Receta ("Tortilla de Patatas", ingredientesTortillaPatatas, pasosTortillaPatatas)

const ingredientesTortillaSin = ["PATATA", "HUEVO"];
const pasosTortillaSin = ["Para hacer Tortilla de Patatas necesitas, patatas y huevos.", 
    "Paso 1: Cortamos y freímos las patatas", 
    "Paso 2: Mezclamos con los huevos", 
    "Paso 3:Cuajamos la tortilla", 
    "Paso 4: Damos la vuelta a la tortilla de patatas", 
    "¡Listo para disfrutar!"]
const tortillaSin = new Receta ("Tortilla de Patatas sin cebolla", ingredientesTortillaSin, pasosTortillaSin)

const listaRecetas = [
    tortillaPatatas,
    tortillaSin
]

alert("¡Bienvenido a ¿qué tienes en la nevera?, te ayudaremos a encontrar recetas!")

let ingredienteTiene = prompt("¿Qué ingredientes tienes en la nevera?").toUpperCase();

const resultadoRecetas = listaRecetas.filter((el) => el.ingrediente.includes(ingredienteTiene) === true)

if (resultadoRecetas.length == 0){
    alert("¡Lo sentimos! No hemos encontrado recetas con esos ingredientes.")
} 
else{
    let textoRecetas = ""
    for (let i=0; i<resultadoRecetas.length; i++){
        textoRecetas = textoRecetas + resultadoRecetas[i].nombre + "\n"
    }

    let ver = prompt("Tienes para cocinar:" + "\n" + textoRecetas + " ¿Qué receta quieres ver?").toUpperCase()

    if ((ver == "TORTILLA DE PATATAS")) {
        for (let i=0; i<pasosTortillaPatatas.length; i++){
            alert(pasosTortillaPatatas[i])
        }
    }
    else if((ver == "TORTILLA DE PATATAS SIN CEBOLLA")) {
        for (let i=0; i<pasosTortillaSin.length; i++){
            alert(pasosTortillaSin[i])
        }
    }
    else {
        alert("No tenemos información de esa receta...")
    }
}