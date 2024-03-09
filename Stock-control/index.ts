const numbers: number =  42;

const arraynumber: number[] = [1,2,3,4,5]

const palabra: string = "pablo"

arraynumber.push(2,3,4)

function sumar(a: number, b: number): number {
    return a + b;
}

console.log(`Numeros en el arreglo ${numbers}`)
// La sintaxis es `(parametro:tipo, parametro:tipo): tipo de lo que retorna => expresión`. La función anterior es equivalente a la función sumar del ejemplo anterior.
let suma = (a: number, b: number): number => a + b;


// ## Definición de interfaces
// Puedes definir una interfaz utilizando la palabra clave `interface`. Ejemplo:

interface Persona {
    nombre: string;
    edad: number;
    telefono?: string;
}

let juan: Persona = {
    nombre: 'Juan',
    edad: 30
    //El telefono es opcional y puede no tenerlo
};

//parametros de solo lectura <==
interface PersonaSoloLeida {
    readonly dni: string;
    nombre: string;
}

let maria: PersonaSoloLeida = {
    dni: '12345678A',
    nombre: 'María'
};
// Una vez que se defina la propiedad dni, no se puede modificar su valor
maria.dni = '98765432B'; // Error, la propiedad dni es de solo lectura


// En este ejemplo, la propiedad `dni` de la interfaz `PersonaSoloLeida` es de solo lectura, por lo que no se puede modificar después de la inicialización.


// Las interfaces en TypeScript también pueden tener propiedades indexadas, que permiten definir un tipo para acceder a las propiedades de un objeto utilizando una clave. Ejemplo:

// ```typescript
interface Diccionario {
    [clave: string]: string;
}

let colores: Diccionario = {
    rojo: 'red',
    azul: 'blue',
    verde: 'green'
};

console.log(colores['rojo']); // red

// ## Extensión de interfaces

// Puedes extender una interfaz existente para agregar o modificar propiedades y métodos. Ejemplo:

// ```typescript
interface Empleado extends Persona {
    salario: number;
}

let Pedro: Empleado = {
    nombre: 'Juan',
    edad: 30,
    salario: 30000
};