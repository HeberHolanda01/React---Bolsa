import React from 'react';
import { HomeOutlined, AppleOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


const MenuList = ({ darkTheme }) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className='menu-bar'>
      <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
      Progress
      </Menu.Item>
      <Menu.SubMenu key='subtask'  icon={<BarsOutlined/>} title='Task'>
        <Menu.Item key='task1'>Task 1</Menu.Item>
        <Menu.Item key='task2'>Task 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppleOutlined />}>
        Activity
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;


