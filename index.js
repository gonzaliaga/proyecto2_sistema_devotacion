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