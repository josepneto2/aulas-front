const usuario = {
  nome: '',
  senha: '',
}

const loginForm = document.querySelector('#login-form');
const btn = document.querySelector('#cadastrar');


function handleCadastrar(event) {
  event.preventDefault();
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  usuario.nome = username.value; 
  usuario.senha = password.value;
  console.log(usuario)
  
  localStorage.setItem(usuario.nome, JSON.stringify(usuario));
  alert('Cadastro realizado com sucesso!')
  username.value = '';
  password.value = '';
}

btn.addEventListener('click', handleCadastrar)

function handleLogin(event) {
  event.preventDefault();
  alert('login')
  event.target.check
}

loginForm.addEventListener('submit', handleLogin)