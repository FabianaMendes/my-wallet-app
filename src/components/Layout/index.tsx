import React from 'react';
import { Grid } from './styles';
import Aside from '../Aside';
import Content from '../Content';
import MainHeader from '../MainHeader';

const Layout: React.FC = ({ children }) => {
    return(
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Grid>
    );
}

export default Layout;