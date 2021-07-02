import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateX(100px);
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

    display: flex;

    animation: ${animate} .5s;

    @media(max-width: 770px){
        height: 215px;
    }

    @media(max-width: 420px){
        width: 100%;
    }
`;

export const SideLeft = styled.aside`
    padding: 30px;

    > h2 {
        margin-bottom: 20px;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    height: 170px;
    padding-right: 15px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
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
        font-size: 14px;
        margin: 0 0 15px;

        > div {
            width: 35px;
            height: 35px;
            font-size: 14px;
            margin-right: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;

    @media(max-width: 770px){
        height: auto;
        width: auto;
    }
`;
