import React, { useState } from 'react';

import { Container, Logo, Form, FormTitle } from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { signIn } = useAuth();

    return(
        <Container>
           <Logo>
               <img src={logo} alt="My Wallet"/>
               <h2>My Wallet</h2>
           </Logo>

           <Form onSubmit={()=> signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

                <Input
                    required
                    type="email"
                    placeholder="e-mail"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    required
                    type="password"
                    placeholder="senha"
                    onChange={(event) => setPassword(event.target.value)}
                />

                <Button
                    type="submit"
                >Acessar
                </Button>
           </Form>
        </Container>
    );
}

export default SignIn;