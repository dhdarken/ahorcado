import { GUESSING_WORDS } from "./constants";
import { getRandomWordFromArray } from "./utils";

import "./style.css";

const spaces = document.getElementById("spaces");
const wrongLettersList = document.getElementById("wrong-letters-list");
const randomWord = getRandomWordFromArray(GUESSING_WORDS);
const userGuessedLetters = [];
const userMissedLetters = [];

const guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", () => {
  const input = document.getElementById("letter-guess");
  const inputValue = input.value;

  if (randomWord.includes(inputValue)) {
    userGuessedLetters.push(inputValue);
    refreshGuessingArea();
  } else {
    userMissedLetters.push(inputValue);
    const hangmanParts = document.getElementsByClassName("hangman-part");

    if (userMissedLetters.length > hangmanParts.length) {
      alert("Perdiste :( , la palabra era: " + randomWord);
      guessButton.setAttribute("disabled", true);
      return;
    }

    refreshWrongLettersArea();

    userMissedLetters.forEach((_, index) => {
      hangmanParts[index].style.display = "block";
    });
  }

  input.value = "";
});

function refreshGuessingArea() {
  spaces.innerHTML = `
  <div class="word-letters">${randomWord
    .split("")
    .map(
      (letter) =>
        `<span class="word-letters__letter">${
          userGuessedLetters.includes(letter) ? letter : ""
        }</span>`
    )
    .join("")}</div>
`;
}

function refreshWrongLettersArea() {
  wrongLettersList.innerHTML = `
  ${userMissedLetters.map((letter) => `<li>${letter}</li>`).join("")}
`;
}

refreshGuessingArea();
/**
 * PASOS
 *
 * 1. maquetar el html para que se muestre la figura de ahorcado (y esconder el cuerpo) done
 * 2. generar una lista de posibles palabras en un arreglo de JS "done"
 * 3. hacer una función que escoja una palabra de la lista al azar done
 * 4. maquetar el html para mostrar el numero de espacios que tiene la palabra done
 * 5. generar el html para la entrada de la letra que se va a adivinar (1 sola letra ) done
 * 6. buscar en la palabra las ocurrencias para la letra seleccionada done
 * 7. si la letra existe llenar los espacios que contienen la letra ingresada done
 * 8. sino existe la letra mostrar la siguiente parte del ahorcado y agregar la letra a la lista de letras usadas done
 * 9. definir el numero de intentos done
 * 10. ganas si descubres todos los espacios
 * 11. pierdes si se te agotan los intentos done
 *
 */
