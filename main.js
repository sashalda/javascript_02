let numero = prompt("Ingrese su numero preferido");
if (parseInt(numero) > 1000) {
    alert("Su numero favorito es mayor que mil");
}

let saludo = prompt("Ingrese su saludo");
if (saludo === "hola") {
    alert("¿Como andas?");
}

let precio = prompt("¿Cuanto está 1kg de papa?");
if (parseInt(precio) >= 10 && parseInt(precio) <= 50) {
    alert("Está a buen precio");
}
