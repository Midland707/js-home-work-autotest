//MODUL1 AUTOTEST24

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if(totalSpent >= 50000) {
  discount = GOLD_DISCOUNT;
}
  else if(50000 > totalSpent && totalSpent >= 20000) {
    discount = SILVER_DISCOUNT;
  }
    else if(20000 > totalSpent && totalSpent >= 5000) {
    discount = BRONZE_DISCOUNT;
    }
  else if(5000 > totalSpent) {
    discount = BASE_DISCOUNT;
    }
  console.log(discount);
  // Change code above this line
  return discount;
}

getDiscount(137000); //0.1
getDiscount(46900); //0.05
getDiscount(8250); //0.02
getDiscount(1300); //0
getDiscount(5000); //0.02
getDiscount(20000); //0.05
getDiscount(50000); //0.1