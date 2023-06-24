import { Layout as AntLayout } from 'antd';
import { useAuth } from '../contexts/useAuth.jsx';

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
    <>
      <Header
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <h2 style={{ color: 'white' }}>Booker</h2>
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
    </>
  );
}