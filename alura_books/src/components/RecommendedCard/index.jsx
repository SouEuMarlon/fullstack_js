/* eslint-disable react/prop-types */
import styled from "styled-components"
import { Title } from "../Title"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 20px auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        background-color: #D68900;        
        cursor: pointer;
    }
`

const Description = styled.p`
    max-width: 300px;
`

const Subtitle = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const BookImage = styled.img`
    width: 150px;
`
function RecommendedCard({title, subtitle, description, image}) {
  return(
    <Card>
      <div>
          <Title tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
      </div>
      <div>
        <BookImage src={image} alt={title}/>
        <Button>Saiba mais</Button>
      </div>
    </Card>
  )
}

export default RecommendedCard