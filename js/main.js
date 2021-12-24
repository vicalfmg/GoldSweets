/*Practicando con el DOM */ 

var btn = document.getElementById("section-btn");

btn.addEventListener("click" , function(e) {
    e.preventDefault();
    alert("Hola mundo");
});

var innerWidth = window.innerWidth;

if ( innerWidth < 750) {
    var nav = document.getElementById("nav-id");
    nav.style.display= "none";

}

