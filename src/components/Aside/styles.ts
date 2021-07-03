import styled, { css } from 'styled-components';

interface IContainerProps {
    menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};

    border-right: 1px solid ${props => props.theme.colors.gray};

    padding-left: 20px;

    position: relative;

    @media(max-width: 770px){
        padding-left: 15px;
        position: fixed;
        z-index: 2;

        width: 190px;
        height: ${props => props.menuIsOpen ? '100vh' : '70px' };

        overflow: hidden;

        ${props => !props.menuIsOpen && css `
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    height: 70px;
`;

export const ToggleMenu = styled.button`
    height: 40px;
    width: 40px;

    display: none;

    border-radius: 5px;
    font-size: 26px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    &:hover{
        opacity: 0.7;
    }

    @media(max-width: 770px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const LogoImg = styled.img`
    height: 40px;
    width: 40px;

    @media(max-width: 770px){
        display: none;
    }
`;

export const Title = styled.h3<IContainerProps>`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media (max-width: 770px){
        ${props => !props.menuIsOpen && css `
            display: none;
        `};
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;

    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};

    border: none;
    background: none;

    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const ThemeToggleFooter = styled.footer<IContainerProps>`
    display: none;
    
    @media(max-width: 770px){
        ${props => props.menuIsOpen && css`
            display: flex;
            position: absolute;
            bottom: 85px;
        `};
    }
`;