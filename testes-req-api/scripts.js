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
    fetch(`https://localhost:7136/api/Pessoas/1`)
        .then(response => {
            if (!response.ok) {
                return new Error('falhou a requisição');
            }

            return response.json()
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
    dataCadastro: "",
    ativo: true,
    deletado: false
};

const config = {
    method: 'POST', 
    Headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(pessoa),
    mode: 'no-cors' 
}

function criarPessoa() {
    fetch('https://localhost:7136/api/Pessoas', {
        method: 'POST', 
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(pessoa),
        Cache: 'default'
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

