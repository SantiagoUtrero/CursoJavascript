let costoCantidad = 0
let costoKey = 0
let costoEntrega = 0
let cantidad = ""
let key = ""
let entrega = ""



function saludar(){
    alert("hola, vamos a calcular tu proxima compra!")
}

function productos(){
    cantidad = prompt ("Ingresa la cantidad que quieres, 1 el minimo y 4 el maximo")

    costoCantidad = 0

    switch (cantidad){
        case "1":
            costoCantidad = 200
            break;
        case "2":
            costoCantidad = 400
            break;
        case "3":
            costoCantidad = 600
            break;
        case "4":
            costoCantidad = 800
            break;
    }

    if (costoCantidad <=0)
        alert ("Cantidad no valida")
    else
        alert (`La cantidad es ${cantidad} a ${costoCantidad} pesos`)

    console.log(cantidad)
}

function Juego(){

    key = prompt ("Por favor escoja el juego que desee; Hollow knight, Vampire survivors, Soulstone, Minecraft")

    costoKey = 0

    switch (key){

        case "Vampire survivors":
            costoKey = 100
            break;
        case "Soulstone":
            costoKey = 200
            break;
        case "Hollow knight":
            costoKey = 250
            break;
        case "Minecraft":
            costoKey = 350
            break;
    }

    if(costoKey <=0)
        alert("Juego no valido")
    else
        alert(`El juego es ${key} a ${costoKey} pesos`)

    console.log(key)
}

function Envio(){

    entrega = prompt ("Ahora ingrese su plataforma a la cual enviaremos la key: Xbox, Steam, Playstation, Switch")

    costoEntrega = 0

    switch (entrega){

        case "Xbox":
            costoEntrega = 500
            break;
        case "Steam":
            costoEntrega = 600
            break;
        case "Playstation":
            costoEntrega = 650
            break;
        case "Switch":
            costoEntrega = 800
            break;
    }

    if(costoEntrega <=0)
        alert("Plataforma no valida")
    else
        alert(`Se enviara a ${entrega} por ${costoEntrega} pesos`)

    console.log(entrega)
}

function resultado(){
    alert(" Cantidad de producto: " + costoCantidad + " Juego: " + costoKey + " Envio: " + costoEntrega);
    suma = costoCantidad + costoKey+ costoEntrega
    alert ("El total del pedido es de: " + suma);
}


function ejecutarPrueba(){
saludar();
Juego();
productos();
Envio();
resultado();
}

ejecutarPrueba();
