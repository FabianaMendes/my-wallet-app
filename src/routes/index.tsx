import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import PrivateRoutes from './app.routes';
import PublicRoutes from './auth.routes';

const Routes: React.FC = () => {
    const { logged } = useAuth();

    return(
        <BrowserRouter>
            { logged ? <PrivateRoutes/> : <PublicRoutes/> }
        </BrowserRouter>
    )
        
};

export default Routes;