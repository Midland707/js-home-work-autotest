//MODUL1 AUTOTEST35

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  console.log(result);
  return result;
}

checkForName("Egor Kolbasov", "Egor"); // повертає true
checkForName("Egor Kolbasov", "egor"); // повертає false
checkForName("Egor Kolbasov", "egOr"); // повертає false
checkForName("Egor Kolbasov", "Zhenya"); // повертає false
checkForName("Vadim Nekrasov", "Vadim"); // повертає true
checkForName("Vadim Nekrasov", "vadim"); // повертає false
checkForName("Vadim Nekrasov", "Dima"); // повертає false
