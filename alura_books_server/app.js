// Aqui é onde a aplicação é iniciada e onde se encontra a configuração inicial do servidor. Estamos utilizando o express para criar o servidor. O express é um framework para Node.js que facilita a criação de aplicações web e APIs. O express é um middleware que possui diversos métodos que facilitam a criação de aplicações web e APIs.

// Aqui estamos importando o express:
const express = require("express");

// Aqui estamos importando as rotas:
const rotaLivro = require("./rotas/livro").default;

// Aqui estamos criando o servidor:
const app = express();

// Aqui estamos definindo a porta que o servidor irá rodar:
const port = process.env.PORT || 8000;

// O método 'use' é responsável por adicionar um middleware ao servidor.
app.use("/livros", rotaLivro);

// O método 'listen' é responsável por iniciar o servidor e mostrar que ele está rodando na porta 8000 que nós informamos acima.
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
