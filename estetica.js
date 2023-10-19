
const productos = [
    {id: 1, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 2, nombre: "Coloración Evolution 6nb Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 3, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 4, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 5, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 6, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 7, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 8, nombre: "Coloración Evolution 2 Bruno Alfaparf x 60 ml", descripcion: "Fórmula enriquecida con Ácido Hialurónico, 100% cobertura de las canas, Duración inigualable", imagen: "https://bertoldi.com.ar/cdn/shop/files/Evolution_of_the_color_Platinum_Ash_Platinum_PF011230_Alfaparf_Milano_01_187a44b0-b7e2-4312-b34a-8597e64aeb42_1800x1800.png?v=1695475677", precio: 3880, categoria: "tintura"},
    {id: 9, nombre: "Serum Anti-Edad Pro Reti-C Idraet x 30g", descripcion: "SERUM PRO RETI-C TRATAMIENTO ANTIAGE INTEGRAL Hidrata dejando la piel suave e iluminada", imagen: "https://bertoldi.com.ar/cdn/shop/products/Idraet-CUIDADODELAPIEL-COSMETOLOGIAYMASAJES-IDRAETPRORETI-CSERUMANTI-EDAD30g-13905-BERTOLDI-368305_1800x1800.png?v=1607701995", precio: 7540, categoria: "face"},
    {id: 10, nombre: "Máscara Absolut Repair x 250 ml.", descripcion: "La máscara Absolut Repair ofrece la última experiencia de la reparación profunda profesional para el cabello dañado y seco. Los resultados se demuestran: recupera visiblemente el cabello dañado que resulta en 77% * menos daños en la superficie de la fibra.", imagen: "https://bertoldi.com.ar/cdn/shop/products/cellstemchico_1800x1800.png?v=1616436255", precio: 29000, categoria: "cabello"}
];


const agregarProductoAlCarrito = (producto) => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    console.log(carrito);
};


const renderProductos = () => {
    const contenidoElement = document.getElementById("contenido");

    productos.forEach((producto) => {
        const productoHTML = `
            <div class="col-md-4">
                <div class="card producto-card">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio.toFixed(2)}</p>
                        <button class="btn btn-primary agregar-al-carrito" data-id="${producto.id}">Agregar (+)</button>
                    </div>
                </div>
            </div>
        `;

        contenidoElement.innerHTML += productoHTML;
    });

   
    const botonesAgregar = document.querySelectorAll(".agregar-al-carrito");
    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", (event) => {
            const productoId = parseInt(event.target.getAttribute("data-id"));
            const productoSeleccionado = productos.find((producto) => producto.id === productoId);
            if (productoSeleccionado) {
                agregarProductoAlCarrito(productoSeleccionado);
                actualizarCarrito();
            }
        });
    });
};


const actualizarCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const numeroProductos = carrito.length;
    const botonCarrito = document.getElementById("botoncarrito");
    const badgeCarrito = botonCarrito.querySelector(".badge");
    console.log(carrito);

    badgeCarrito.textContent = numeroProductos.toString();
};

renderProductos();

actualizarCarrito();