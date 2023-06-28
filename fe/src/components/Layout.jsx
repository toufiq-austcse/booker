import { Layout as AntLayout } from 'antd';
import { useAuth } from '../contexts/useAuth.jsx';
import React from 'react';

const { Header, Content, Footer } = AntLayout;


export function Layout({ children }) {
  let { isLoggedIn, logout } = useAuth();
  console.log('isLoggedIn ', isLoggedIn);

  async function onLogout() {
    try {
      await logout();
      location.reload();

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <h2 style={{ color: 'white' }}>Booker</h2>
        {isLoggedIn && (<a style={{ color: 'white' }} onClick={onLogout}>Logout</a>)}

      </Header>
      <Content>
        {children}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </div>
  );
}