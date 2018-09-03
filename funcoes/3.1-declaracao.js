dizerOi('ned');

function dizerOi (nome) {
    console.log('olá ' + nome);
}
dizerOi('jon');
dizerOi('robb');

var dizerOla = function (nome) {
    console.log('olá ' + nome);
}
dizerOla("bran");

var dizerFui = new Function("nome", "console.log('Fui ' + nome);");
dizerFui("rickon");