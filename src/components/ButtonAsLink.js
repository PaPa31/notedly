import styled from 'styled-components';

const ButtonAsLink = styled.button`
    background: none;
    color: #9279BA;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

:hover, :active {
    color: #B9A5E2;
}
`;

export default ButtonAsLink;