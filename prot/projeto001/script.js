let burguer = document.querySelector('#burguer');
let listaMenu = document.querySelector('#lista-menu');

burguer.addEventListener('click', clickMenu);

function mudouTamanhoTela() {
    let tamhanhoTela = window.innerWidth >= 768 ? 'block' : 'none';
    listaMenu.style.display = tamhanhoTela;
}

function clickMenu() {
    let ativado = listaMenu.style.display == 'block' ? 'none' : 'block';
    listaMenu.style.display = ativado;
}