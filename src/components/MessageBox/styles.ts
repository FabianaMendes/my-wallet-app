import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 48%;
    height: 260px;
    margin: 10px 0;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 10px;

    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation: ${animate} .5s;
    
    > header {
        margin-bottom: 20px;
    }

    > header img {
        width: 35px;
        margin-left: 10px;
    }

    @media(max-width: 770px){
        height: 215px;

        > header h1 {
            font-size: 25px;

            img {
                height: 25px;
                width: 25px;
            }
        }

        > header h2 {
            font-size: 20px;
        }
    }

    @media(max-width: 420px){
        width: 100%;
    }
`;