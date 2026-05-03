const firstName = "John";
const lastName = "Doe";

console.log(`Hello, ${firstName} ${lastName}!`);

const containsLetterH = lastName.includes("h");
console.log({ containsLetterH });

//En la consola me saldra un objeto con la propiedad containsLetterH y su valor sera false, ya que el apellido "Doe" no contiene la letra "h".