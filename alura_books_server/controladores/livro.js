const { getTodosLivros } = require('../servicos/livro');

function getLivros(req, res) {
  try {
      const livros = getTodosLivros();
      res.send(livros);
  } catch (err) {
      res.status(500).send({error: err.message});
  }
}

module.exports = {
  getLivros
};