import styled from 'styled-components';

const ButtonAsLink = styled.button`
    background: none;
    color: #741B17;
    border: none;
    padding: 0;
    font: inherit;
    text-decoration: underline;
    cursor: pointer;

:hover, :active {
    color: #c0443e;
}
`;

export default ButtonAsLink;