let customer = { name: "Alexandre", lastName: "Dalabona", age: 28 }

const address = { street: "Avenida Santos Dumont", number: 831 }

const addresses = [
    { street: "Avenida Santos Dumont", number: 831 },
    { street: "Rua da TOTVS", number: 10}
]

const orders = [ { code: 10, value: 100 }, { code: 20, value: 200 }, { code: 30, value: 300 }];

const order = { code: 10, value: 100 };

// Copia o conteúdo do order sem manter referência
const order2 = {...order};
order2.value += 100;

let customers = ["Dell", "Vivo", "Coca-cola"]

// Explode os itens do customers e adiciona eles ao array customers2
let customers2 = ["Netflix", "Amazon", "TOTVS", ...customers]


