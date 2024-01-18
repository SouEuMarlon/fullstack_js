/* eslint-disable react/jsx-key */
import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import { livros } from './dadosPesquisa';

const SearchContainer = styled.section`
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
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
          <div key={livro.id}>
            <img src={livro.src} alt={livro.nome} />
            <p>{livro.nome}</p>
          </div>
        ))}
      </LivrosContainer>
      
    </SearchContainer>
  )
}

export default Search;