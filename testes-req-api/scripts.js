function buscarTodasPessoas() {
    fetch('https://localhost:7136/api/Pessoas')
        .then(response => {
            if (!response.ok) {
                return new Error('falhou a requisição');
            }

            return response.json()
        })
        .then(dados => console.log(dados))
        .catch(err => console.error(err));
}

function buscarPessoa() {
    const idPessoa = document.getElementById('idPessoa').value;

    fetch(`https://localhost:7136/api/Pessoas/${idPessoa}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            return response.json();
        })
        .then(dados => console.log(dados))
        .catch(err => console.error(err));
}

const pessoa = {
    nome: "teste",
    idade: 11,
    email: "teste@email.com",
    endereco: "asdads",
    outrasInformacoes: "",
    interesses: "",
    sentimentos: "",
    valores: "",
    dataCadastro: new Date().toISOString(),
    ativo: true, 
    deletado: false
};

function criarPessoa() {
    fetch('https://localhost:7136/api/Pessoas', {
        method: 'POST', 
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(pessoa),
    })
        .then(response => {
            if (!response.ok) {
                console.log(response)
                return new Error('falhou a requisição');
            }

            return response.json()
        })
        .then(dados => console.log(dados))
        .catch(err => console.error(err));
}

