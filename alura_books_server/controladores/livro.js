// Os controladores são responsáveis por receber as requisições HTTP, processar os dados e enviar uma resposta ao cliente. Os controladores são chamados pelas rotas, que são responsáveis por receber as requisições HTTP e chamar os controladores, tirando assim a responsabilidade das rotas de processar os dados e enviar uma resposta ao cliente. Todas as respostas seja de erro ou sucesso devem ser enviadas pelos controladores.

function getLivros(req, res) {
  try {
    res.send('Hello World!');
  } catch (error) {
    res.status(500).send({ error: 'Internal server error' });
  }
}

module.exports = {
  getLivros,
};