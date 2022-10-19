//MODUL1 AUTOTEST27

function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (type) { // Change this line
    case "professional": // Change this line
      price = 20; // Change this line
      break;

    case "organization": // Change this line
      price = 50; // Change this line
      break;

    case "starter": // Change this line
      price = 0; // Change this line
      break;
  }
 console.log(price);
  // Change code above this line
  return price;
}
getSubscriptionPrice("professional"); // повертає число 20
getSubscriptionPrice("professional"); // повертає число 20
getSubscriptionPrice("organization"); // повертає число 50
getSubscriptionPrice("starter"); // повертає число 0