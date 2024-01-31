const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../servicos/livro');

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

function patchLivro(req, res) {
  try {
      const id = req.params.id;
      const body = req.body;
      modificaLivro(body, id) // modifica o livro correspondente ao id
      res.status(201)
      res.send("Livro modificado com sucesso!");  
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}

function deleteLivro(req, res) {
  try {
      const id = req.params.id;
      deletaLivroPorId(id) // deleta o livro correspondente ao id
      res.status(201)
      res.send("Livro deletado com sucesso!");  
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}


module.exports = {
  getLivros,
  getLivroUnico,
  postLivro,
  patchLivro,
  deleteLivro
};