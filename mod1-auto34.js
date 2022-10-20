//MODUL1 AUTOTEST34

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line
  console.log(normalizedInput);
  return normalizedInput;
}

normalizeInput("Hello world"); // повертає "hello world"
normalizeInput("This ISN'T SpaM"); // повертає "this isn't spam"
normalizeInput("Big SALE"); // повертає "big sale"
