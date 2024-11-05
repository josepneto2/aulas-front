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

/* -------- lista visível ou não -------- */
const opcoes = document.querySelectorAll('#lista-menu > li');
const divsConteudo = document.querySelectorAll('.container > div');

function handleClickOpcao(event) {
    const textoOpcao = event.target.innerText;
    divsConteudo.forEach((div) => {
        if(div.id === event.target.innerText){
            console.log(div.id)
        }
    })
}

opcoes.forEach((li) => {
    li.addEventListener('click', handleClickOpcao);
})
