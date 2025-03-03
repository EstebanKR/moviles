function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}

function textos (){
    document.getElementById("textouno").innerHTML="cambio";
    document.getElementById("textodos").innerHTML="cambio";
    document.getElementById("textotres").innerHTML="cambio";
}

function verificarN(){
    const numero=document.getElementById("numero").value;
    if (numero>10){
        document.getElementById("resultado").innerHTML= "es mayor";
    }
}
var usuario = {
    nombre:"daniel",
    edad:25,
    correo:"dsninas@gmail.com"
}
document.getElementById("datos").innerHTML=`nombre es: ${usuario.nombre} la edad: ${usuario.edad} el correo: ${usuario.correo}`   
function miobjeto(){
    var usuario = {
        nombre:"daniel",
        edad:25,
        correo:"dsninas@gmail.com"
    }
    document.getElementById("datos").innerHTML=`nombre es: ${usuario.nombre} la edad: ${usuario.edad} el correo: ${usuario.correo}`   
}
function lista(){
    var notas=["miguel","daniel","santiago","paula",usuario.nombre];
    for (var i=0;i<notas.length;i++){
        document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
    }
}