import styled from 'styled-components';
import Search from '../components/Search';

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  min-height: 100vh;
  max-width: 100vw;
`

function Categorias() {
  return (
    <AppContainer>      
      <Search />
    </AppContainer>
  )
}

export default Categorias;
