//MODUL1 AUTOTEST14

function isValidPassword(password) {
  const SAVED_PASSWORD = "jqueryismyjam";
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  console.log(`Password - ${isMatch}`);
  // Change code above this line
  return isMatch;
}

isValidPassword("mangodab3st");
isValidPassword("kiwirul3z");
isValidPassword("jqueryismyjam");
