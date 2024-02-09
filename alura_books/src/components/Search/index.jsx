/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Input";
// import { livros } from './dadosPesquisa';
import livroImg from '../../assets/imagens/livro.png';
import { postFavorito } from "../../services/favoritos";
import { getLivros } from "../../services/livros";

const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 720px;
  width: 100%;
`
const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 36px;
  margin-top: 20px;
`
const LivrosContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 60px;
  padding: 0 20px;
  width: 100%;

  div{
    align-items: center;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    margin: 15px 10px;

    p{
      color: #FFF;
      font-size: 1rem;
      font-weight: 500;
    }

    p:hover{      
      text-decoration: underline;
      text-underline-offset: 5px;     
    }

    img:hover{
      opacity: 0.7;
    }
  }
`

function Search(){
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros(){
    const livrosDaApi = await getLivros();
    setLivros(livrosDaApi);
  }

  async function insertFavorito(id){
    await postFavorito(id);
    const livroNome = livros.find(livro => livro.id === id).nome;
    alert(`O livro ${livroNome.toUpperCase()} foi adicionado aos favoritos!`);
  }

  return(
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>

      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={evento => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
          setLivrosPesquisados(resultadoPesquisa)
        }}
      />
      
      <LivrosContainer>
        {livrosPesquisados.map( livro => (
          <div key={livro.id} onClick={() => insertFavorito(livro.id)}>
            <img src={livroImg} alt={livro.nome} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </LivrosContainer>
      
    </SearchContainer>
  )
}

export default Search;