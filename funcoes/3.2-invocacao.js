function dizerOi(nome) {
    console.log(this);    
    console.log('oi ' + nome);
}

dizerOi('arya');
dizerOi.call({}, "arya");
dizerOi.apply({}, ['arya']);