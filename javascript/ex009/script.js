const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  valorTotal = 0;
  transacoes.forEach((item) => {
    const numeroLimpo = Number(item.valor.replace('R$ ', ''))
    if(item.descricao.slice(0, 4) === "Taxa")  {
        valorTotal += numeroLimpo
    } 

})
console.log(valorTotal)