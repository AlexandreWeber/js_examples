const customer = { name: "Alexandre", cnpj: "81106421000101", address: "Rua Da Totvs"};
const order    = { code: "108956", valor: 200};
const item     = { code: "13C", valor: 100, quantity: 2};

const customers = [
    { name: "Alexandre", cnpj: "81106421000101", address: "Rua Da Totvs"},
    { name: "João Silva", cnpj: "21106421000101", address: "Rua Da Neogrid"},
    { name: "Fritz", cnpj: "21106421000101", address: "Rio Cachoeira"}
];

// Exibe todos os itens no console formatados em uma tabela
console.table(customers);

// O %c é removido da mensagem e é aplicado o estido CSS que foi definido no segundo
// parâmetro
console.log('%c Atenção, na 12.1.27 mudamos o evento para...', 
'color: blue; font-size: 20px; font-weight: bold')

// Inicia um contador
console.time('loop1');
let i = 0;
while (i < 1000000) { 
    i ++ 
};
// Exibe o tempo de execução desde a iniciação do contador
console.timeEnd('loop1');


const deleteMe = () => delete2()
// Exibe o trace da execução
const delete2 = () => console.trace(); 

deleteMe();

// Exibe no console as mensagens separadas em grupos
console.group('getAccount');
console.log('Alexandre');
console.log('João');
console.groupEnd();

console.group('getOrders');
console.log('Ariane');
console.log('Maria');
console.groupEnd();

// Exibe uma mensagem com ícone de alerta no console
console.warn('Aviso')

// Exibe uma mensagem com ícone de erro no console
console.error('Erro')
