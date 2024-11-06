const listaMenu = document.querySelector('#lista-menu');

/* -------- lista visível ou não -------- */
function mudouTamanhoTela() {
    let tamhanhoTela = window.innerWidth >= 768 ? 'block' : 'none';
    listaMenu.style.display = tamhanhoTela;
}

function clickMenu() {
    const burguer = document.querySelector('#burguer');
    let ativado = listaMenu.style.display == 'block' ? 'none' : 'block';
    listaMenu.style.display = ativado;
}

/* -------- altera;áo do conteúdo selecionado -------- */
const opcoes = document.querySelectorAll('#lista-menu > li');
const divsConteudo = document.querySelectorAll('.container > div');

function handleClickOpcao(event) {
    const textoOpcao = event.target.innerText;
    
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


/* -------- tela login -------- */
const usuario = {
    nome: '',
    senha: '',
}
  
const loginForm = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const btnCadastrar = document.querySelector('#cadastrar');


function handleCadastrar(event) {
    event.preventDefault();
    aviso.classList.add('inativo');

    usuario.nome = username.value; 
    usuario.senha = password.value;
    console.log(usuario)

    localStorage.setItem(usuario.nome, JSON.stringify(usuario));
    alert('Cadastro realizado com sucesso!')
    username.value = '';
    password.value = '';
}

btnCadastrar.addEventListener('click', handleCadastrar)

function handleLogin(event) {
    const login = validarDados(username.value, password.value)
    console.log('login', login)

    if(!login) {
        event.preventDefault()
        username.style.border = '2px solid red'
        password.style.border = '2px solid red'
        const aviso = document.querySelector('#aviso');
        aviso.classList.remove('inativo');
        console.log('parou aqui')
        return
    }

    //event.preventDefault()

    const usuarioBruto = localStorage.getItem(username.value);
    console.log(JSON.parse(usuarioBruto))
    console.log('entrou')
}

loginForm.addEventListener('submit', handleLogin)

const validarDados = (nome, senha) => {
    const usuarioEncontrado = localStorage.getItem(username.value)
    if(!usuarioEncontrado){
        return false
    }
    const dadosUsuario = JSON.parse(usuarioEncontrado);
    return dadosUsuario.nome === nome && dadosUsuario.senha === senha
}