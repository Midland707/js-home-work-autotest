//MODUL1 AUTOTEST22

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType=="pro" || subType=="vip"; // Change this line
  
  console.log(canAccessContent);
  return canAccessContent;
}

checkIfCanAccessContent("pro"); //true
checkIfCanAccessContent("starter"); //false
checkIfCanAccessContent("vip"); //true
checkIfCanAccessContent("free"); //false