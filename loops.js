const orders = [
    { code: 10, value: 100 },
    { code: 20, value: 200 },
    { code: 30, value: 300 }
];

let customers = [
    { name: "João", lastName: "Silva", age: 38},
    { name: "Alexandre", lastName: "Dalabona", age: 28 },
    { name: "Bianca", lastName: "TOTVS", age: 20 }
]

// Soma o valor de todos os pedidos e retorna na const total
const total = orders.reduce((acc, {value}) => acc += value, 0);

// Criar um nova array com o valores acrescentados em 50%
const withTax = orders.map(({value}) => value * 1.50)

// Retorna todos os pedidos que o valor é maior que 100
const allGreaterThan100 = orders.filter(({value}) => value > 100);

// Retornar se todos os pedidos são maiores que 150
const everyValueGreaterThan150 = orders.every(({value}) => value > 150);

// Retornar se todos algum pedido é maior que 100
const someValueGreaterThan100 = orders.some(({value}) => value > 100);


// Realiza a ordernação pelo nome de forma crescente
customers.sort((a, b) => {
    if (a.name > b.name) { return 1; }
    if (a.name < b.name) { return -1;}
    
    return 0;
});
