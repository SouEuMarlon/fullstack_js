import styled from "styled-components"

const Input = styled.input`
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  outline: none;
  padding: 1rem;
  width: 20rem;

  &::placeholder {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
  }
`

export default Input