import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;