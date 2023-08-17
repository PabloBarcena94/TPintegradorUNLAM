//funcion para renderizar el modal del carrito
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
const contadorCarrito = document.querySelector(".contador");
contadorCarrito.innerHTML = `${carrito.length}`
const modalTexto = document.querySelector(".modal-body");

function renderizarCarrito() {
    modalTexto.innerHTML = "";
    if (carrito.length > 0) {
      carrito.forEach(item => {
        modalTexto.innerHTML += `
          <div class="modal-contenido-container">
            <p class="modal-contenido">${item.title}</p>
            <p>$${item.precio}</p>
            <div class="modal-container-btn"><i id="btn-restar-curso-${item.id}" class="fa-solid fa-circle-minus"></i></div>
          </div>
        `;
      });
    } else {
      modalTexto.innerHTML = `
        <h5 class="modal-vacio">Todavía no se agregaron cursos al carrito</h5>
      `;
    }
  
    // Agregar eventos click a los botones de restar curso
    carrito.forEach((item) => {
      const btnRestarCurso = document.querySelector(`#btn-restar-curso-${item.id}`)
      btnRestarCurso.addEventListener("click", () => {
        const cursoIndex = carrito.findIndex(cur => cur.id === item.id);
        carrito.splice(cursoIndex, 1);
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        carrito = JSON.parse(sessionStorage.getItem('carrito')) || [];
        contadorCarrito.innerHTML = `${carrito.length}`;
        renderizarCarrito(); // Renderizar nuevamente el carrito después de eliminar el curso
      });
    });
  }
  
  renderizarCarrito();

