import { Layout as AntLayout } from 'antd';
import { useAuth } from '../contexts/useAuth.jsx';
import React from 'react';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = AntLayout;


export function Layout({ children }) {
  const { isLoggedIn, logout } = useAuth();
  console.log('isLoggedIn ', isLoggedIn);

  const onLogout = async () => {
    try {
      await logout();
      location.reload();

    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link to='/'>
          <h2 style={{ color: 'white' }}>Booker</h2>
        </Link>
        {isLoggedIn && (<a style={{ color: 'white' }} onClick={onLogout}>Logout</a>)}

      </Header>
      <Content style={{ height: 'calc(100vh - 55px)' }}>
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