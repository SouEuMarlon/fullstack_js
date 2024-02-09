import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Opcoes = styled.ul`
  align-items: center;
  display: flex;
`

const Opcao = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  height: 100%;
  justify-content: center;
  min-width: 120px;
  padding: 0 5px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  p:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-thickness: 1.5px;
  }
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto, index) =>
        <Link key={index} to={`/${texto.replace(/\s/g, '_').toLowerCase()}`}>
          <Opcao key={index}><p>{texto}</p></Opcao>
        </Link>
    )}
    </Opcoes>
  );
}

export default OpcoesHeader;