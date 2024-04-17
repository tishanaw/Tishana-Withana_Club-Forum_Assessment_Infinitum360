// components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Layout = ({ children }) => {
    return (
      <Container>
        <Navbar />
        <Main>{children}</Main>
        <Footer>
          © 2024 Club Forum. All rights reserved.
        </Footer>
      </Container>
    );
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export default Layout;
