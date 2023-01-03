const currency = require("./currency-functions");

console.log("50 Canadian dollars equals this amount of US dollars:");
console.log(currency.c(50));

console.log("30 US dollars equals this amount of Canadian dollars:");
console.log(currency.u(30));

console.log(currency);