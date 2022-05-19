//1
let string = "ddd@bbb@ccc";
let changeStr = string.replaceAll("@", "!");
document.write(changeStr + "<br>");
//2
let JS = "JS";
let changeJS = JS.toLowerCase();
document.write(changeJS + "<br>");
//3
let js = "js";
let changeJS2 = JS.toUpperCase();
document.write(changeJS2 + "<br>");
//4
let strings = "I am a hero!";
console.log(strings.length);
//5

let creditCard = prompt("введите номер кредитной карты");
let creditNumber = "*".repeat(creditCard.length - 4);
let result =
  creditNumber + creditCard.slice(creditCard.length - 4, creditCard.length);

document.write(`Номер вашей кредитной карты: ${result}`);
