// for, for in, while, do while
var x = 0;
while (x <= 10) {
    console.log('x é igual a ' + x);
    x = x + 1;
}

x = 0;
do {
    console.log('x é igual a ' + x);
    x = x + 1;
} while (x <= 10);

for (let y = 0; y < 10; y++) {
    console.log(y);   
}

var obj = {
    nome: 'jon',
    sobrenome: 'snow'
};
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(key);
    }
}