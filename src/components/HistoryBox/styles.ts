import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

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
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 10px;

    animation: ${animate} .5s;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 360px;

    @media(max-width: 770px){
        height: 165px;
    }
`;

export const Header = styled.header`
    width: 100%;

    padding: 0 16px;

    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 15px;
    }

    @media(max-width: 420px){
        flex-direction: column;

        > h2 {
            margin-bottom: 5px;
        }
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    display: flex;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin: 0 0 15px 10px;
    font-size: 16px;

    > div {
        background-color: ${props => props.color};

        width: 45px;
        height: 45px;

        font-size: 16px;

        border-radius: 7px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-right: 7px;
    }

    @media(max-width: 770px){
        > div {
            width: 25px;
            height: 25px;
        }
    }

    @media(max-width: 420px){
        margin: 0 10px 15px 0;
        font-size: 14px;
    }
`;