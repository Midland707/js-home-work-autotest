//MODUL1 AUTOTEST28

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

  switch (password) {
    case null:
    message = "Canceled by user!";
    break;
      
    case  ADMIN_PASSWORD :
    message = "Welcome!";
    break;
    
    default:
    message = "Access denied, wrong password!";
  }
  console.log(message);
  // Change code above this line
  return message;
}

checkPassword("mangohackzor"); // повертає "Access denied, wrong password!"
checkPassword(null); // повертає "Canceled by user!"
checkPassword("polyhax"); // повертає "Access denied, wrong password!"
checkPassword("jqueryismyjam"); // повертає "Welcome!"