const {Router} = require('express');
const { getLivros, getLivroUnico, postLivro } = require('../controladores/livro');

const router = Router();


// Abaixo temos a rota que pega todos os livros que temos em nosso banco de dados e retorna um array com todos eles.
router.get('/', getLivros);

// Abaixo temos a rota que recebe o id do livro que está sendo requisitado e retorna o livro correspondente.

router.get('/:id', getLivroUnico);

router.post('/', postLivro);

router.patch('/', (req, res) => {
    res.send('Você fez uma requisição do tipo PATCH!');
});

router.delete('/', (req, res) => {
    res.send('Você fez uma requisição do tipo DELETE!');
});

module.exports = router;