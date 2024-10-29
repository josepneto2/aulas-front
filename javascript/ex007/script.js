function verificar() {
    let anoNasc = document.querySelector('#ano');
    let sexo = document.getElementsByName('radsex');
    let res = document.querySelector('#res');
    let aviso = document.querySelector('#aviso-inicial');

    let ano = new Date().getFullYear();
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        alert('Erro');
        return;
    }
    let idade = ano - Number(anoNasc.value);
    let genero = sexo[0].checked ? 'h' : 'm';
    let faixaEtaria = verificarIdade(idade);
    
    let img = document.createElement('img');
    img.setAttribute('id', 'imagem');

    img.setAttribute('src', `imagens/${faixaEtaria}-${genero}.jpg`);
    res.appendChild(img);

    let resposta = `Você tem ${idade} anos.`
    aviso.innerHTML = resposta;
}

function verificarIdade(idade) {
    let faixaEtaria = '';
    if (idade >= 0 && idade < 12) {
        faixaEtaria = 'crianca';
    } else if (idade < 21) {
        faixaEtaria = 'jovem';
    } else if (idade < 60) {
        faixaEtaria = 'adulto';
    } else {
        faixaEtaria = 'idoso';
    }
    return faixaEtaria;
}