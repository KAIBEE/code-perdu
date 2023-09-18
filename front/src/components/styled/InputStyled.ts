import styled from 'styled-components';

export const InputStyled = styled.input`
width: 375px;
padding: 10px;
height: 16px
border: 1px;
border-color: #D0BCFF;
background: transparent;
color: white;
&::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    background-image: url('./src/assets/Icon.png');
`;