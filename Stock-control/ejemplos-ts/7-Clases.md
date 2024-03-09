# VII. Clases

Las clases en TypeScript permiten definir objetos con propiedades y métodos. Proporcionan una forma de modelar la estructura y el comportamiento de los objetos en tu aplicación.

## Definición de clases en TypeScript
Puedes definir una clase en TypeScript utilizando la palabra clave `class`. Ejemplo:
Existen varias formas de definir una clase en TypeScript. La forma más básica es la siguiente:

```typescript
class Persona {
    // Se pueden declarar los tipos de las propiedades y métodos aca
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let juan: Persona = new Persona('Juan', 30);
```

En este ejemplo, la clase `Persona` tiene dos propiedades: `nombre` y `edad`.

Otra forma de definir una clase en TypeScript es utilizando el modificador de acceso en el constructor. Ejemplo:

```typescript
class Persona {
    constructor(public nombre: string, private edad: number) {
        // ...
    }
}
```

## Propiedades y métodos

Las clases en TypeScript pueden tener propiedades y métodos. Las propiedades son variables que pertenecen a la clase, mientras que los métodos son funciones que pertenecen a la clase.

```typescript
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): void {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
```

En este ejemplo, `nombre` y `edad` son propiedades de la clase `Persona`, y `saludar` es un método de la clase.
En la clase `Persona` tenemos dos propiedades (`nombre` y `edad`) y un método (`saludar`), que tiene un tipo void porque la funcion en este caso no esta retornando nada.


## Constructores

Las clases en TypeScript pueden tener un constructor, que es un método especial que se ejecuta cuando se crea una instancia de la clase. El constructor se define utilizando la palabra clave `constructor`. Ejemplo:

```typescript
constructor(public nombre: string, private apellido: string, protected edad: number) {
    // ...
}
```
- El parámetro `nombre` es público (`public`) por lo que puede ser accedido desde fuera de la clase.
- El parámetro `apellido` es privado (`private`) por lo que solo puede ser accedido desde dentro de la clase.
- El parámetro `edad` es protegido (`protected`) por lo que solo puede ser accedido desde la clase y sus subclases.