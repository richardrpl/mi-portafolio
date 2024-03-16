document.getElementById("correo").addEventListener("click", function(){
    var correoElectronico = 'richardperezlanguasco@gmail.com';

    window.location.href = 'mailto:' + correoElectronico;
});

var boton = document.getElementById("btn-habilidades");
var div = document.getElementById("contenedor-img-svg");

boton.addEventListener('click', function(){
    if (div.style.display === "none"){
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }

});

document.getElementById("btn-certificados").addEventListener("click", function() {
var btn = document.getElementById("contenedor-certificado-img");
if(btn.style.display === "none") {
    btn.style.display = "block"
} else {
    btn.style.display = "none"
}
});

document.getElementById("btn-proyectos").addEventListener("click", function() {
    var btn = document.getElementById("contenedor-proyectos-img");
    if(btn.style.display ==="none") {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
})

document.getElementById("CV").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/file/d/1_CbF21txri1xRthZv5eyD7aRPKeVy883/view?usp=sharing";
});
