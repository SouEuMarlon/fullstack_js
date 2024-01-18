import styled from "styled-components";

export const Title = styled.h2`
  background-color: #FFF;
  color: ${props => props.cor || '#000'};
  font-size: ${props => props.tamanhoFonte || '18px'};
  margin: 0;
  padding: 30px 0;
  text-align: ${props => props.alinhamento || 'center'};
  width: 100%;
`