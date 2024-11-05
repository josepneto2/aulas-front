const netoObj = {
    id:1,
    nome:"neto",
    senha:"123",
    cadastros: [
        {
            id:131231,
            nome:"joao",
            idade: 10
        },
        {
            id:13122,
            nome:"jose",
            idade: 20
        },
        {
            id:75653,
            nome:"maria",
            idade: 30
        }
    ]
}

localStorage.setItem(netoObj.nome+netoObj.id, JSON.stringify(netoObj))

const dados = localStorage.getItem(netoObj.nome+netoObj.id)
const cadastros = JSON.parse(dados).cadastros
const tabela = document.querySelector('.tabela');
const tbody = tabela.lastElementChild;

criarLinhas = () => {
    cadastros.forEach((cadastro) => {
        const tdId = document.createElement('td');
        tdId.innerText = cadastro.id;
        const tdNome = document.createElement('td');
        tdNome.innerText = cadastro.nome;
        const tdIdade = document.createElement('td');
        tdIdade.innerText = cadastro.idade;

        const tr = document.createElement('tr');
        tr.appendChild(tdId)
        tr.appendChild(tdNome)
        tr.appendChild(tdIdade)
        tbody.appendChild(tr)
    })
} 

criarLinhas();