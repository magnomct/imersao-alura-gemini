function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga a seção no console para fins de depuração
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<h2><span style=\"color:#000000\"><strong>Nada foi encontrado. Você precisa digitar o nome de uma série ou filme futurista</strong></span></h2>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        // então, faça....
        //console.log(dado.titulo.includes(campoPesquisa))
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um elemento html para cada resultado
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
    }
    if (!resultados) {
        resultados = "<h2><span style=\"color:#000000\"><strong>Nada foi encontrado</strong></span></h2>"
    }

    // Atribui os resultados gerados ao conteúdo da seção
    section.innerHTML = resultados;
}

// console.log(dados);

