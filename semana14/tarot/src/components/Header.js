import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Header = () => {

  return (
    <Container>
      <h1>Tarot</h1>
    </Container>
  );
};

export default Header;
