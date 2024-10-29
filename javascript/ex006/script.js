let msg = document.querySelector('#msg');
let img = document.querySelector('#imagem');

function carregar() {
    let hora = new Date().getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 5 && hora < 12) {
        img.src = 'imagens/manha.jpg';
        document.body.style.background = '#EDDCC0';
    } else if (hora >= 12 && hora < 19) {
        img.src = 'imagens/tarde.jpg';
        document.body.style.background = '#F3AD63';
    } else {
        img.src = 'imagens/noite.jpg';
        document.body.style.background = '#022E63';
    }
}