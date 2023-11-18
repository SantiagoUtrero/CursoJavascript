let costoCantidad = 0
let costoKey = 0
let costoPais = 0
let cantidad = ""
let key = ""
let impuesto = ""

function saludar(){
    alert("hola, vamos a calcular tu proxima compra!")
}

function productos(){
    cantidad = prompt ("Ingresa la cantidad que quieres, 1 el minimo y 4 el maximo")

    costoCantidad = 0

    switch (cantidad){
        case "1":
            costoCantidad = 1 * costoKey
            break;
        case "2":
            costoCantidad = 2 * costoKey
            break;
        case "3":
            costoCantidad = 3 * costoKey
            break;
        case "4":
            costoCantidad = 4 * costoKey
            break;
    }

    if (costoCantidad <=0)
        alert ("Cantidad no valida")
    else
        alert (`La cantidad es ${cantidad} a ${costoCantidad} usd`)

    console.log(cantidad)
}

function Juego(){

    key = prompt ("Por favor escoja el monto que quiere; Giftcard 5, Giftcard 10, Giftcard 15, Giftcard 20")

    costoKey = 0

    switch (key){

        case "Giftcard 5":
            costoKey = 5
            break;
        case "Giftcard 10":
            costoKey = 10
            break;
        case "Giftcard 15":
            costoKey = 15
            break;
        case "Giftcard 20":
            costoKey = 20
            break;
    }

    if(costoKey <=0)
        alert("no valido")
    else
        alert(`La giftcard es de ${costoKey} usd `)

    console.log(key)
}

function Impuesto(){
    impuesto = prompt("Por favor ingrese su pais: Argentina, Brasl, Peru, Colombia")

    costoPais = 0

    switch(impuesto){

        case "Argentina":
            costoPais = 920
            break;
        case "Brasil":
            costoPais = 4,86
            break;
        case "Peru":
            costoPais = 3,98
            break;
        case "Colombia":
            costoPais = 4026
            break;
    }

    if(costoPais <=0)
        alert("no valido")
    else
        alert(`La conversion es de ${costoKey} usd `)

    console.log(key)
} 


function resultado(){
    alert(" Cantidad: " + cantidad + " Producto: " + key + " Conversion de 1 dolar: " + costoPais);
    result = costoCantidad * costoPais
    alert ("El total del pedido es de: " + result);
    gmail = prompt("Por favor ingrese su gmail para enviarle la giftcard")
}


function ejecutarPrueba(){
saludar();
Juego();
productos();
Impuesto();
resultado();
}

// ejecutarPrueba();


//segunda prueba

const carrito =  []
const products = [{id: 1, nombre: `gift 10 usd`, precio: 10},
                {id: 2, nombre: `gift 20 usd`, precio: 20},  
                {id: 3, nombre: `gift 30 usd`, precio: 30},
                {id: 4, nombre: `gift 40 usd`, precio: 40},
                {id: 5, nombre: `gift 50 usd`, precio: 50},
                {id: 6, nombre: `gift 60 usd`, precio: 60},
                {id: 7, nombre: `gift 70 usd`, precio: 70},
                {id: 8, nombre: `gift 80 usd`, precio: 80},
                {id: 9, nombre: `gift 90 usd`, precio: 90},
                {id: 10, nombre: `gift 100 usd`, precio:100}]

// se tiene que indicar en los parentesis la id a buscar

function buscar(id){
    let productoSeleccionado = products.find((products)=> products.id === id )

    if(id <=0)
        alert("no valido")
    else
        alert(`Tu id es ${id}`)
    console.table(productoSeleccionado)
}