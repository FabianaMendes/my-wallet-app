import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import Toggle from '../Toggle';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    MdDashboard,
    MdArrowUpward,
    MdArrowDownward,
    MdExitToApp, 
    MdClose,
    MdMenu
} from 'react-icons/md';

import { 
    Container,
    Header,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    Title, 
    MenuItemButton, 
    ToggleMenu,
    ThemeToggleFooter
} from './styles';

const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }


    return(
        <Container menuIsOpen={menuIsOpen}>
            <Header>
                <ToggleMenu onClick={() => setMenuIsOpen(!menuIsOpen)}>
                    {menuIsOpen ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogoImg src={logo} alt="logo-my-wallet" />
                <Title menuIsOpen={menuIsOpen}>My Wallet</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward/>
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>

            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={menuIsOpen}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;