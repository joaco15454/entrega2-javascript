const pizzas = [
    {
        "id": 1,
        "nombre": "muzzarella",
        "ingredientes":[
            "salsa","queso muzzarella","oregano"
        ],
        "precio": 1000
    },
    {
        "id": 2,
        "nombre": "fugazzeta",
        "ingredientes":[
            "salsa","queso muzzarella","cebolla","oregano"
        ],
        "precio": 1200
    },
    {
        "id": 3,
        "nombre": "napolitana",
        "ingredientes":[
            "salsa","queso muzzarella","tomate","ajo","oregano"
        ],
        "precio": 1100
    },
    {
        "id": 4,
        "nombre": "jamon y morron",
        "ingredientes":[
            "salsa","queso muzzarella","jamon","morron"
        ],
        "precio": 1150
    },
    {
        "id": 5,
        "nombre": "provolone",
        "ingredientes":[
            "salsa","queso provolone","oregano"
        ],
        "precio": 1400
    },
    {
        "id": 6,
        "nombre": "roquefort",
        "ingredientes":[
            "salsa","queso roquefort","oregano"
        ],
        "precio": 1400
    }                
]
const valorInput = document.getElementById('select_id')
const valorButton = document.getElementById('boton_id')
const containerOculto= document.getElementById('container__oculto')
const tituloPizza= document.getElementById('pizza_nombre')
const precioPizza=document.getElementById('pizza_precio')
const textoError= document.getElementById('texto_error')
/*valorButton.addEventListener("click",
    function () {
        console.log(valorInput.value) }) */

       /* 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
        👉 Renderizar en el contenedor un h2 con el nombre y en un h3 con el precio 
    de la pizza cuyo id coincida con el numero ingresado en el input. */ 


    const coincidenciaID = function(valorIngresado) {
       const resultadoFinal=pizzas.find(numeroID => numeroID.id === parseInt(valorIngresado))
        return resultadoFinal
    } 
valorButton.addEventListener("click",
    function () {
        console.log(valorInput.value)
        if (coincidenciaID(valorInput.value)) {
            containerOculto.classList.remove("oculto")  /*Algo que no tengo en claro aca es si todo lo de agregar y sacar clases lo tendria que hacer en una funcion aparte y ejecutarla dentro del if, si me lo pueden aclarar en la correccion porfi */
            textoError.classList.add("oculto")
            tituloPizza.classList.remove("oculto")
            precioPizza.classList.remove("oculto")
            tituloPizza.textContent= "La pizza que ha elegido es la " + coincidenciaID(valorInput.value).nombre
            precioPizza.textContent= "Su precio es tan solo de: " + coincidenciaID(valorInput.value).precio + " pesos"
        }if (!coincidenciaID(valorInput.value)){
            containerOculto.classList.remove("oculto")
            tituloPizza.classList.add("oculto")
            precioPizza.classList.add("oculto")
            textoError.classList.remove("oculto")
            textoError.textContent="¡Error, el id ingresado no coincide con ninguna pizza!"
        }if (valorInput.value.length ==0 ) {
            containerOculto.classList.remove("oculto")
            textoError.classList.remove("oculto")
            textoError.textContent="¡Error, no ha ingresado ningun numero!"
        }
         })
        
        
/*if (coincidenciaID(valorInput.value)) {
    containerOculto.classList.remove("hiden")
    tituloPizza.textContent= coincidenciaID(valorInput.value).nombre
    precioPizza.textContent= coincidenciaID(valorInput.value).precio
}else {
    console.log("chau") /**Aca tendria que poner el error */
