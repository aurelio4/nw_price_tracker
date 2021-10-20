import React from 'react'
import Graph from '../common/Graph'
import Sider from '../common/Sider'

import { Layout } from 'antd';

const { Content } = Layout

const Dashboard = (): JSX.Element => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider />
            <Layout className="site-layout">
                <Content style={{ margin: '0 16px' }}>
                    <Graph />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard