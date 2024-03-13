# V. Funciones

Las funciones en TypeScript siguen la misma sintaxis que en JavaScript, pero pueden ser tipadas para mejorar la seguridad y la legibilidad del código.

## Tipado de parámetros y retorno
Puedes especificar los tipos de los parámetros y del valor de retorno de una función. Ejemplo:

```typescript
function sumar(a: number, b: number): number {
    return a + b;
}
```

En este ejemplo, la función sumar recibe dos parámetros de tipo number y devuelve un valor de tipo number.

## Funciones flecha

Las funciones flecha son una forma concisa de escribir funciones en TypeScript. Ejemplo:

```typescript
let sumar = (a: number, b: number): number => a + b;
```

La sintaxis es `(parametro:tipo, parametro:tipo): tipo de lo que retorna => expresión`. La función anterior es equivalente a la función sumar del ejemplo anterior.

## Parámetros opcionales y por defecto

En TypeScript, puedes hacer que los parámetros de una función sean opcionales o asignarles un valor por defecto. Ejemplo:

```typescript
function saludar(nombre: string, mensaje: string = 'Hola') {
    console.log(`${mensaje}, ${nombre}!`);
}
saludar('Juan'); // Hola Juan!
saludar('María', 'Buenos días'); // Buenos días María!
saludar(5, 'Buenos días'); // Buenos días María!

```

En este ejemplo, el parámetro mensaje es opcional y tiene un valor por defecto 'Hola'.

## Sobrecarga de funciones

En TypeScript, puedes definir múltiples firmas para una función, lo que se conoce como sobrecarga de funciones. Ejemplo:

```typescript
function areaCuadrado(lado: number) :number{
    return lado * lado;
}
function areaCuadrado(ancho: number, alto: number) :number{
    return ancho * alto;
}
```

La sobrecarga permite definir varias versiones de una misma función con diferentes tipos de parámetros y valores de retorno. En tiempo de compilación, TypeScript seleccionará la versión adecuada según los argumentos proporcionados.