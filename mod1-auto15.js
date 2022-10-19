//MODUL1 AUTOTEST15

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = "You are an adult";
    console.log(`Age ${age}>=18 is - ${message}`);
  } else {
    message = "You are a minor";
    console.log(`Age ${age}>=18 is - ${message}`);
  }
  return message;
}

checkAge(20);
checkAge(8);
checkAge(14);
checkAge(38);
