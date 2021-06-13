import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;

    margin: 30px 0 10px;
    padding: 10px;

    border-radius: 5px;

    font-weight: bold;
    font-size: 18px;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.warning};

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }
`;