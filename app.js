function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga a seção no console para fins de depuração

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Cria um novo elemento div para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }

    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
}

// console.log(dados);

