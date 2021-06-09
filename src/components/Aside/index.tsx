import React from 'react';

import logo from '../../assets/logo.svg';

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp
} from 'react-icons/md';

import { 
    Container,
    Header,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    Title 
} from './styles';

const Aside: React.FC = () => {
    return(
        <Container>
            <Header>
                <LogoImg src={logo} alt="logo-my-wallet" />
                <Title>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                
                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}

export default Aside;