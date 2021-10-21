import React from 'react'
import GraphCard from '../common/GraphCard'
import Sider from '../common/Sider'

import { Layout } from 'antd';

const { Content } = Layout

const Dashboard = (): JSX.Element => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider />
            <Layout className="site-layout">
                <Content style={{ margin: '0', backgroundColor: '#232220' }}>
                    <div className="graph-table">
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                        <GraphCard />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Dashboard