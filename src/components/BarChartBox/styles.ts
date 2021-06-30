import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 48%;
    height: 260px;


    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 10px;

    display: flex;

`;

export const SideLeft = styled.aside`
    flex: 1;
    padding: 30px 20px 10px;

    > h2 {
        margin-bottom: 10px;
        padding-left: 16px;
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
`;

export const SideRight = styled.main`
    flex: 1;
    min-height: 150px;

    padding: 70px 16px 20px;
`;