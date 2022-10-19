//MODUL1 AUTOTEST18

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid;
  const creditLeft = customerCredits - totalPrice;
  if (customerCredits >= totalPrice) {
    message = `You ordered ${orderedQuantity} droids, you have ${creditLeft} credits left`;
  } else {
    message = "Insufficient funds!";
  }
  console.log(message);
  // Change code above this line
  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);
