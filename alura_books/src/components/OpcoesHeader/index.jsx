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
        <Opcao key={index}><p>{texto}</p></Opcao>
    )}
    </Opcoes>
  );
}

export default OpcoesHeader;