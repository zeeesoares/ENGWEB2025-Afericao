# Ficha de Aferição

## Autor
- **Nome:** José António Costa Soares  
- **Número de Aluno:** A103995  
- **Foto:**  

  ![José Soares](../images/josesoares.jpg)  

---

## Resumo
Este repositório contém a resolução da **Ficha de Aferição** proposta na UC de Engenharia Web.  

O objetivo deste trabalho foi consolidar os conhecimentos adquiridos durante as aulas, focando-se no desenvolvimento de aplicações Web e na interação com bases de dados MongoDB. O dataset utilizado corresponde a uma lista de livros, incluindo informações como título, autor, género, personagens, entre outros.

Para isso, realizei os seguintes passos:
- **Análise e limpeza do dataset** para corrigir campos mal formatados, como listas representadas como strings.
- **Importação do dataset para o MongoDB** com a base de dados `livros` e a coleção `livros`.
- **Implementação de uma API de dados** para fornecer acesso aos dados através de rotas específicas.
- **Desenvolvimento de uma interface Web** que consome a API de dados para exibir informações de forma interativa.

---

### Implementação
A solução foi implementada com **JavaScript**, utilizando **Node.js** e **Express** para a API de dados, e **HTML/CSS** para a interface.

#### Queries MongoDB
As queries desenvolvidas para responder às questões propostas encontram-se no ficheiro `queries.txt` na pasta `ex1`:

1. **Quantos livros têm a palavra "Love" no título:**

2.  **Títulos dos livros, em ordem alfabética, com autor de apelido "Austen":**

3.  **Lista de autores (ordenada alfabeticamente e sem repetições):**


4.  **Distribuição de livros por género:**

##### API de Dados

A API, implementada em Express.js, responde na porta 17000 e oferece as seguintes rotas:

- GET /books: Lista todos os livros.
- GET /books/:id: Retorna o livro com o ID especificado (utilizando bookId como identificador).
- GET /books?character=EEEE: Lista livros onde "EEEE" é um personagem.
- GET /books?genre=AAA: Lista livros do género "AAA".
- GET /books/genres: Retorna a lista de géneros sem repetições, ordenada alfabeticamente.
- GET /books/characters: Retorna a lista de personagens sem repetições, ordenada alfabeticamente.
- POST /books: Adiciona um novo livro à base de dados.
- DELETE /books/:id: Remove o livro com o ID especificado.
- PUT /books/:id: Atualiza o livro com o ID especificado.

##### Interface Web

A interface, que responde na porta 17001, consome a API de dados e inclui as seguintes funcionalidades:

- Página Principal (http://localhost:17001):
    - Cabeçalho com metainformação.
    - Tabela com lista de livros, exibindo: id, title, author, publishDate, pages.
    - O campo id é um link para a página do livro.
    - O campo author é um link para a página do autor.

- Página do Livro (http://localhost:17001/:id):
    - Exibe todos os campos do livro.
    - Inclui a imagem da capa (coverImg), se disponível.
    - Link para voltar à página principal.

- Página do Autor (http://localhost:17001/entidades/:idAutor):
    - Exibe o nome do autor e seu ID.
    - Tabela com os livros do autor (estrutura semelhante à página principal).
    - Somatório do total de livros do autor.
    - Link para voltar à página principal.

## Resultados

Ficheiros Principais:
    queries.txt → Contém as queries MongoDB.
    server.js → Implementação da API de dados.
    app.js → Implementação da interface Web.

Instruções para Execução:

1. Clonar o repositório.

2. Na pasta ex1, executar:
    ```
    npm install
    npm start
    ```
3.  Na pasta ex2, executar:
    ```
    npm install
    npm start
    ```
    
4. Aceder à interface em http://localhost:17001.