import User from './user.js';

const user = new User('neto', '1234');

console.log(user.username)

/*
const loginForm = document.querySelector('#login-form');
const btn = document.querySelector('#cadastrar');


function handleCadastrar(event) {
  event.preventDefault();
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  let usuario = new User(username.value, password.value);
  console.log(usuario)
  
  localStorage.setItem(usuario.username, JSON.stringify(usuario));
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

*/
