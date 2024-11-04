const user = {
  username: '',
  password: '',
}

const loginForm = document.querySelector('#login-form');
const btn = document.querySelector('#cadastrar');


function handleCadastrar(event) {
  event.preventDefault();
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  user.username = username.value;
  user.password = password.value;
  console.log(user.username)
  
  localStorage.setItem(user.username, JSON.stringify(user));
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


