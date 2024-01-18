import styled from 'styled-components';
import imagemLivro from '../../assets/imagens/livro2.png';
import RecommendedCard from '../RecommendedCard';
import { Title } from '../Title';
import { livros } from './dadosUltimosLancamentos';

const LastReleaseContainer = styled.section`
    background-color: #EBECEE;
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    padding-bottom: 20px;
`

const NewBookContainer = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
`

function LastReleases(){
  return(
    <LastReleaseContainer>
        <Title 
            cor="#EB9B00" 
            tamanhoFonte="36px" 
            alinhamento="center"
        >
            ÚLTIMOS LANÇAMENTOS
        </Title>
        <NewBookContainer>
            { livros.map( livro => (
                <img src={livro.src} key={livro.key}/>
            ) ) }
        </NewBookContainer>

        <RecommendedCard
            title='Talvez você se interesse por...'
            subtitle='Angular 11'
            description='Construindo uma Single Page Application com Angular'
            image={imagemLivro}
        />
        
    </LastReleaseContainer>
  )
}
export default LastReleases