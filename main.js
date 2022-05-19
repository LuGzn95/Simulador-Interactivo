function Cliente(nombre, telefono, direccion) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.direccion = direccion;
}

function Articulo(id, nombre, precio, destacado, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.destacado = destacado;
    this.imagen = imagen;
}

function Pedido() {
    this.cliente = undefined;
    this.items = [];
    this.total = 0;
    let fecha = new Date();
    fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    this.fecha = fecha;
}

function preguntarEdad() {
    let edad = localStorage.getItem("edad");
    if (edad == null) {
      $("#modal-edad").modal("show");
    } else {
      validarEdad(edad);
    }
}

function guardarEdad() {
    const edad = $("#validar-edad").val();
    if (edad.trim() != "") {
      localStorage.setItem("edad", edad);
      $("#modal-edad").modal("hide");
      validarEdad(edad);
    }
}
  
function validarEdad(edad) {
    if (edad < 18) {
      $("#modal-menor").modal("show");
      var formulario = document.getElementById("customer");
    }
}

function cargarDatos(productos, articulos) {
    productos.forEach((producto, indice) => {
        let articulo = new Articulo(
          producto.id,
          producto.nombre,
          producto.precio,
          producto.destacado,
          producto.imagen
        );
        articulos.push(articulo);
        
        if (articulo.destacado) {
          generarHtmlProducto(articulo);
        }
        cargarSelect(articulo);
        if (indice == 0) {
          $("#precio").val(articulo.precio);
        }
    });
}
function seleccionarProducto(productoId) {
    let posicion = $("#customer").offset().top;
    $("html, body").animate({ scrollTop: posicion }, 1000);
    $("#bebidas").val(productoId).change();
}

function cargarSelect(producto) {
    let option = `<option value="${producto.id}">${producto.nombre}</option>`;
    $("#bebidas").append(option);
}

function agregarPrecio() {
    $("#error").html("");
    let valor = $("#bebidas option:selected").val();
    let encontrado = articulos.find((articulo) => {
      return articulo.id == valor;
    });
    $("#precio").val(encontrado.precio);
    $("#cantidad").val("");
    $("#subtotal").val("");
}
