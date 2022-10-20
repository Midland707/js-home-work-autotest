//MODUL1 AUTOTEST36

function checkForSpam(message) {
  let result;
  // Change code below this line
  let lowerMessage = message.toLowerCase();
  result = lowerMessage.search("spam") != lowerMessage.search("sale");
  console.log(result);
  // Change code above this line
  return result;
}

checkForSpam("Latest technology news"); // повертає false
checkForSpam("JavaScript weekly newsletter"); // повертає false
checkForSpam("Get best sale offers now!"); // повертає true
checkForSpam("Amazing SalE, only tonight!"); // повертає true
checkForSpam("Trust me, this is not a spam message"); // повертає true
checkForSpam("Get rid of sPaM emails. Our book in on sale!"); // повертає true
checkForSpam("[SPAM] How to earn fast money?"); // повертає true
