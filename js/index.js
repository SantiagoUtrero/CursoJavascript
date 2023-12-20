// slider

let currentSlide = 0;
        const slides = document.querySelectorAll('.slider-img');
        const totalSlides = slides.length;

        function showSlide(index) {
            if (index >= totalSlides) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = index;
            }

            slides.forEach((slide) => {
                slide.style.display = 'none';
            });

            slides[currentSlide].style.display = 'block';
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        setInterval(nextSlide, 3000);

//carrito

const contenidoTienda = document.getElementById("contenidoTienda");
const verCarrito = document.getElementById("verCarrito");
const modalContenido = document.getElementById("modalContenido");

let carrito = [];

Productos.forEach((producto)=> {
    let contenido = document.createElement("div");
    contenido.className = "cards"
    contenido.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>${producto.precio} $</p>
    `

    contenidoTienda.append(contenido);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "button-comprar"

    comprar.addEventListener("click", () => {
        carrito.push({
            id : producto.id,
            img : producto.img,
            nombre : producto.nombre,
            precio : producto.precio
        });
        console.log(carrito)
    })
    contenido.append(comprar);
});

verCarrito.addEventListener("click", () => {
    modalContenido.innerHTML = "";
    modalContenido.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h3 class="modal-header-titulo">Checkout</h3>
    `;
    modalContenido.append(modalHeader);

    const modalButton = document.createElement("a");
    modalButton.innerText = "❌";
    modalButton.className = "button-modal";

    modalButton.addEventListener("click", () => {
        modalContenido.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((producto) => {
    let carritoContenido = document.createElement("div");
    carritoContenido.className = "carrito-contenido"
    carritoContenido.innerHTML = `
    <img src="${producto.img}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio} $</p>
    `;
    modalContenido.append(carritoContenido);
    })

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: ${total} $`
    modalContenido.append(totalCompra);
})