# IX. Módulos

Los módulos en TypeScript permiten organizar y reutilizar código al dividirlo en archivos separados. Esto ayuda a mantener el código más modular y facilita su mantenimiento y colaboración.

## Exportar e importar módulos
Para exportar elementos desde un módulo, puedes usar las palabras clave `export` junto con la declaración de las variables, funciones, clases, etc. Por ejemplo:

```typescript
// en moduloA.ts
export const PI = 3.1416;

// en moduloB.ts
import { PI } from './moduloA';
console.log(PI); // Esto imprimirá 3.1416

// en moduloC.ts
export * from './moduloA';
```

## Exportar e importar clases

Para exportar e importar clases, puedes utilizar la misma sintaxis que para otros elementos. Por ejemplo:

```typescript
// en moduloA.ts
export class Persona {
    constructor(public nombre: string) {}
}

// en moduloB.ts
import { Persona } from './moduloA';
const persona = new Persona("Juan");
console.log(persona.nombre); // Esto imprimirá "Juan"

// en moduloA.ts con exportación por defecto
export default class Persona {
    constructor(public nombre: string) {}
}

// en moduloB.ts con exportación por defecto
import Persona from './moduloA';
const persona = new Persona("Juan");
console.log(persona.nombre); // Esto imprimirá "Juan"
```

## Módulos y espacios de nombres

En TypeScript, puedes organizar módulos utilizando espacios de nombres (namespaces). Un espacio de nombres es una forma de agrupar lógicamente un conjunto de elementos en un ámbito global.

```typescript
// En este archivo se crea un módulo llamado `mensajes`
namespace mensajes {
    export function saludar(nombre: string) {
        console.log(`Hola, ${nombre}!`);
    }
    
    export function despedir(nombre: string) {
        console.log(`Adiós, ${nombre}!`);
    }
}

// En otro archivo se utiliza el módulo `mensajes`
import * as mensajes from './mensajes';
mensajes.saludar("Juan"); // Esto imprimirá "Hola, Juan!"
```

## Enums

Los enums (enumeraciones) en TypeScript permiten definir un conjunto de constantes con nombre. Por ejemplo:

```typescript
enum Color {
    Rojo,
    Verde,
    Azul
}
let miColorFavorito = Color.Verde;
console.log(miColorFavorito); // Imprime 1
```
