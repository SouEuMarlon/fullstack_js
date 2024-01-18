import styled from 'styled-components';
import logo from '../../assets/imagens/logo.svg';

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 30px;
`

const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <>
      <LogoContainer>
        <LogoImg src={logo} alt="Alura Books"/>
        <p>
          <strong>Alura</strong>
          Books
        </p>  
      </LogoContainer>
    </>
  )
}

export default Logo