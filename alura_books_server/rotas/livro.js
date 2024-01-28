// As rotas do servidor são responsáveis por receber as requisições HTTP e chamar os controladores, tirando assim a responsabilidade das rotas de processar os dados e enviar uma resposta ao cliente. Todas as respostas seja de erro ou sucesso devem ser enviadas pelos controladores. Aqui criaremos as rotas do servidor. Os métodos HTTP que utilizaremos serão os mais comuns: GET, POST, PATCH e DELETE. O método GET será utilizado para retornar todos os livros cadastrados. O método POST será utilizado para cadastrar um novo livro. O método PATCH será utilizado para atualizar um livro. O método DELETE será utilizado para excluir um livro. Para cada método HTTP criaremos uma rota diferente. Para criar as rotas utilizaremos o método Router do express. O método Router é responsável por criar um objeto de roteamento que podemos utilizar para criar as rotas do servidor. O método Router é um middleware do express.

import { Router } from "express";
import { getLivros } from "../controladores/livro";

const router = Router();

router.get("/", getLivros);

router.post("/", (req, res) => {
  res.send("Você fez uma requisição do tipo POST!");
});

router.patch("/", (req, res) => {
  res.send("Livro emprestado com sucesso! (PATCH)");
});

router.delete("/", (req, res) => {
  res.send("Livro excluído com sucesso! (DELETE)");
});

export default router;
