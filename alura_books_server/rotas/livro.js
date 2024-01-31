const {Router} = require('express');
const { getLivros, getLivroUnico, postLivro, patchLivro, deleteLivro } = require('../controladores/livro');

const router = Router();


// Abaixo temos a rota que pega todos os livros que temos em nosso banco de dados e retorna um array com todos eles.
router.get('/', getLivros);

// Abaixo temos a rota que recebe o id do livro que está sendo requisitado e retorna o livro correspondente.

router.get('/:id', getLivroUnico);

router.post('/', postLivro);

router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro);

module.exports = router;