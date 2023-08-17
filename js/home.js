const cursosContainer = document.querySelector(".cursos");

const cursos = [{
    id: 1,
    title: "Diseño UX/UI",
    contenido: ["Diseño UX/UI", "Diseño UX/UI Avanzado", "UX Writing", "UX Research"],
    duracion: "26 semanas",
    clases: 2,
    horas: 2,
    precio: 5000,
    descripcion:"En este curso aprenderás todos los pasos para crear una página web increíble. En la primera etapa, podrás utilizar Photoshop e Illustrator, las dos herramientas más usadas para diseño. Luego, en los cursos de Diseño UX/UI básico y avanzado, aprenderás a diseñar páginas pensadas para el usuario y su comportamiento. Por último, en el curso de Desarrollo Web aprenderás a codear esas páginas con HTML & CSS.",
    imagen: "img/duxui-img.jpg",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion al Diseño UX/UI",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "Desarrollo de UI",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Desarrollo de UX",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
},
{
    id: 2,
    title: "Marketing Digital",
    contenido: ["MD: Community Manager", "MD: Community Publicidad", "MD: en Redes Avanzadas", "Growth Marketing"],
    duracion: "27 semanas",
    clases: 2,
    horas: 2,
    precio: 10000,
    descripcion:"Aprende los principales conceptos del Marketing Digital. Utiliza los diferentes canales digitales y técnicas avanzadas para desarrollar estrategias de comunicación efectivas. Aumenta el impacto de tus campañas y alcanza tus objetivos de negocio.",
    imagen: "img/md-img.jpg",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion al Marketing Digital",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "Brief y Plan de Marketing I",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Plan de Marketing II",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
},
{
    id: 3,
    title: "Product Marketing",
    contenido: ["MD: Community Manager", "Product Manager", "Customer Experience", "Inbound Marketing"],
    duracion: "27 semanas",
    clases: 2,
    horas: 2,
    precio: 9600,
    descripcion:"En este curso incorporarás una visión estratégica del marketing a partir de la cual podrás tener una perspectiva global del mercado y producto. A partir de los mejores y más actuales recursos y prácticas fidelizar al cliente de nuestra marca.",
    imagen: "img/pm-img.jpg",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion Product Marketing",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "Mercado I",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Mercado II",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
},
{
    id: 4,
    title: "Product Design",
    contenido: ["Diseño UX/IU", "Prototipado (Figma y Adobe XD)", "UI", "Product Manager"],
    duracion: "38 semanas",
    clases: 2,
    horas: 2,
    precio: 15000,
    descripcion:"En este curso aprenderás como idear, planear y diseñar proyectos en entornos virtuales. Desde su concepción inicial hasta su posterior implementación siendo capaz de liderar grupos de trabajo eficaces.",
    imagen: "img/pd-img.png",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion Product Design",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "Diseño I",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Diseño II",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
},
{
    id: 5,
    title: "Desarrollo de Apps",
    contenido: ["Desarrollo Web", "JavaScript", "React Js", "Desarrollo de Aplicaciones Moviles"],
    duracion: "40 semanas",
    clases: 2,
    horas: 2,
    precio: 20000,
    descripcion:"En este curso aprenderás los conocimientos y bases para crear aplicaciones bridge con capacidad de despliegue tanto para Android como iOS, utilizando React Native, Javascript y un software de prototipado como Sketch o Adobe Xd. Te conectarás a APIs y aprenderás la capacidad de sync con Firebase o Realm db. Al finalizar este curso estarás en condiciones de desarrollar, implementar y desplegar tu propia aplicación móvil.",
    imagen: "img/dw-img.jpg",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion al Desarrollo de Apps",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "React Native",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Devices Features",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
},
{
    id: 6,
    title: "Marketing en Redes",
    contenido: ["MD: Community Manager", "MD: Community Publicidad", "Fotografía para RRSS", "Copywriting"],
    duracion: "26 semanas",
    clases: 2,
    horas: 2,
    precio: 5000,
    descripcion:"En este curso aprenderás cómo crear un plan de Marketing Digital. Utilizararás herramientas de gestión para negocios digitales. Desarrollarás estrategias de contenidos y moderación. Identificarás las principales métricas y sabrás cómo realizar reportes para optimizar los resultados. Aprenderás a generar contenido optimizado para Redes Sociales y aplicarás los principios del copywriting para la redacción de textos potenciarlos.",
    imagen: "img/mer-img.png",
    unidades:[
      {
        id:1,
        titulo:"Introduccion",
        info: [
          {
            titulo: "Introduccion al Marketing en Redes",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:2,
        titulo:"Unidad 2",
        info: [
          {
            titulo: "Community Manager & Publicidad",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      },
      {
        id:3,
        titulo:"Unidad 3",
        info: [
          {
            titulo: "Fotografía para RRSS",
            duracion: 30,
          },
          {
            titulo: "Examen",
            duracion: 60,
          }
        ]
      }
    ]
}
]

sessionStorage.setItem('cursos', JSON.stringify(cursos));

cursos.forEach(curso =>{
    const {contenido} = curso
    const contenidoMapeado = contenido.map(item=>`<li>${item}</li>`)
    cursosContainer.innerHTML += `
    <div class="curso">
    <div>
      <h3 class="titulo-item">${curso.title}</h3>
      <p>Incluye ${contenido.length} cursos</p>
      <ul>
        ${contenidoMapeado.join("")}
      </ul>
      <p class="cursos__duracion">
        ${curso.duracion}/${curso.clases} clases semanales de ${curso.horas} hs
      </p>
      <p class="cursos__cuota">Hasta 12 cuotas sin interés</p>
      <p class="cursos__precio">$${curso.precio}</p>
      <a href="detallecurso.html" id="a-${curso.id}" class="cursos__verCurso">Ver curso</a>
      <button id="btn-${curso.id}" class="boton-item">Agregar al carrito</button>
    </div>
  </div>
    `
})

const cursoClickeado = JSON.parse(sessionStorage.getItem('curso')) || {};

cursos.forEach((curso)=>{
    const btnAgregarCarrito = document.getElementById(`btn-${curso.id}`)
    btnAgregarCarrito.addEventListener("click", (e)=>{
        e.preventDefault();
        const existeElemento = carrito.some(elemento => elemento.id === curso.id);
        if (!existeElemento) {
            carrito.push(curso);
            Toastify({
                text: "Curso agregado al carrito",
                className: "info",
                style: {
                  background: "greenyellow",
                  color:"green"
                }
              }).showToast();
              renderizarCarrito()
        } else{
            Toastify({
                text: "El curso ya se encuentra en el carrito",
                className: "info",
                style: {
                  background: "red",
                  color:"rose"
                }
              }).showToast();
        }
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        contadorCarrito.innerHTML = `${carrito.length}`
    })
    const btnVerCurso = document.getElementById(`a-${curso.id}`)
    btnVerCurso.addEventListener("click", ()=>{
        sessionStorage.setItem('curso', JSON.stringify(curso));
    })
})









