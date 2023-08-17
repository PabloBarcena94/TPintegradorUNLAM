let forms = document.querySelectorAll(".form")
const curso = JSON.parse(sessionStorage.getItem('curso'));
const detalleCurso = document.querySelector(".inscripcion-detalle")

detalleCurso.innerHTML = `
    <h1>${curso.title}</h1>
    <img src="${curso.imagen}"/>
`

const btnRestarPersona = document.querySelector(".btn-restar-persona")
btnRestarPersona.addEventListener("click",()=>{
    console.log(btnRestarPersona)
    if(forms.length==1){
        document.getElementsByName("nombre")[0].value = "";
        document.getElementsByName("apellido")[0].value = "";
        document.getElementsByName("DNI")[0].value = "";

    }
})

const inscripcionContainer = document.querySelector(".inscripcion-form-container")
let containerCount = 1
const precioTotal = document.querySelector(".precio-total-inscripcion")
precioTotal.textContent+=`$
   ${curso.precio * containerCount}
`   

const btnSumar = document.querySelector(".btn-sumar-persona")
btnSumar.addEventListener("click", ()=>{
    const formContainer = document.querySelector(".form-container")
    const form = document.createElement("form")
    form.classList.add("form")
    form.innerHTML =`
        <input class="inscripcion-form-input" type="text" name="nombre" id="nom" placeholder="Ingresa tu nombre">
        <input class="inscripcion-form-input" type="text" name="apellido" id="apell" placeholder="Ingresa tu Apellido">
        <input class="inscripcion-form-input" type="number" name="DNI" id="DNI"placeholder="Ingresa tu DNI">
        <i class="fa-solid fa-circle-minus btn-restar-persona"></i>`
    formContainer.appendChild(form)
    containerCount++
    precioTotal.textContent=`$
    ${curso.precio * containerCount}
    `
    const btnRestarPersona = document.querySelectorAll(".btn-restar-persona")
    btnRestarPersona.forEach((item)=>{
        item.addEventListener("click", (e)=>{
            if(formContainer.childElementCount !== 1){
                containerCount--
            precioTotal.textContent=`$
                ${curso.precio * containerCount}
            `
            item.parentNode.remove()
            } else {
                forms = document.querySelectorAll(".form")
                if(forms.length==1){
                    document.getElementsByName("nombre")[0].value = "";
                    document.getElementsByName("apellido")[0].value = "";
                    document.getElementsByName("DNI")[0].value = "";
        
                }
            }
        })
    })
})


const btnInscribirse = document.querySelector(".btn-inscribirse");
const inputNombre = document.getElementsByName("nombre")
const inputApellido = document.getElementsByName("apellido")
const inputDni = document.getElementsByName("DNI")
const main = document.querySelector("main")
let datos = [];

//Esta funcion valida que todos los formularios agregados tengan un valor dentro.
function validarInputsVacios(inputs) {
    let arrayInputs = Array.from(inputs);
    return arrayInputs.every(input => input.value.trim() !== '');
  }


btnInscribirse.addEventListener("click", (e)=>{
    e.preventDefault();
    if(validarInputsVacios(inputNombre) && validarInputsVacios(inputApellido) && validarInputsVacios(inputDni)){
        for(let i =0; i<inputNombre.length; i++){
            let nombre = inputNombre[i].value;
            let apellido = inputApellido[i].value;
            let dni = inputDni[i].value;
            datos.push({
                nombre: nombre,
                apellido: apellido,
                dni: dni
            })
        }
        Swal.fire({
            title: `Quieres inscribir a las siguientes personas?`,
            html: `<ul">${datos.map((dato)=>{
                return `<li>${dato.nombre} ${dato.apellido} ${dato.dni}</li>`
            }).join("")}</ul><br><h3>Precio total: $${curso.precio * containerCount}</h3>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Inscripcion éxitosa',
                'La inscripcion se ha realizado correctamente',
                'success'
              )
              carrito = []
              sessionStorage.setItem('carrito', JSON.stringify(carrito));
              contadorCarrito.innerHTML = `${carrito.length}`
              renderizarCarrito();
              const formContainer = document.querySelector(".form-container")
                formContainer.innerHTML = `
                <form class="form" action=# method="get">
                    <input class="inscripcion-form-input" type="text" name="nombre" id="nom" placeholder="Ingresa tu nombre">
                    <input class="inscripcion-form-input" type="text" name="apellido" id="apell" placeholder="Ingresa tu Apellido">
                    <input class="inscripcion-form-input" type="number" name="DNI" id="DNI"placeholder="Ingresa tu DNI">
                    <i class="fa-solid fa-circle-minus btn-restar-persona"></i>
                </form>
                `
                datos = [];
            } else{
                datos = [];
            }
          })   
    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored-toast'
            },
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          })
        
        async function toastError (titulo){
            await Toast.fire({
                icon: 'error',
                title: titulo
              })
        }
        toastError("Rellena todos los campos");
    }
})