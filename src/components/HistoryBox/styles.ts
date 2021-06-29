import styled from 'styled-components';

interface ILegendProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 10px;
`;

export const ChartContainer = styled.div`
    width: 100%;
    height: 360px;
`;

export const Header = styled.header`
    width: 100%;

    padding: 0 16px;

    display: flex;
    justify-content: space-between;

    > h2 {
        margin-bottom: 15px;
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
`;