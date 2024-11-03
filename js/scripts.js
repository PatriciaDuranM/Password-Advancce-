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
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/";

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
