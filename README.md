[![banner.png](https://i.postimg.cc/GhVTTFtc/banner.png)](https://postimg.cc/cr7LV8fj)
# Proyecto n°2: Sistema de votación en JavaScript.

------------
<p>
    
En este proyecto se dará a conocer la construcción de un programa basado en un `sistema de votación` utilizando el lenguaje de programación en JavaScript implementado en programación funcional realizado en el editor de código `Visual Studio Code`. A continuación, se mostrarán los requisitos del proyecto y el paso a paso de cómo se realizó el `sistema de votación en JavaScript`.

</p>


------------

## Requisitos del proyecto a realizar.

------------

<p>
Se debe construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debe cumplir con los siguientes requisitos:
</p>

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.
- Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).

------------

## Solución en Programación Funcional (requisitos).

------------
<p> 
    
1. Permitir a los usuarios crear encuestas con opciones de respuesta.
2. Permitir a los usuarios votar en las encuestas.
3. Mostrar los resultados de las encuestas.
4. Almacenar los datos de las encuestas y los votos en una variable.
5. Almacenar los datos de las encuestas y los votos en una estructura de datos.
6. Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.
   
</p>

------------

## Realización del programa paso a paso.


------------


- Crear función de tipo flecha llamada `crearPregunta` que toma dos parámetros que son los siguientes: `textoPregunta` y `opciones`. Esta función devuelve un objeto con tres propiedades: `textoPregunta, opciones y resultados`. La tercera propiedad que es resultados en donde su valor es un objeto vacío `{ }` el cual se utilizara para almacenar las respuestas de los usuarios según la pregunta realizada.

```javascript
// Función flecha para poder crear una pregunta.
const crearPregunta = (textoPregunta, opciones)=> {
    return {
      textoPregunta: textoPregunta,
      opciones: opciones,
      resultados: {},
    };
  }
```

- Crear segunda función de tipo flecha llamada `crearEncuesta` el cual tiene un solo parámetro `preguntas` que devuelve un objeto con una sola propiedad `preguntas`. Esta función nos va a permitir agrupar varias preguntas en la encuesta en un objeto. 

```javascript
  // Función flecha para que contenga todas las preguntas de la encuenta.
  const crearEncuesta = (preguntas) => {
    return {
      preguntas: preguntas,
    };
  }
```

- Crear tercera función llamada `agregarVoto` se utilizará para agregar un voto a una opción de una pregunta realizada en la encuesta. Esta función toma dos parámetros `pregunta` y `opcionSelecionada`. Utilizaremos una condicional `if/else` anidados el cual en su primera condición verifica si el voto agregado se encuentra dentro de las opciones disponibles utilizando el método `includes`. Después tendremos una segunda condición el cual nos indica que si el voto es válido verifica si ya existen votos para esa opción y si ya hay votos existen se incrementa el contador de votos si no de lo contrario inicializa el contador de votos a 1. Luego se llama a la función `mostrarResultados` para mostrar los resultados actualizados y por último si la opción no es válida arroja un mensaje de error por consola.

```javascript
function agregarVoto(pregunta, opcionSeleccionada) {
    if (pregunta.opciones.includes(opcionSeleccionada)) {
      if (pregunta.resultados[opcionSeleccionada]) {
        pregunta.resultados[opcionSeleccionada]++;
      } else {
        pregunta.resultados[opcionSeleccionada] = 1;
      }
      mostrarResultados(pregunta);
    } else {
      console.log("La opción seleccionada no es válida.");
    }
  }
```
- Crear cuarta función llamada `mostrarResultados` que toma solo un parámetro que es `pregunta`(objeto que contiene la información de la pregunta y su resultado) y se utilizará para mostrar los resultados de una pregunta de la encuesta. En este bloque de código aplicaremos un bucle llamado `For...in ` que itera sobre todas las propiedades del objeto (pregunta.resultados) tenemos la variable `opcion` dentro del bucle el cual tomara el nombre de cada propiedad (cada opción de respuesta) en el objeto `pregunta.resultados` en cada iteración del bucle.

```javascript
function mostrarResultados(pregunta) {
    console.log(`La pregunta es "${pregunta.textoPregunta}":`);
    for (let opcion in pregunta.resultados) {
      console.log(`Su respuesta es ${opcion}: ${pregunta.resultados[opcion]}`);
    }
  }
```

- Crear quinta función llamada `votar` que toma como parámetro solo `preguntas`. Esta función se utiliza para que el usuario pueda seleccionar una opción para una pregunta de la encuesta mediante un `prompt` que contiene el texto de la pregunta y las opciones disponibles, luego se registra el voto del usuario invocando la función `agregarVoto`.

```javascript
 function votar(pregunta) {
    const opcionSeleccionada = prompt(`Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`);
    agregarVoto(pregunta, opcionSeleccionada);
  }
   
```
- Y por último se crea la sexta función `ejecutarPrograma` como su nombre lo señala coordina toda la estructura de la encuesta desde la creación de las preguntas hasta el proceso de votación. Primero se le solicita al usuario el número de preguntas que desea realizar por medio de un `prompt`, luego nuevamente se solicita al usuario que escriba el texto (preguntas) y las opciones. En esta parte del bloque de código utilizamos un método denominado `split` que se utiliza para dividir una cadena de texto en un array de subcadenas, usando comas (,) como delimitador. Además, también tenemos el método `push` que nos ayudara agregar el objeto pregunta al array de `preguntas`. En ultima instancia se crea un objeto de encuesta con el array de preguntas para luego permitir al usuario que vote en cada pregunta realizada en la encuesta iterado por un bucle `for` y un bucle `while` que se ejecutara hasta que el usuario decida dejar de votar. 

```javascript
  // Función para poder ejecutar la encuesta 
  function ejecutarPrograma() {
    const numeroDePreguntas = parseInt(prompt("¿Cuantas preguntas desea realizar?"))
    const preguntas = [];
   
    for (let i = 0; i < numeroDePreguntas; i++) {
      const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
      const opciones = prompt(`Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`).split(",");
      const pregunta = crearPregunta(textoPregunta, opciones);
      preguntas.push(pregunta);
    }
   
    const encuesta = crearEncuesta(preguntas);
   
    let seguirVotando = true;
    while (seguirVotando) {
      for (let i = 0; i < numeroDePreguntas; i++) {
        votar(encuesta.preguntas[i]);
      }
      seguirVotando = confirm("¿Desea seguir votando?");
    }
  }
  
  // LLamar a la función ejecutarPrograma 
  ejecutarPrograma();
```
La solución en conjunto final del `Sistema de votos en JavaScript` sería así:

```javascript
// Función flecha para poder crear una pregunta.
const crearPregunta = (textoPregunta, opciones)=> {
    return {
      textoPregunta: textoPregunta,
      opciones: opciones,
      resultados: {},
    };
  }
   
  // Función flecha para que contenga todas las preguntas de la encuenta.
  const crearEncuesta = (preguntas) => {
    return {
      preguntas: preguntas,
    };
  }
   
  // Función para agregar un voto a una pregunta en una encuesta
  function agregarVoto(pregunta, opcionSeleccionada) {
    if (pregunta.opciones.includes(opcionSeleccionada)) {
      if (pregunta.resultados[opcionSeleccionada]) {
        pregunta.resultados[opcionSeleccionada]++;
      } else {
        pregunta.resultados[opcionSeleccionada] = 1;
      }
      mostrarResultados(pregunta);
    } else {
      console.log("La opción seleccionada no es válida.");
    }
  }
   
  // Función para mostrar los resultados de una pregunta
  function mostrarResultados(pregunta) {
    console.log(`La pregunta es "${pregunta.textoPregunta}":`);
    for (let opcion in pregunta.resultados) {
      console.log(`Su respuesta es ${opcion}: ${pregunta.resultados[opcion]}`);
    }
  }
   
  // Función para que un usuario pueda votar en una pregunta
  function votar(pregunta) {
    const opcionSeleccionada = prompt(`Pregunta: ${pregunta.textoPregunta}\nSeleccione una opción (${pregunta.opciones.join(", ")}):`);
    agregarVoto(pregunta, opcionSeleccionada);
  }
   
  // Función para poder ejecutar la encuesta 
  function ejecutarPrograma() {
    const numeroDePreguntas = parseInt(prompt("¿Cuantas preguntas desea realizar?"))
    const preguntas = [];
   
    for (let i = 0; i < numeroDePreguntas; i++) {
      const textoPregunta = prompt(`Ingrese la pregunta ${i + 1}:`);
      const opciones = prompt(`Ingrese las opciones para la pregunta ${i + 1} separadas por coma (,):`).split(",");
      const pregunta = crearPregunta(textoPregunta, opciones);
      preguntas.push(pregunta);
    }
   
    const encuesta = crearEncuesta(preguntas);
   
    let seguirVotando = true;
    while (seguirVotando) {
      for (let i = 0; i < numeroDePreguntas; i++) {
        votar(encuesta.preguntas[i]);
      }
      seguirVotando = confirm("¿Desea seguir votando?");
    }
  }
   
  // LLamar a la función ejecutarPrograma 
  ejecutarPrograma();
```

------------


<p>
    
A continuación, veremos cómo se ve ejecutado el programa a medida que ingresamos las preguntas, opciones y resultados de la encuesta. 

</p>

<p>
1. Ingresar el número de preguntas a realizar.
</p>

[![inicio-preguntas.png](https://i.postimg.cc/mD4H2Cjm/inicio-preguntas.png)](https://postimg.cc/GBM2XBZD)

<p>
2. Ingresar el texto de la pregunta.
</p>

[![pregunta-encuesta.png](https://i.postimg.cc/4yJ2tKf5/pregunta-encuesta.png)](https://postimg.cc/LYbVF8ZY)

<p>
3. Ingresar las opciones separadas por comas (,).
</p>

[![opciones.png](https://i.postimg.cc/TwTJNZz2/opciones.png)](https://postimg.cc/KKsTRscC)

<p>
4. Votar por las opciones ingresadas.
</p>

[![respuesta.png](https://i.postimg.cc/QtMWThL7/respuesta.png)](https://postimg.cc/67D3ssp6)

<p>
    
5. Al final por medio de la creación de un archivo `index.html` se podrá ver en consola las preguntas, las respuestas y la cantidad de votos por cada opción seleccionada.
   
</p>

[![preguntas-y-respuestas.png](https://i.postimg.cc/wTN0W8MJ/preguntas-y-respuestas.png)](https://postimg.cc/3dKXRqgJ)



