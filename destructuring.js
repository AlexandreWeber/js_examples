const customer = { name: "Alexandre", lastName: "Dalabona", age: 27}
const items    = { name: "13C", value: 100 }

// 'Explode' as propriedades do objeto enviado e os transforma em parâmetros
function showCustomer ({name, lastName, age}) {
    return `O cliente ${name} ${lastName} 'tem' ${age} anos ${value} ${nameItem}`;
}

function showCustomer (customer) {
    // 'Explode' as propriedades do objeto enviado e os transforma em constanes
    const {name, lastName, age} = customer;
    return `O cliente ${name} ${lastName} tem ${age} anos`;
}
const company = {
    name: 'TOTVS',
    address: 'Avenida Santos Dumont',
    products: {
        crm: ['oportunidades', 'ocorrências', 'tarefas'],
        sales: [ 'Portal', 'PD4000', 'Sugestão de Natureza']
    }
};
// Define as variáres crmModules e salesModules
// Elas recebem o valor de company.products.crm e company.products.sales
const { products : { crm: crmModules = [] }, products: { sales: salesModules }} = company

console.log(crmModules)
console.log(salesModules)