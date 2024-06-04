import React, { useState } from 'react';
import { Layout, Button, Input, Card } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from './componets/Logo';
import MenuList from './componets/MenuList';
import ToggleThemeButton from './componets/ToggleThemeButton';


const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          theme={darkTheme ? 'dark' : 'light'} 
          className='sidebar' 
          trigger={null}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header className="site-layout-background" style={{ background: '#fff', padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  type='text'
                  icon={<MenuOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{ marginRight: 16 }}
                />
                <h1 style={{ margin: 0 }}>Navbar</h1>
              </div>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Pesquisar..."
                style={{ width: 200 }}
                // Adicione a lógica de pesquisa aqui
              />
            </div>
          </Header>
          <Content style={{ padding: '0 16px', marginTop: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <Card title="Total de Visualizações da Página" bordered={true} style={{ width: 300, marginBottom: 16 }}>
                1000
              </Card>
              <Card title="Total de Usuários" bordered={true} style={{ width: 300, marginBottom: 16 }}>
                500
              </Card>
              <Card title="Ordem Total" bordered={true} style={{ width: 300, marginBottom: 16 }}>
                $5000
              </Card>
            </div>
            <Link to="/Progress">Botão de Progresso</Link>
        
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;











