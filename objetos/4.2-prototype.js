function Stark(nome, idade, corDoCabelo) {
    this.nome = nome;
    this.idade = idade;
    this.corDoCabelo = corDoCabelo;
    this.sobreNome = "stark";
    this.apresentar = function () {
        console.log("olá eu sou " + this.nome + " " + this.sobreNome);
    }
}

var ned = new Stark("ned", 40, "Preto");
Stark.prototype.darTchau = function () {
    console.log("Fui");
}
ned.apresentar();
ned.darTchau();
var sansa = new Stark("sansa", 13, "cobre");
sansa.apresentar();
sansa.darTchau();
console.log(ned);
console.log(sansa);

String.prototype.apagar = function() {
    return "";
}
console.log("oi".apagar());