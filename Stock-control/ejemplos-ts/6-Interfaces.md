# VI. Interfaces

Las interfaces en TypeScript permiten definir la estructura de un objeto, especificando qué propiedades y métodos debe tener.

## Definición de interfaces
Puedes definir una interfaz utilizando la palabra clave `interface`. Ejemplo:

```typescript
interface Persona {
    nombre: string;
    edad: number;
}

let juan: Persona = {
    nombre: 'Juan',
    edad: 30
};
```

En este ejemplo, se define una interfaz llamada `Persona` que tiene dos propiedades: `nombre` de tipo `string` y `edad` de tipo `number`. Luego, se declara una variable `juan` que cumple con la estructura de la interfaz `Persona`.

Una interfaz es como un contrato que describe las propiedades y los tipos que un objeto debe tener para cumplir con esa interfaz.

## Propiedades opcionales, de solo lectura e indexadas

Las interfaces en TypeScript pueden tener propiedades opcionales y de solo lectura.

### Propiedades opcionales

Puedes hacer que una propiedad de una interfaz sea opcional añadiendo el símbolo `?` después del nombre de la propiedad. Ejemplo:

```typescript
interface Animal {
    nombre: string;
    raza: string;
    telefono?: string;
}
```

En este ejemplo, la propiedad `telefono` de la interfaz `Animal` es opcional, por lo que un objeto que cumpla con la interfaz `Animal` puede tener o no tener esa propiedad.

### Propiedades de solo lectura

Puedes hacer que una propiedad de una interfaz sea de solo lectura añadiendo la palabra clave `readonly` antes del nombre de la propiedad. Ejemplo:

```typescript
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
```

En este ejemplo, la propiedad `dni` de la interfaz `PersonaSoloLeida` es de solo lectura, por lo que no se puede modificar después de la inicialización.

### Propiedades indexadas

Las interfaces en TypeScript también pueden tener propiedades indexadas, que permiten definir un tipo para acceder a las propiedades de un objeto utilizando una clave. Ejemplo:

```typescript
interface Diccionario {
    [clave: string]: string;
}

let colores: Diccionario = {
    rojo: 'red',
    azul: 'blue',
    verde: 'green'
};

console.log(colores['rojo']); // red
```

En este ejemplo, la interfaz `Diccionario` define un tipo para acceder a las propiedades de un objeto utilizando una clave de tipo `string`.
La interfaz `Diccionario` permite que las claves sean cualquier cadena y que los valores sean de tipo `string`.

## Métodos en interfaces

Además de propiedades, las interfaces en TypeScript también pueden definir métodos. Ejemplo:

```typescript
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

let calculadora: Calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    }
};
```

En este ejemplo, la interfaz `Calculadora` define dos métodos: `sumar` y `restar`. Luego, se declara un objeto `calculadora` que cumple con la estructura de la interfaz `Calculadora` y proporciona implementaciones para los métodos definidos en la interfaz.

## Extensión de interfaces

Puedes extender una interfaz existente para agregar o modificar propiedades y métodos. Ejemplo:

```typescript
interface Empleado extends Persona {
    salario: number;
}

let juan: Empleado = {
    nombre: 'Juan',
    edad: 30,
    salario: 30000
};
```

## Interfaces y clases

Las interfaces pueden ser utilizadas con las clases en TypeScript. En este caso, una clase que implementa una interfaz debe cumplir con la estructura definida por la interfaz.

```typescript
class Persona implements PersonaInterface {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

En este ejemplo, la clase `Persona` implementa la interfaz `PersonaInterface`, por lo que debe tener las propiedades `nombre` y `edad` definidas en la interfaz.

## Conclusiones

Las interfaces en TypeScript son una herramienta poderosa para definir la estructura de los objetos y mejorar la seguridad y la legibilidad del código. 

Permiten especificar qué propiedades y métodos debe tener un objeto, así como propiedades opcionales, de solo lectura y métodos. 

Además, las interfaces pueden ser extendidas y utilizadas con las clases para garantizar que un objeto cumpla con cierta estructura.