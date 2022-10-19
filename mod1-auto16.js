//MODUL1 AUTOTEST16

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (available >= ordered) {
    message = "Order is processed, our manager will contact you.";
    console.log(
      `In warehouse ${available} goods. You want ${ordered} - is correct. - ${message}`
    );
  } else {
    message = "Not enough goods in stock!";
    console.log(
      `In warehouse ${available} goods. You want ${ordered} - dont correct. - ${message}`
    );
  }
  // Change code above this line
  return message;
}

checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);
