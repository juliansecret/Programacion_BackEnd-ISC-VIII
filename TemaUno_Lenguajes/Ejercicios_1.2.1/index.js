// Ejercicios 1.2.1: Sintaxis basica de Node.js
// Alumno: Julian Alberto Morales Mena


console.log(`
    a. Este archivo integra multiples ejercicios de JavaScript
   cubriendo conceptos fundamentales como tipos de datos,
   funciones, objetos, modulos y programacion asincronica.
    \n`);

// b. DECLARACION DE TIPOS DE DATOS

console.log("\n[b] DECLARACION DE TIPOS DE DATOS\n");

const nombre = "Maria Gonzalez";              // String
const edad = 25;                              // Number
const esEstudiante = true;                    // Boolean
let valorIndefinido;                        // Undefined
const valorNulo = null;                       // Null
const persona = { nombre: "Juan", apellido: "Perez" }; // Object
const simbolo = Symbol("miSimbolo");          // Symbol
const numeroGrande = 9007199254740991n;       // BigInt

console.table({
    "String": nombre,
    "Number": edad,
    "Boolean": esEstudiante,
    "Undefined": valorIndefinido,
    "Null": valorNulo,
    "Object": JSON.stringify(persona),
    "Symbol": simbolo.toString(),
    "BigInt": numeroGrande.toString()
});

// c. ARRAY CON DIFERENTES TIPOS DE DATOS

console.log("\n[c] ARRAY CON DIFERENTES TIPOS DE DATOS\n");

let arrayMixto = [
    "JavaScript",                    // String
    42,                              // Number
    true,                            // Boolean
    { curso: "Programacion" },       // Object
    null                             // Null
];

console.log("Array mixto:", arrayMixto);
console.log("\nElementos del array:");
arrayMixto.forEach((elemento, index) => {
    console.log(`  [${index}]: ${elemento} (Tipo: ${typeof elemento})`);
});

// d. FUNCION POLINOMICA DE SEGUNDO GRADO

console.log("\n[d] FUNCION POLINOMICA DE SEGUNDO GRADO\n");
/*
   Funcion polinomica: f(a, b) = a² + 2ab + b²
   (Representa el cuadrado de un binomio)
*/
function polinomioSegundoGrado(a, b) {
    let resultado = Math.pow(a, 2) + (2 * a * b) + Math.pow(b, 2);
    console.log(`f(${a}, ${b}) = ${a}² + 2(${a})(${b}) + ${b}² = ${resultado}`);
    return resultado;
}

polinomioSegundoGrado(3, 4);
polinomioSegundoGrado(5, 2);

// e. FUNCION FLECHA CON MANIPULACION DE STRINGS

console.log("\n[e] FUNCION FLECHA CON MANIPULACION DE STRINGS\n");

const manipularCadena = (texto) => {
    let textoModificado = texto.toUpperCase().split('').reverse().join('');
    console.log(`Texto original: "${texto}"`);
    console.log(`Texto modificado (MAYUSCULAS e INVERTIDO): "${textoModificado}"`);
    return textoModificado;
};

manipularCadena("Hola Mundo");

// f. BUCLE CON NUMEROS EN ORDEN DESCENDENTE

console.log("\n[f] BUCLE CON NUMEROS EN ORDEN DESCENDENTE\n");

function imprimirDescendente() {
    console.log("Numeros del 10 al 1:");
    for (let i = 10; i >= 1; i--) {
        console.log(`  ${i}`);
    }
}

imprimirDescendente();

// g. OBJETO QUE REPRESENTA UNA INSTITUCION

console.log("\n[g] OBJETO QUE REPRESENTA UNA INSTITUCION\n");

let universidad = {
    nombre: "Universidad Tecnologica del Valle",
    tipo: "Publica",
    anioFundacion: 1985,
    numeroEstudiantes: 15000,
    carreras: ["Ingenieria", "Medicina", "Derecho", "Arquitectura"],
    ubicacion: {
        ciudad: "San Jose",
        pais: "Costa Rica"
    },
    acreditada: true
};

