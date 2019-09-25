let totvsAddress = {},
    homeAddress = {},
    opaAddress = {};

function getCepData(cep) {
    return new Promise((resolve, reject) => {
        const url =  `https://viacep.com.br/ws/${cep}/json/`
    
        fetch(url).then(response => response.json()).then(result => {
            resolve(result);
        })
        .catch(err => {
            reject(err);
        });
    })
};

async function getAddresses() {
    // Em uma função com a palavra async o await faz com o código aguarde o resultado
    // da promise
    totvsAddress = await getCepData("89218100");
    homeAddress  = await getCepData("89209520");
    opaAddress  = await getCepData("89204041")

    console.log(`Eu moro na ${homeAddress.logradouro}, trabalho na ${totvsAddress.logradouro} e bebo cerveja na ${opaAddress.logradouro}`)

    // Atenção: Usar await somente quando uma promise depender do resultado da outra
}

// Dispara as requisições de uma só vez e retorna no callback as promises resolvidas
// na mesma ordem que foram enviadas
Promise.all([getCepData("89204041"),
             getCepData("89218100"), 
             getCepData("89209520")]).then((values) => {
    console.log(values)
});