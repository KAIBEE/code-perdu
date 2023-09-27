import styled from 'styled-components';

interface ButtonProps {
    selected?: boolean
}

export const Button = styled.button<ButtonProps>`
margin: 10px;
width: 120px;
height: 120px;
background-color: ${props => props.selected ? '#63BFBC' : ''}
`;