console.log("Objeto Universidad:");
console.log(universidad);
console.log("Carreras:", universidad.carreras.join(", "));

// h. METODO AGREGADO AL OBJETO

console.log("\n[h] METODO AGREGADO AL OBJETO\n");

// Agregamos un metodo que genera una descripcion completa de la institucion
universidad.obtenerDescripcion = function() {
    return `${this.nombre} es una institucion ${this.tipo.toLowerCase()} fundada en ${this.anioFundacion}. 
Cuenta con ${this.numeroEstudiantes.toLocaleString()} estudiantes y ofrece carreras como: ${this.carreras.join(', ')}. 
Esta ubicada en ${this.ubicacion.ciudad}, ${this.ubicacion.pais}. 
${this.acreditada ? 'Cuenta con acreditacion oficial.' : 'No esta acreditada.'}`;
};

console.log("Descripcion de la universidad:");
console.log(universidad.obtenerDescripcion());

// i. MODULO DE OPERACIONES MATEMATICAS

console.log("\n[i] MODULO DE OPERACIONES MATEMATICAS\n");

/*
   NOTA: Para usar modulos reales en Node.js necesitas:
   1. operacionesMatematicas.js (archivo del modulo)
   2. main.js (archivo que importa el modulo)
   
   Ejemplo de uso:
   const { sumar, restar, multiplicar, dividir } = require('./operacionesMatematicas');
*/

// Simulacion del modulo (en un archivo real estaria separado)
const operacionesMatematicas = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : "Error: Division por cero"
};

console.log("Operaciones matematicas:");
console.table({
    "5 + 3": operacionesMatematicas.sumar(5, 3),
    "10 - 4": operacionesMatematicas.restar(10, 4),
    "6 x 7": operacionesMatematicas.multiplicar(6, 7),
    "20 / 5": operacionesMatematicas.dividir(20, 5)
});

// j. OPERACION ASINCRONICA CON CALLBACK

console.log("\n[j] OPERACION ASINCRONICA CON CALLBACK\n");

function operacionAsincrona(numero, callback) {
    console.log(`Iniciando operacion asincrona con el numero ${numero}...`);
    
    // Simula una operacion que tarda 2 segundos
    setTimeout(() => {
        let resultado = numero * 2;
        callback(resultado);
    }, 2000);
}

// Funcion callback que maneja el resultado
function manejarResultado(resultado) {
    console.log(`Operacion completada. Resultado: ${resultado}`);
    console.log("\n" + "=".repeat(60));
    console.log("FIN DE LOS EJERCICIOS");
    console.log("=".repeat(60) + "\n");
}

// Ejecutar la operacion asincrona
operacionAsincrona(15, manejarResultado);

// k. CONVERSION DE STRING A NUMERO CON MANEJO DE ERRORES

console.log("\n[k] CONVERSION DE STRING A NUMERO CON MANEJO DE ERRORES\n");

function convertirCadenaANumero(cadena) {
    try {
        console.log(`Intentando convertir "${cadena}" a numero...`);
        
        if (typeof cadena !== 'string') {
            throw new TypeError("El parametro debe ser una cadena de texto");
        }
        
        let numero = Number(cadena);
        
        if (isNaN(numero)) {
            throw new Error(`"${cadena}" no es un numero valido`);
        }
        
        console.log(`✓ Conversion exitosa: "${cadena}" → ${numero}`);
        return numero;
        
    } catch (error) {
        console.error(`✗ Error: ${error.message}`);
        return null;
    } finally {
        console.log("Proceso de conversion finalizado\n");
    }
}

// Pruebas de conversion
convertirCadenaANumero("123");
convertirCadenaANumero("45.67");
convertirCadenaANumero("abc");
convertirCadenaANumero("12.34.56");