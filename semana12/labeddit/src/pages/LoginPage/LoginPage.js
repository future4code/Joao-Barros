import React from 'react';
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled';
import logo from '../../assets/logo.jpg';
import { Button } from '@material-ui/core';
import LoginForm from './LoginForm';
import { goToCadastro } from '../../routes/cordinator';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToCadastro(history)}
          type={'submit'}
          fullWidth
          variant={'text'}
          color={'primary'}
          margin={'normal'}
        >
          Ainda não possui conta? Cadastre-se aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;