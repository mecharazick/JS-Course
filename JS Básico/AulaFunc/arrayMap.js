const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const comIds = pessoas.map((valor, indice) => {
    const newObj = {...valor}; //Deve-se primeiramente inicializar um novo objeto para não mexer no obj original
    newObj.id = indice;
    return newObj;
});