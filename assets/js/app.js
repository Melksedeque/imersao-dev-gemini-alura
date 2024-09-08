function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = ""
    let nome = ""
    let descricao = ""

    if(!campoPesquisa) {
        section.innerHTML = '<div class="alerta-vazio">O campo de pesquisa está vazio. Digite algo para pesquisar</div>'
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Itera sobre cada cavaleiro no array de cavaleiros de ouro
    for (let cavaleiro of cavaleirosDeOuro) {
        nome = cavaleiro.nome.toLowerCase()
        descricao = cavaleiro.descricao.toLowerCase()

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria um template HTML para cada cavaleiro
            resultado += `
                <div class="item-resultado">
                    <figure class="imagem">
                        <a href="${cavaleiro.link}" target="_blank">
                            <img src="${cavaleiro.imagem}">
                            <figcaption>${cavaleiro.nome}</figcaption>
                        </a>
                    </figure>
                    <div class="conteudo">
                        <h2><a href="${cavaleiro.link}" target="_blank">${cavaleiro.nome}</a></h2>
                        <p class="descricao-meta">${cavaleiro.descricao}</p>
                        <a href="${cavaleiro.link}" target="_blank">Mais informações</a>
                    </div>
                </div>
            `
        }
    }

    if(!resultado) {
        resultado = '<div class="alerta-sem-resultado">Nenhum Cavaleiro de Ouro com este nome foi encontrado. Será que ele foi enviado para a Outra Dimensão?</div>'
    }
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultado
}