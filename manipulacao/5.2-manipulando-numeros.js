var x = 34;
x = 34.00;
x = 4.56e7;//45600000
console.log(x.toExponential());

x = 123e-6 //0.000123
console.log(x.toFixed(2));

console.log((4.456).toFixed(2));
console.log((4.456).toPrecision(2));

var z = 999999999999999; // até 15 digitos
console.log(z);

z = 0.9999999999999999; // ate 16 digitos decimais
console.log(z);

var hex = 0xFFF;//base hexa
console.log(hex);

var octal = 07777;//base octal
console.log(octal);
console.log(octal.toString(16));//base hexadecimal
console.log(octal.toString(10));//base decimal
console.log(octal.toString(8));//base decimal
console.log(octal.toString(2));//base binária
