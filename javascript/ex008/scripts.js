function contar() {
    let numInicio = Number(document.querySelector('#inicio').value);
    let numFim = Number(document.querySelector('#fim').value);
    let numPasso = Number(document.querySelector('#passo').value);
    let aviso = document.querySelector('#aviso');

    if(numInicio.length == 0 || numFim == numInicio) {
        alert('Impossível contar');
        return;
    }

    if(numPasso <= 0) {
        alert('Passo inválido! Considerando passo = 1')
        numPasso = 1;
    }

    aviso.innerHTML ="Contando: ";
    if(numInicio < numFim) {
        for(let i = numInicio; i <= numFim; i+=numPasso) {
            aviso.innerHTML += i + " > ";
        }
    } else {
        for(let i = numInicio; i >= numFim; i-=numPasso) {
            aviso.innerHTML += i + " > ";
        }
    }

    aviso.innerHTML += "FIM!";
    
}