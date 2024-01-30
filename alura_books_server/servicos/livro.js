const fs = require('fs');

function getTodosLivros(){
  return JSON.parse(fs.readFileSync('livros.json'));
}

// Abaixo temos a função que recebe o id do livro que está sendo requisitado e retorna o livro correspondente.

function getLivroPorId(id){
  const livros = JSON.parse(fs.readFileSync('livros.json')); // lê o arquivo livros.json
  const livroFiltrado = livros.filter(livro => livro.id === id)[0]; // filtra o livro com o id recebido
  return livroFiltrado;
}

function insereLivro(livroNovo){
  const livros = JSON.parse(fs.readFileSync('livros.json')); // lê o arquivo livros.json
  const novaListaDeLivros = [...livros, livroNovo]; // cria um novo array de livros com o novo livro
  fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros)); // escreve o novo array no arquivo livros.json
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro
};