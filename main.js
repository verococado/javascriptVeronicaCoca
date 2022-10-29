let ingredienteCebolla = false
let ingredientePatata = false
let ingredienteHuevo = false
let receta = ""
let tortillaPatatas = "tortilla de patatas"
let tortillaPatatasSin = "tortilla de patatas sin cebolla"

alert("¡Bienvenido a ¿qué tienes en la nevera?, te ayudaremos a encontrar recetas!")

let cantidadIngredientes = parseInt(prompt("¿Cuántos ingredientes vas a utilizar?"))

for (let i=1; i<(cantidadIngredientes+1); i++){
    let ingrediente = prompt("¿Cuál es el ingrediente número " + i + " ?")
    if ((ingrediente == "cebolla") || (ingrediente == "cebollas") || (ingrediente == "Cebolla") || (ingrediente == "Cebollas") || (ingrediente == "CEBOLLA") || (ingrediente == "CEBOLLAS")){
        ingredienteCebolla = true
    }
    else if ((ingrediente == "patata") || (ingrediente == "patatas") || (ingrediente == "Patata") || (ingrediente == "Patatas") || (ingrediente == "PATATA") || (ingrediente == "PATATAS")){
        ingredientePatata = true
    }
    else if ((ingrediente == "huevo") || (ingrediente == "huevos") || (ingrediente == "Huevo") || (ingrediente == "Huevos") || (ingrediente == "HUEVO") || (ingrediente == "HUEVOS")){
        ingredienteHuevo = true
    }
}

if (((ingredienteCebolla == true) && (ingredientePatata == true) && (ingredienteHuevo == true))) {
    receta = tortillaPatatas
    alert("Tienes los ingredientes perfectos para cocinar... ¡Tortilla de patatas!")
    let cantidadComensales = parseFloat(prompt("¿Cuántos vais a comer?"))
    if ((cantidadComensales != 0) && (receta == tortillaPatatas)){
        let resultadoTortillaPatatas = (cantidadComensales*2);
        let resultadoTortillaCebolla = (cantidadComensales*1);
        let resultadoTortillaHuevos = (cantidadComensales*3);
        alert("Para hacer " + receta + " necesitas " + resultadoTortillaPatatas + " patatas, " + resultadoTortillaCebolla + " cebollas y " + resultadoTortillaHuevos + " huevos." );
        alert("Paso 1: Cortamos y freímos las patatas y la cebolla")
        alert("Paso 2: Mezclamos con los huevos")
        alert("Paso 3:Cuajamos la tortilla")
        alert("Paso 4: Damos la vuelta a la tortilla de patatas")
        alert("¡Listo para disfrutar!")
    }
}
else if ((ingredientePatata == true) && (ingredienteHuevo == true)) {
    receta = tortillaPatatasSin
    alert("Tienes los ingredientes perfectos para cocinar... ¡Tortilla de patatas!")
    let cantidadComensales = parseFloat(prompt("¿Cuántos vais a comer?"))
    if ((cantidadComensales != 0) && (receta == tortillaPatatasSin)){
        let resultadoTortillaPatatas = (cantidadComensales*2);
        let resultadoTortillaHuevos = (cantidadComensales*3);
        alert("Para hacer " + receta + " necesitas " + resultadoTortillaPatatas + " patatas y " + resultadoTortillaHuevos + " huevos." )
        alert("Paso 1: Cortamos y freímos las patatas")
        alert("Paso 2: Mezclamos con los huevos")
        alert("Paso 3:Cuajamos la tortilla")
        alert("Paso 4: Damos la vuelta a la tortilla de patatas")
        alert("¡Listo para disfrutar!")
    }
}
else{
    alert("¡Lo sentimos! No hemos encontrado recetas con esos ingredientes.")
}
