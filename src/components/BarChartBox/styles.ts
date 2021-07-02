import styled, { keyframes } from 'styled-components';

interface ILegendProps {
    color: string;
}

const animate = keyframes`
    0%{
        transform: translateY(100px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
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
    flex: 1;
    padding: 30px 20px 10px;

    > h2 {
        margin-bottom: 10px;
        padding-left: 16px;
    }

    @media(max-width: 420px){
        padding-right: 0;
    }
`;

export const LegendContainer = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    height: 80%;
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

    padding-left: 16px;

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

        > div {
            width: 36px;
            height: 36px;

            font-size: 12px;    
        }
    }
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;
    width: 50%;

    padding: 70px 16px 20px 0;
`;