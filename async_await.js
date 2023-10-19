const axios = require("axios");

const apiUrl = "https://opentdb.com/api.php?amount=7&category=18&difficulty=easy&type=boolean";
const amountOfQuestions = 7; // Cantidad de preguntas que deseas obtener

async function obtenerPreguntasTrivia() {
  try {
    const respuesta = await axios.get(apiUrl, {
      params: {
        amount: amountOfQuestions,
        type: "multiple" // Puedes ajustar el tipo de pregunta según tus preferencias
      }
    });

    const preguntas = respuesta.data.results;
    console.log("Preguntas de Trivia:");
    preguntas.forEach((pregunta, index) => {
      console.log(`Pregunta ${index + 1}: ${pregunta.question}`);
      console.log(`Respuestas:`);
      pregunta.incorrect_answers.forEach((respuesta, i) => {
        console.log(`  Opción ${i + 1}: ${respuesta}`);
      });
      console.log(`  Opción Correcta: ${pregunta.correct_answer}`);
      console.log("----------");
    });
  } catch (error) {
    console.error(`Error al obtener preguntas de trivia: ${error.message}`);
  }
}

obtenerPreguntasTrivia();
