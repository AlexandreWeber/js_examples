// Transforma os valores enviados em um array
function sum(...values) {
    return values.reduce((acc, value) => acc += value);
}

// Não importa a quantidade de parâmetros enviados
// Todos serão considerados pois são transformados em array
const total = sum(10, 10, 2, 2, 2);
