//MODUL1 AUTOTEST32

function getSubstring(string, length) {
  const substring = string.slice(0, length) ; // Change this line
  console.log(string + "select - " + substring);
  return substring;
}
// Оголошена функція getSubstring(string, length)
getSubstring("Hello world", 3); // повертає "Hel"
getSubstring("Hello world", 6); // повертає "Hello"
getSubstring("Hello world", 8); // повертає "Hello wo"
getSubstring("Hello world", 11); // повертає "Hello world"
getSubstring("Hello world", 0); // повертає ""