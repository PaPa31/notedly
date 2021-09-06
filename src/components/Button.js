import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
  color: #aeafb0;
  background-color: #24272a;
  cursor: pointer;
  :hover {
    opacity: 0.3;
  }
  :active {
    background-color: #ad5537;
  }
`;

export default Button;
