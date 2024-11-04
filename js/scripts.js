/*Llamar a los elementos*/
const barraElement = document.getElementById("barra");
const passElement = document.getElementById("password");
const buttonElement = document.getElementById("buttonpass");
const lengthElement = document.getElementById("length");
const checkbox1Element = document.getElementById("checkbox1");
const checkbox2Element = document.getElementById("checkbox2");
const checkbox3Element = document.getElementById("checkbox3");
const checkbox4Element = document.getElementById("checkbox4");

/*Funciones Callback*/

/*Mostrar el valor de la barra en la consola*/
const print = (event) => {
  console.log(event.target.value);
};

/*Actualizar la longitud en el texto "LENGTH"*/
const printLength = () => {
  lengthElement.textContent = `LENGTH: ${barraElement.value}`;
};

/*constantes*/

const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minus = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]:;<>,.?/";

/*Generar una letra aleatoria"*/
let characters = "";

/* Primero generamos la lista de la cual va a tomar los caracteres aleatorios.
Se usa el mismo evento que el de activar el boton, porque no puede haber dos eventos iguales. Un elemento puede tener distintos eventos(click, mouseover...) pero no dos clicks con distintas funciones conectadas */

const selection = () => {
  characters = "";
  if (checkbox1Element.checked) {
    characters = characters + mayus;
  }
  if (checkbox2Element.checked) {
    characters = characters + minus;
  }
  if (checkbox3Element.checked) {
    characters = characters + numbers;
  }
  if (checkbox4Element.cheked) {
    characters = characters + symbols;
  }
  console.log(characters);
};

/*Conectar los checkbox con el botón*/
const activebotton = () => {
  if (
    checkbox1Element.checked ||
    checkbox2Element.checked ||
    checkbox3Element.checked ||
    checkbox4Element.checked
  ) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
  selection();
};

/*eventos de checkbox*/
checkbox1Element.addEventListener("click", activebotton);
checkbox2Element.addEventListener("click", activebotton);
checkbox3Element.addEventListener("click", activebotton);
checkbox4Element.addEventListener("click", activebotton);

/*Generar el caracter aleatorio*/

const randomCharacter = () => {
  return characters[Math.floor(Math.random() * characters.length)];
};

/*Generar la contraseña con la longitud de la barra*/
const newPass = () => {
  let password = "";
  const passLength = barraElement.value;
  for (let i = 0; i < passLength; i++) {
    password = password + randomCharacter();
  }
  passElement.textContent = password;
};

/*Eventos*/
/*numeros en consola*/
barraElement.addEventListener("input", print);
/*numeros en la length*/
barraElement.addEventListener("input", printLength);
/*boton*/
buttonElement.addEventListener("click", newPass);
