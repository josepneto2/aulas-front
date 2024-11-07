const usuarios = {
    listaUsuarios: [],
    listaClientes: []
}

const usuario = {
    nome: "",
    senha: "",
}

const cliente = {
    id: 0,
    nome: "",
    idade: 0,
}

// ---------- TELA LOGIN ----------

const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const aviso = document.querySelector('#aviso');

function realizarLogin(event) {
    event.preventDefault()
    const login = validarLogin(username.value, password.value)
    if(!login) {
        username.style.border = '2px solid red';
        password.style.border = '2px solid red';
        aviso.classList.remove('inativo');
        console.log(login)
        return
    }

    //window.location.href = "app.html"
}

function realizarCadastro(event) {
    event.preventDefault();
    aviso.classList.add('inativo');
    
    usuario.nome = username.value; 
    usuario.senha = password.value;
    
    // const usuarioJaCadastrado = obterDadosUsuario(usuario.nome);
    // if(usuarioJaCadastrado) {
    //     username.style.border = '2px solid red'
    //     aviso.classList.remove('inativo');
    //     aviso.innerText = '*Erro: usuário já cadastrado';
    //     console.log('já cadastrado', usuarioJaCadastrado)
    //     return
    // }
    const dadosUsuarios = localStorage.getItem('dadosSistema')
    let usuariosObj;
    if(!dadosUsuarios) {
        usuarios.listaUsuarios.push(usuario)
        usuariosObj = usuarios;
    } else {
        usuariosObj = JSON.parse(dadosUsuarios);
        let listaUsuarios = usuariosObj.listaUsuarios;

        listaUsuarios.push(usuario);
        usuariosObj.listaUsuarios = listaUsuarios;
    }
    
    localStorage.setItem('dadosSistema', JSON.stringify(usuariosObj));
    alert('Cadastro realizado com sucesso!')
    window.location.href = "app.html"
}

const validarLogin = (nome, senha) => {
    const dados = obterDadosSistema()
    if(!dados){
        return false
    }

    const usuarioEncontrado = dados.listaUsuarios.find(usuario => usuario.nome === nome);
    console.log(usuarioEncontrado)

    return usuarioEncontrado.nome === nome && usuarioEncontrado.senha === senha
}

function obterDadosSistema() {
    const dados = localStorage.getItem('dadosSistema')
    if(!dados){
        return null
    } 
    return JSON.parse(dados);
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