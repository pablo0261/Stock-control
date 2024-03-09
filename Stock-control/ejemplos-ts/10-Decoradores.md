# X. Decoradores

Los decoradores son una característica experimental de TypeScript que permite agregar metadatos a clases, métodos, propiedades o parámetros de funciones.

## Creación de un decorador
Puedes crear un decorador utilizando una función regular que tome tres parámetros opcionales: el objetivo, el nombre de la propiedad o el método, y el descriptor de la propiedad o el método. Por ejemplo:

```typescript
function miDecorador(target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
    // Lógica del decorador aquí
}

class MiClase {
    @miDecorador
    miMetodo() {
        // ...
    }
}
```

En este ejemplo, `miDecorador` es un decorador que toma tres parámetros: `target`, `nombrePropiedad` y `descriptor`. El decorador se aplica a `miMetodo` de la clase `MiClase`.

## Uso de un decorador

Puedes aplicar un decorador a una clase, un método, una propiedad o un parámetro de función utilizando la sintaxis `@nombreDelDecorador`. Por ejemplo:

```typescript
@miDecorador
clase MiClase2 extends MiClase {}
```

En este ejemplo, `miDecorador` se aplica a la clase `MiClase2`.

## Uso común de decoradores

Los decoradores se pueden utilizar para muchas cosas, como agregar funcionalidades adicionales a una clase, validar valores de propiedades, registrar información de métodos, entre otros. Por ejemplo:

```typescript
function validar(target: any, nombrePropiedad: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function(...args: any[]) {
        for (let arg of args) {
            if (typeof arg !== 'number') {
                throw new Error(`El valor de ${nombrePropiedad} debe ser un número.`);
            }
        }
        
        return metodoOriginal.apply(this, args);
    };
}

class Calculadora {
    @validar
    sumar(a: number, b: number) {
        return a + b;
    }
}
```

En este ejemplo, `@validar` es un decorador que valida que los argumentos de `sumar` sean números. Si alguno de los argumentos no es un número, se lanza un error.