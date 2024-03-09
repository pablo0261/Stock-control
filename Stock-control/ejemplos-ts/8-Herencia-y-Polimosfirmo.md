# VIII. Herencia y polimorfismo

En TypeScript, puedes usar la herencia para crear una jerarquía de clases donde una clase hija hereda propiedades y métodos de una clase padre. También puedes utilizar el polimorfismo para permitir que las clases hijas implementen métodos de manera diferente a las clases padre.

## Extender clases
Puedes extender una clase utilizando la palabra clave `extends`. Ejemplo:

```typescript
class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    hacerSonido(): void {
        console.log("Haciendo sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido(): void {
        console.log("Guau guau");
    }
}

class Gato extends Animal {
    hacerSonido(): void {
        console.log("Miau");
    }
}
```

En este ejemplo, la clase `Perro` extiende la clase `Animal` y sobrescribe el método `hacerSonido` para hacer un sonido específico de un perro. De manera similar, la clase `Gato` extiende la clase `Animal` y sobrescribe el método `hacerSonido` para hacer un sonido específico de un gato.

## Polimorfismo

El polimorfismo es la capacidad de una clase para tomar diferentes formas. En TypeScript, puedes utilizar el polimorfismo para permitir que las clases hijas implementen métodos de manera diferente a las clases padre.

```typescript
let animales: Animal[] = [];
animales.push(new Perro("Fido"));
animales.push(new Gato("Garfield"));

animales.forEach(animal => {
    animal.hacerSonido(); // Invoca al método hacerSonido() específico de cada animal
});
```

En este ejemplo, aunque `animales` contiene objetos de diferentes tipos (Perro y Gato), el método `hacerSonido()` invocado en cada uno ejecutará la implementación específica de cada clase.

## Sobrescribir métodos

Cuando una clase hija extiende una clase padre, puede sobrescribir los métodos de la clase padre para proporcionar una implementación específica. Esto se conoce como sobrescribir métodos. Ejemplo:

```typescript
class Rectangulo {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado: number) {
        super(lado, lado);
    }
}
```

En este ejemplo, la clase Cuadrado sobrescribe el método calcularArea() de la clase Rectangulo para calcular el área de un cuadrado de manera específica.

