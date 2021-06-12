import styled from 'styled-components';

interface IContainerProps {
    color: string;
}
export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    width: 31%;
    height: 150px;

    margin: 10px 0;
    padding: 15px 20px;

    border-radius: 10px;

    position: relative;
    overflow: hidden;

    > img {
        position: absolute;
        right: -25px;
        top: -10px;

        height: 110%;

        opacity: 0.3;
    }

    > span {
        font-size: 18px;
        font-weight: 500;
    }

    > small {
        font-size: 12px;
        position: absolute;
        bottom: 15px;
    }
`;

