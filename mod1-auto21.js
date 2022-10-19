//MODUL1 AUTOTEST21

function isNumberInRange(start, end, number) {
  const isInRange = start < number && end > number; // Change this line
  console.log(isInRange);
  return isInRange;
}

isNumberInRange(10, 30, 17); //true
isNumberInRange(10, 30, 5); //false
isNumberInRange(20, 50, 24); //true
isNumberInRange(20, 50, 76); //false
