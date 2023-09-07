class producto {

    constructor(nombre, stock, precio) {

        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    getDatos() {
        console.log("PRODUCTO.");
        console.log("Nombre: ", this.nombre);
        console.log("Stock: ", this.stock);
        console.log("Precio: ", this.precio);
    }

    getStock(){
        if(this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }

    updateStock( cantidad ){
        if( this.stock >= cantidad){
            this.stock = this.stock - cantidad;
            return true
        }
        else{
            console.log("Tanto no tenemos");
            return false
        }
    }


}

let Productos = [];

for( let i=0 ; i < 3 ; i = i + 1){


    let nombre = prompt("Ingrese el nombre del producto");
    let stock = prompt("Ingrese el stcok del producto");
    let precio = prompt("Ingrese el precio del producto");

    precio = parseFloat(precio);

    let productoIngresado = new producto(nombre,stock,precio);

    Productos.push(productoIngresado);

}

for( let producto of Productos){

    if(producto.stock > 0){
        producto.getDatos();
    }
    
}

function buscarProducto( producto ) {
    return producto.nombre == compraUsuario;

}

let compraUsuario = prompt("Que producto deseas llevar?")

let productoElegido = Productos.find(buscarProducto);


if( productoElegido != undefined ){

    let cantidad = prompt("Cuantos quieres llevar?");
     cantidad = parseInt(cantidad);
     if( productoElegido.updateStock(unidades) ){

        console.log("Gracias por su compra");
    
     }
    



}
else{

    console.log("No maestro, ahi me mataste.");
}