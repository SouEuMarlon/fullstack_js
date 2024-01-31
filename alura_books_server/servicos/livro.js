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

function modificaLivro(modificacoes, id){ // recebe as modificações e o id do livro que será modificado
  let livrosAtuais = JSON.parse(fs.readFileSync('livros.json')); // lê o arquivo livros.json
  const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id); // encontra o índice do livro que será modificado
  const conteudoMudado = {...livrosAtuais[indiceModificado], ...modificacoes}; // cria um novo objeto com as modificações

  livrosAtuais[indiceModificado] = conteudoMudado; // substitui o livro antigo pelo novo
  fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais)); // escreve o novo array no arquivo livros.json
}

function deletaLivroPorId(id){
  let livros = JSON.parse(fs.readFileSync('livros.json')); // lê o arquivo livros.json
  const livrosFiltrados = livros.filter(livro => livro.id !== id); // filtra os livros que não tem o id recebido
  fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados)); // escreve o novo array no arquivo livros.json
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId
};