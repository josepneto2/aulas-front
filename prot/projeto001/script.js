const burguer = document.querySelector('#burguer');
const listaMenu = document.querySelector('#lista-menu');

/* -------- lista visível ou não -------- */
function mudouTamanhoTela() {
    let tamhanhoTela = window.innerWidth >= 768 ? 'block' : 'none';
    listaMenu.style.display = tamhanhoTela;
}

function clickMenu() {
    let ativado = listaMenu.style.display == 'block' ? 'none' : 'block';
    listaMenu.style.display = ativado;
}

burguer.addEventListener('click', clickMenu);

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