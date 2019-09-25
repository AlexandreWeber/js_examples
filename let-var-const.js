// Exibe o valor undefined, mesmo declarada depois a variável já está disponível
// porém sem valor
console.log(name); 

var name = "Alexandre"

// Exibe o erro lastName is not defined, a variável não está disponível pois foi declarada
// com let
console.log(lastName); 

let lastName = "Dalabona"

const age = 27;
age = 28; // Ocorre erro pois uma constante não pode ter o valor alterado