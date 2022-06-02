var nombre;
console.log(nombre);
nombre="Alex"
console.log(nombre);
var apellido;
apellido = "Pizarro";
console.log(apellido);

let nombre2;
nombre2="David";

const nombre1="Abarca";
//nombre1='Abarca';
console.log(nombre1);

document.querySelector('.contenido').innerHTML = `Hola me llamo: ${nombre} ${nombre2} ${apellido} ${nombre1}`;

const producto2='Monitor de 30 pulgadas';
console.log(producto2.trim());
console.log(producto2.slice(0, 7));
console.log(producto2.replace('Monitor', 'Pantalla'));
console.log(producto2.substring(0, 1));
console.log(producto2.charAt(0));

console.log(nombre1.repeat(3));
console.log(`${nombre} ${nombre1.repeat(2)}`);

const actividad='Estoy aprendiendo javascript';
console.log(actividad.split(' '));

console.log(actividad.toUpperCase());
console.log(actividad.toLowerCase());

const precio1='20.2'
const precio = 300;
const precio3=200;
console.log(precio);
console.log(precio.toString());

console.log(Number.parseInt(precio1));
console.log(Number.parseFloat(precio1));

console.log(precio1>precio3);

const producto = {
    nombre: "Aguacate",
    categoria: "Frutas",
    activo: true,
    borrar: true,
}

delete producto.borrar;
console.log(producto.categoria);
producto.nuevo = false;

function Producto (nombre, categoria) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.activo = true;
}

const producto3 = new Producto("Limon", 250);
console.log(producto3.nombre);


function Comida (plato, nombre){
    this.plato = plato;
    this.nombre = nombre;
    this.active = true;
}

const comida = new Comida ("desayuno", "Pinto con huevo");
console.log(comida.plato);



