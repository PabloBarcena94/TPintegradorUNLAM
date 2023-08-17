const navButton = document.querySelector(".hamburguer-icon")
const navBar = document.querySelector(".navbar-responsive")
console.log(navButton)

navButton.addEventListener("click", ()=>{
    navBar.classList.toggle("mostrar-navbar")
})

//Esta funcion es para mover el icono del carrito cuando la pantalla sea de menos de 882px
function moverElemento() {
    let carrito = document.querySelector(".carrito");
    let nodoDestino = document.querySelector(".navbar-responsive-ul");
    let nodoOrigen = document.querySelector(".header-container-top")
    if (window.innerWidth < 882) {
        carrito.style.display = "flex"
        nodoDestino.appendChild(carrito);
    }else{
        nodoOrigen.appendChild(carrito);
    }
}

document.addEventListener("DOMContentLoaded", moverElemento);
window.addEventListener("resize", moverElemento)