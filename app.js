function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado correspondente. Tente pesquisar por algum personagem, raça ou classe.</p>"
       return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
    let titulo = "";
    let raca = "";
    let classe = "";
    let tags = "";

    // Itera sobre cada item (dado) da lista de dados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        raca = dado.raca.toLowerCase()
        classe = dado.classe.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || raca.includes(campoPesquisa) || classe.includes(campoPesquisa) || tags.includes(campoPesquisa))  {
        //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2> <p class="descriçao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
        `;
        }  
        
        
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado correspondente</p>"
    }

    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}