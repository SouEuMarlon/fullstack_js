const { getTodosLivros, getLivroPorId, insereLivro } = require('../servicos/livro');

function getLivros(req, res) {
  try {
      const livros = getTodosLivros();
      res.send(livros);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}

// Abaixo temos o controlador para a rota /livros/:id. Esse controlador recebe o id do livro que está sendo requisitado e retorna o livro correspondente.

function getLivroUnico(req, res) {
  try {
      const id = req.params.id; // id do livro que está sendo requisitado
      const livro = getLivroPorId(id); // livro correspondente ao id
      res.send(livro);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}


function postLivro(req, res) {
  try {
      const livroNovo = req.body;
      insereLivro(livroNovo)
      res.status(201)
      res.send("Livro inserido com sucesso!");  
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}


module.exports = {
  getLivros,
  getLivroUnico,
  postLivro
};