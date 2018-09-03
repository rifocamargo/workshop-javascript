var obj = {
    nome: "jon",
    sobrenome: "snow",
    idade: 16,
    apresentar: function() {
        console.log("olá, eu sou " + this.nome + ' ' + this.sobrenome);
    },
    dizerIdade: dizerIdade
};

function dizerIdade() {
    console.log("eu tenho " + this.idade);
}
console.log(obj);
console.log(obj.nome);
console.log(obj.sobrenome);
console.log(obj.idade);
obj.apresentar();
obj.dizerIdade();