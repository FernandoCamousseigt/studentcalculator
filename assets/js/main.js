//para escribir sobre el navegador ingreso de datos//
var nombre = prompt("Ingrese su nombre y  apellido");
var carrera = prompt("Ingrese su carrera");

var ramo1 = prompt("Ingrese ramo 1");
var nota1ramo1 = parseInt(prompt("Ingrese nota1"));
var nota2ramo1 = parseInt(prompt("Ingrese nota2"));
var nota3ramo1 = parseInt(prompt("Ingrese nota3"));
var promedioRamo1 = ((nota1ramo1 + nota2ramo1 + nota3ramo1) / 3);
alert(promedioRamo1);

var ramo2 = prompt("Ingrese ramo 2");
var nota1ramo2 = parseInt(prompt("Ingrese nota 1"));
var nota2ramo2 = parseInt(prompt("Ingrese nota 2"));
var nota3ramo2 = parseInt(prompt("Ingrese nota 3"));
var promedioRamo2 = ((nota1ramo2 + nota2ramo2 + nota3ramo2) / 3);
alert(promedioRamo2);

var ramo3 = prompt("Ingrese ramo 3");
var nota1ramo3 = parseInt(prompt("Ingrese nota 1"));
var nota2ramo3 = parseInt(prompt("Ingrese nota 2"));
//var nota3ramo3 = prompt("Ingrese nota 3");
//nota 3 ramo3 necesaria para aprobar(4)
//Promedio de notas ramo1, ramo2
//Promedio ramo3 para aprobar curso
var promedioRamo3 = parseInt(4);
var nota3ramo3 = ((promedioRamo3 * 3) - (nota1ramo3 + nota2ramo3));
alert(promedioRamo3);
alert(nota3ramo3);
// Tabla
document.write('<div class="container">');
document.write("<h1>Notas Finales</h1>");

document.write("<h1>Nombre:  " + nombre + "</h1>");
document.write("<h2>Carrera:  " + carrera + "</h2>");
document.write("<table class='table'>");
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota1</th>");
document.write("<th scope='col'>Nota2</th>");
document.write("<th scope='col'>Nota3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");
document.write("<tbody>");

document.write("<tr>");
document.write("<td>" + ramo1 + "</td>");
document.write("<td>" + nota1ramo1 + "</td>");
document.write("<td>" + nota2ramo1 + "</td>");
document.write("<td>" + nota3ramo1 + "</td>");
document.write("<td>" + promedioRamo1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ramo2 + "</td>");
document.write("<td>" + nota1ramo2 + "</td>");
document.write("<td>" + nota2ramo2 + "</td>");
document.write("<td>" + nota3ramo2 + "</td>");
document.write("<td>" + promedioRamo2 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + ramo3 + "</td>");
document.write("<td>" + nota1ramo3 + "</td>");
document.write("<td>" + nota2ramo3 + "</td>");
document.write("<td>-</td>");
document.write("<td>" + promedioRamo3 + "</td>");
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

//texto bajo la tabla
//container para la sangria
document.write('<div class="container">');
document.write("<p>Para aprobar el ramo de " + ramo3 + " con nota 4, necesitas obtener un " + nota3ramo3 + " en la nota 3.</p>");