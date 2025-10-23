// const nombre = "Carolina";
// const notas = [3.5, 2.0, 2.8];

// const promedio = (notas[0] + notas[1] + notas[2]) / 3;

// console.log(`Aprendiz: ${nombre}`);
// console.log(`Promedio: ${promedio.toFixed(2)}`);
// console.log(`Estado: ${promedio >= 3.5 ? "Aprobado" : "No aprobado"}`);


// const aprendiz = {
// nombre: "Carolina",
// apellido: "Gómez",
// ficha: 3223874,
// programa: "ADSO",
// activo: true
// };
// // Acceder a propiedades
// console.log(aprendiz.nombre);
// console.log(aprendiz["ficha"]);

// const aprendices = [
// "Carolina",
// "Gustavo",
// "Matías",
// "Lina"
// ];
// // Acceder por índice (empieza en 0)
// console.log(aprendices[0]); //

// // Propiedades útiles
// console.log(aprendices.length); 
// // Agregar elementos
// aprendices.push("Andrea");
// aprendices.unshift("Pedro");

// console.log(aprendices);


// const Numeros = [1, 2, 3, 4, 5];

// const dobles = Numeros.map(n => n * 2);
// console.log(dobles);



// const Edad = 8;
// const mensaje = Edad >= 18
// ? "mayor de edad"
// : "Menor de edad";
// console.log(mensaje);

// const aprendiz = {
// nombre: "Gustavo",
// ficha: 3223874,
// programa: "ADSO"
// };
// console.log(aprendiz.nombre);
// console.log(aprendiz["ficha"]);
// // esto es para modificar Con el "punto ."
// aprendiz.edad = 22;
// aprendiz.programa = "Desarrollo Web";
// console.log(aprendiz);


// const aprendiz = {
// nombre: "Carolina",
// ficha: 3223876,
// saludar: function() {
// console.log(`Hola, soy ${this.nombre}`);
// },
// mostrarInfo: function() {
// console.log(`Ficha: ${this.ficha}`);
// }
// };

// aprendiz.saludar();
// aprendiz.mostrarInfo();

const aprendiz = {
nombre: "Carolina",
saludar() {
console.log(`Hola, soy ${this.nombre}`);
}
};

aprendiz.saludar(); 