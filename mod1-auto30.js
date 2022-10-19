//MODUL1 AUTOTEST30

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
  console.log(message);
  return message;
}

getNameLength("Poly"); // повертає "Name Poly is 4 characters long"
getNameLength("Harambe"); // повертає "Name Harambe is 6 characters long"
getNameLength("Billy"); // повертає "Name Billy is 5 characters long"
getNameLength("Joe"); // повертає "Name Joe is 3 characters long"