// Caso não seja enviado o parâmetro é assumido o valor 'Nenhum nome informado'
const getName = (name = "Nenhum nome informado") => {
    return `O nome é ${name}`;
}

console.log(getName("Alexandre"));
console.log(getName`Alexandre`);
console.log(getName());