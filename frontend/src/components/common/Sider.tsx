import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
  } from '@ant-design/icons';

const Sider = (): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [active, setActive] = useState<string>('1')
    const { Sider } = Layout

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
          <Menu theme="dark" defaultSelectedKeys={[active]} mode="inline">
            <Menu.Item key="1" onClick={(e) => setActive(e.key)} icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" onClick={(e) => setActive(e.key)} icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="9" onClick={(e) => setActive(e.key)} icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
    )
}

export default Sider