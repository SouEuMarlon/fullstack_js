import styled from 'styled-components';
import Perfil from '../../assets/imagens/perfil.svg';
import Sacola from '../../assets/imagens/sacola.svg';

const Icone = styled.li`
  cursor: pointer;
  margin-right: 40px;
  width: 25px;
`

const Icones = styled.ul`
  align-items: center;
  display: flex;
`

const icones = [Perfil, Sacola]

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone, index) => (
        <Icone key={index}>
          <img src={icone} alt="icone" />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;