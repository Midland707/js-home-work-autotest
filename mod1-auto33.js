//MODUL1 AUTOTEST33

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  const messageLength = message.length;
  result = message.slice(0, maxLength);
  if (messageLength > maxLength) {
    result += "...";
  }
  console.log(result);
  /// Change code above this line
  return result;
}
formatMessage("Curabitur ligula sapien", 16); // повертає "Curabitur ligula..."
formatMessage("Curabitur ligula sapien", 23); // повертає "Curabitur ligula sapien"
formatMessage("Vestibulum facilisis purus nec", 20); // повертає "Vestibulum facilisis..."
formatMessage("Vestibulum facilisis purus nec", 30); // повертає "Vestibulum facilisis purus nec"
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); // повертає "Nunc sed turpis..."
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); // повертає "Nunc sed turpis a felis in nunc fringilla"
