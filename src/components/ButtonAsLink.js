import styled from 'styled-components';

const ButtonAsLink = styled.button`
    background: none;
    color: #9279BA;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

:hover, :active, :visited {
    color: #D1C1F2;
}
`;

export default ButtonAsLink;