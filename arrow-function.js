// Como era
writeName = function (name) {
    return `O seu nome é ${name}`;
}

// Como fica
writeName2 = ((name) => { 
    return `O seu nome é ${name}`;
});

// Versão reduzida
writeName3 = (name) => `O seu nome é ${name}`;


// Atenção ao this
this.name = "Alexandre";

const component = {
    getName1: function () {
        return this.name; // Resultado será undefined
    },
    getName2: () => {     // Arrow function não cria um novo escopo (this)
        return this.name; // Resultado será Alexandre
    }
}