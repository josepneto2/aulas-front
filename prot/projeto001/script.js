const listaMenu = document.querySelector('#lista-menu');

// -------- lista visível ou não -------- 
function mudouTamanhoTela() {
    let tamhanhoTela = window.innerWidth >= 768 ? 'block' : 'none';
    listaMenu.style.display = tamhanhoTela;
}

function clickMenu() {
    let ativado = listaMenu.style.display == 'block' ? 'none' : 'block';
    listaMenu.style.display = ativado;
}

// -------- alteração do conteúdo selecionado -------- 
const opcoes = document.querySelectorAll('#lista-menu > li');
const divsConteudo = document.querySelectorAll('.container > div');

function handleClickOpcao(event) {
    const textoOpcao = event.target.innerText.toLowerCase().split(' ')[0];
    
    divsConteudo.forEach((div) => {
        div.classList.remove('ativo');
        div.classList.add('inativo');
    });
    
    const divSelecionada = document.getElementById(textoOpcao);
    if (divSelecionada) {
        divSelecionada.classList.remove('inativo');
        divSelecionada.classList.add('ativo');
    }
}

opcoes.forEach((li) => {
    li.addEventListener('click', handleClickOpcao);
});

// -------- tela login -------- 
const usuario = {
    nome: "",
    senha: "",
    clientes: [
        {
            id: 100,
            nome: "teste",
            idade: 100
        }
    ]
}

const cliente = {
    id: 0,
    nome: "",
    idade: 0,
    ativo: false
}

const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnCadastrar = document.querySelector('#cadastrar');
const aviso = document.querySelector('#aviso');

console.log('usuarioLogado', usuarioLogado)

function handleCadastrar(event) {
    event.preventDefault();
    aviso.classList.add('inativo');
    
    usuario.nome = username.value; 
    usuario.senha = password.value;
    
    const usuarioJaCadastrado = obterDadosUsuario(usuario.nome);
    if(usuarioJaCadastrado) {
        username.style.border = '2px solid red'
        aviso.classList.remove('inativo');
        aviso.innerText = '*Erro: usuário já cadastrado';
        console.log('já cadastrado', usuarioJaCadastrado)
        return
    }
    
    localStorage.setItem(usuario.nome, JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!')
    loginForm.submit();

}

btnCadastrar.addEventListener('click', handleCadastrar)

function handleLogin(event) {
    const login = validarDados(username.value, password.value)
    
    if(!login) {
        event.preventDefault();
        username.style.border = '2px solid red';
        password.style.border = '2px solid red';
        aviso.classList.remove('inativo');
        return
    }

    const usuarioLogado = obterDadosUsuario(username.value);
    app(usuarioLogado);
    
}

loginForm.addEventListener('submit', handleLogin)

const validarDados = (nome, senha) => {
    const usuarioEncontrado = obterDadosUsuario(username.value)
    if(!usuarioEncontrado){
        return false
    }
    return usuarioEncontrado.nome === nome && usuarioEncontrado.senha === senha
}

function obterDadosUsuario(chave) {
    const usuarioEncontrado = localStorage.getItem(chave)
    if(!usuarioEncontrado){
        return null
    } 
    return JSON.parse(usuarioEncontrado);
}

// -------- consultar clientes -------- 
/*
const clientes = usuarioLogado.clientes
const tabela = document.querySelector('.tabela');
const tbody = tabela.lastElementChild;

console.log(clientes)

function criarLinhas() {
    clientes.forEach((cliente) => {
        const tdId = document.createElement('td');
        tdId.innerText = cliente.id;
        const tdNome = document.createElement('td');
        tdNome.innerText = cliente.nome;
        const tdIdade = document.createElement('td');
        tdIdade.innerText = cliente.idade;

        const tr = document.createElement('tr');
        tr.appendChild(tdId)
        tr.appendChild(tdNome)
        tr.appendChild(tdIdade)
        tbody.appendChild(tr)
    })
}

function cliquei() {
    criarLinhas()
}*/
