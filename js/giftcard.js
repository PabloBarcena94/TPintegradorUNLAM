
const nombreDestinatarioInput = document.querySelector("#nombre");
const nombreDestinatarioText= document.querySelector(".giftcard-destinatario")
const btnConfirmar = document.querySelector(".btn-confirmar")
btnConfirmar.addEventListener("click", (e)=>{
    e.preventDefault();
})

console.log(nombreDestinatarioText)

nombreDestinatarioInput.addEventListener("input",()=>{
    if(nombreDestinatarioInput.value == ""){
        nombreDestinatarioText.innerHTML = "Destinatario"
    } else {
        nombreDestinatarioText.textContent = nombreDestinatarioInput.value
    }
})

const giftcardTexts = document.querySelectorAll(".giftcard-color")
const colores = document.getElementsByName("color")

colores.forEach((color)=>{
    if(color.checked){
        giftcardTexts.forEach((text)=>{
            text.style.color = color.value;
        })
    }
    color.addEventListener("click", ()=>{
        if(color.checked){
            giftcardTexts.forEach((text)=>{
                text.style.color = color.value;
            })
        }
    })
})

const tamanios = document.getElementsByName("tamanio")

tamanios.forEach((tamanio)=>{
    if(tamanio.checked){
        giftcardTexts.forEach((text)=>{
            text.style.fontSize = tamanio.value;
        })
    }
    tamanio.addEventListener("click", ()=>{
        if(tamanio.checked){
            giftcardTexts.forEach((text)=>{
                text.style.fontSize = tamanio.value;
            })
        }
    })
})


const montoInput = document.querySelector("#monto")
const montoText = document.querySelector(".giftcard-precio-numero")

montoText.textContent = montoInput.value;

montoInput.addEventListener("input",()=>{
    montoText.textContent = montoInput.value
})

montoInput.addEventListener("blur",()=>{
    if(parseInt(montoText.textContent) < 1000){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El monto no puede ser de menos de $1000'
        })
        montoInput.value = 1000;
        montoText.textContent = montoInput.value;

        setTimeout(()=>{
            Swal.close()
        }, 1500)
    }
})

const ubicaciones = document.getElementsByName("ubicacion");
const giftCardPrecio = document.querySelector(".giftcard-precio")

ubicaciones.forEach((ubicacion)=>{
    if(ubicacion.checked){
        giftCardPrecio.classList.add(`giftcard-precio`)
        giftCardPrecio.classList.add(`giftcard-precio-position-${ubicacion.value}`)
    }
    ubicacion.addEventListener("click",()=>{
        giftCardPrecio.classList.remove(...giftCardPrecio.classList)
        if(ubicacion.checked){
            giftCardPrecio.classList.add(`giftcard-precio`)
            giftCardPrecio.classList.add(`giftcard-precio-position-${ubicacion.value}`)
        }
    })
})


const fondos = document.getElementsByName("fondo");
const giftCard = document.querySelector(".giftcard")

fondos.forEach((fondo)=>{
    if(fondo.checked){
        giftCard.style.backgroundColor = `${fondo.value}`
    }
    fondo.addEventListener("click", ()=>{
        if(fondo.checked){
            giftCard.style.backgroundColor = `${fondo.value}`
        }
    })
})

const personalizacionContainer = document.querySelector(".personalizacion-container")
const inputsGiftCard = personalizacionContainer.querySelectorAll("input")
const formPersonalizacion = document.querySelector(".form-personalizacion")
const btnConfirmarGiftCard = document.querySelector(".btn-confirmar")
    btnConfirmarGiftCard.addEventListener("click", ()=>{
        if(nombreDestinatarioInput.value!==""){
            Swal.fire(
                'Se ha enviado la giftcard',
                `La GiftCard se ha enviado correctamente a ${nombreDestinatarioInput.value}`,
                'success'
              )
              nombreDestinatarioInput.value = "";
        }else{
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
            toastError("Introduce un nombre");
        }
    })
