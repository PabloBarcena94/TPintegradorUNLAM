const curso = JSON.parse(sessionStorage.getItem('curso'));
const detalleCursoContainer = document.querySelector(".detalle-curso")
detalleCursoContainer.innerHTML = `
<h1 class="detCurso__h1">Detalle de Curso</h1>
<article class="detCurso__art1">
    <img class="detCurso__artImg" src="${curso.imagen}" alt="Diseño UX/UI">
    <div class="detCurso__divUXUI">
        <h2>${curso.title}</h2>
        <ul class="detCurso__ulUXUI">
            <li>Precio: <p>$${curso.precio}</p></li>
            <li>Duración del curso: <p>${curso.duracion}/${curso.clases} clases semanales de ${curso.horas} hs</p></li>
            <li>Descripción:
                <p>${curso.descripcion}</p>
            </li>
            <li>Requisitos previos: <p>No requiere conocimientos previos.</p></li>
        </ul>
        <div class="detCurso__inscribirme">
            <a class="btn-inscripcion" href="formulario.html">Inscribirme ahora</a>
        </div>
    </div>
</article>
<article class="detCurso__art2">
    <h2>Contenidos por clase</h2>
        <div class="contenidos-container">
            ${curso.unidades.map(unidad =>{
                return `<div class="contenido-container">
                <div class="contenido">
                    <h3 class="contenido-titulo">${unidad.titulo}</h3>
                    <i class="fa-solid fa-arrow-down" id="btnAbrir-${unidad.id}"></i>
                </div>
                <div class="contenido-info-container" id="contenido-${unidad.id}">
                    ${unidad.info.map(inf=>{
                        return `<div class="contenido-info">
                                <div class="contenido-detalle">
                                    <img class="detCurso__botonplay" src="img/boton-de-play.png" alt="">
                                    <p class="detCurso__intro">${inf.titulo}</p>
                                </div>
                                <div class="contenido-detalle">
                                    <img class="detCurso__reloj1" src="img/reloj.png" alt="">
                                    <p class="detCurso__duracion1">${inf.duracion} min</p>
                                </div> 
                            </div>`
                    }).join('')}
                </div>`
            }).join("")}
        </div>
</article>

<article class="detCurso__art3">
    <h2>Docente</h2>
        <div class="detCurso__docente">
                <img src="img/ArmandaBarrera.jfif" alt="Armando Barrera">
            <div class="detCurso__infoDocente">
                <h3>Armando Barrera</h3>
                <div class="detCurso__estrellas">
                    <!--<label for="star"></label>
                    <input type="checkbox" name="estrella" id="star">-->
                    <!-- Estrella 1 -->
                    <button>
                        <img src="img/estrella.png" alt="">
                    </button>
                    <!--<label for="star"></label>
                    <input type="checkbox" name="estrella" id="star">-->
                    <!-- Estrella 2 -->
                    <button>
                        <img src="img/estrella.png" alt="">
                    </button>
                    <!--<label for="star"></label>
                    <input type="checkbox" name="estrella" id="star">-->
                    <!-- Estrella 3 -->
                    <button>
                        <img src="img/estrella.png" alt="">
                    </button>
                    <!--<label for="star"></label>
                    <input type="checkbox" name="estrella" id="star">-->
                    <!-- Estrella 4 -->
                    <button>
                        <img src="img/estrella.png" alt="">
                    </button>
                    <!--<label for="star"></label>
                    <input type="checkbox" name="estrella" id="star">-->
                    <!-- Estrella 5 -->
                    <button>
                        <img src="img/estrella.png" alt="">
                    </button>

                    
                </div>
        
                    <p>Seymour Skinner (realmente Armando Barreda) nació en Ciudad Capital en 1953 y es el director de la Escuela Primaria de Springfield, a la que asisten Bart y Lisa Simpson. Debido al nombre real del personaje pudiera debatirse que su descendencia es Armenia. Sirvió en el ejército como sargento y comandante de patrulla en la Guerra de Vietnam. Vive con su madre, Agnes.</p>
                
            </div>
        </div>
</article>
`

const cursos = JSON.parse(sessionStorage.getItem('cursos')) || [];
const asideCursosExtras = document.querySelector(".cursos-extras")

cursos.forEach((item)=>{
    if(item.id !== curso.id){
        asideCursosExtras.innerHTML+=`
        <div>
            <img src="${item.imagen}" alt="${item.title}">
            <h4>${item.title}</h4>
            <p class="duracionPrecio">${item.clases} clases/${item.horas}hs</p>
            <p>$${item.precio}</p>
            <a id="btnCambiarCurso-${item.id}" href="detallecurso.html" class="buttonUxResearch">Ver detalle</a>
        </div>
        `
    }
})

cursos.forEach((item)=>{
    if(item.id !== curso.id){
        const btnVerCurso = document.getElementById(`btnCambiarCurso-${item.id}`)
        btnVerCurso.addEventListener("click", ()=>{
             sessionStorage.setItem('curso', JSON.stringify(item));
        })
    }
})

curso.unidades.forEach((unidad)=>{
    console.log(unidad)
    const btnAbrirContenido = document.querySelector(`#btnAbrir-${unidad.id}`)
    btnAbrirContenido.addEventListener("click", ()=>{
        const contenido = document.getElementById(`contenido-${unidad.id}`)
        contenido.classList.toggle("abrir-contenido");
    })
})

const btnInscripcion = document.querySelector(".btn-inscripcion")
const modal = document.querySelector(".modal-dialog")
const modalBodyinscripcion = document.querySelector(".modal-body-inscripcion")
btnInscripcion.addEventListener("click", ()=>{
    modalBodyinscripcion.innerHTML = `
        <p>${curso.title}</p>
        <p>Duracion: ${curso.duracion}</p>
        <p>${curso.clases} clases por semana de ${curso.horas} horas</p>
    `
})