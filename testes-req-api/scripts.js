function buscarTodos() {
    fetch('https://localhost:7136/api/Pessoas')
        .then(response => {
            if (!response.ok) {
                return new Error('falhou a requisição');
            }

            return response.json()
        })
        .then(dados => console.log(dados))
        .catch(err => console.error(err));
}