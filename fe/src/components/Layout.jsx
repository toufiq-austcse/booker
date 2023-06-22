import {Layout as AntLayout} from 'antd';
const {Header, Content, Footer} = AntLayout;


export function Layout({children}) {

    return (
        <>
            <Header
                style={{
                    display: 'flex', alignItems: 'center',
                }}
            >
                <h3 style={{color: "white"}}>Booker</h3>

            </Header>
            <Content style={{height: "calc(100vh - 55px)"}}>
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