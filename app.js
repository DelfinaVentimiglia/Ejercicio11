let diaSemana = prompt("¿Qué día de la semana es hoy?");
switch (diaSemana) {

case "lunes":
alert("Es lunes: caminata  1 hs");
 break;

case "martes":
alert("Es martes: rutina de brazos y piernas.");
 break;

case "miercoles":
alert("Es miércoles: caminata 1 hs , trote media hora");
 break;

case "jueves":
alert("Es jueves: rutina de abdominales.");
 break;

 case "viernes":
alert("Es viernes: trote intenso 1hs.");
 break;

case "sabado":
alert("Es sabado: caminata 1 hs");
 break;

case "domingo":
alert("domingo descanso.");
 break;

 default:
alert("Escribe el día de la semana en minúsculas y sin acentos.");
}

let numero1 = prompt('ingrese el primer numero del bucle.');
let numero2 = prompt('ingrese el segundo numero del bucle');

for(i = numero1; i <= numero2; i++){
    document.write('num elegido por usuario:' + i + "<br>");
}

for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");
}