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

// ---------- TELA LOGIN ----------

const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const aviso = document.querySelector('#aviso');

function realizarLogin(event) {
    const login = validarDados(username.value, password.value)
    if(!login) {
        event.preventDefault();
        username.style.border = '2px solid red';
        password.style.border = '2px solid red';
        aviso.classList.remove('inativo');
        console.log(login)
        return
    }
}

function realizarCadastro(event) {
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

// ---------- TELA APP ----------

const listaMenu = document.querySelector('#lista-menu');

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

    app(textoOpcao);
}

opcoes.forEach((li) => {
    li.addEventListener('click', handleClickOpcao);
});

function app(opcao) {
    const dadosUsuario = obterDadosUsuario(username.value)

    switch (opcao) {
        case 'cadastrar':
            console.log(opcao);
            console.log(dadosUsuario)
            break;
        
        case 'consultar':
            console.log(opcao);
            break;
        
        case 'alterar':
            console.log(opcao);
            break;
        
        case 'deletar':
            console.log(opcao);
            break;
        
    }
}