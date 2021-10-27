import React from 'react';
import GraphCard from '../common/GraphCard';
import Sider from '../common/Sider';

import { Layout } from 'antd';

const { Content } = Layout;

const Dashboard = (): JSX.Element => {
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider />
			<Layout className="site-layout">
				<Content style={{ margin: '0', backgroundColor: '#232220' }}>
					<div className="graph-table">
						<GraphCard
							itemName="Stone"
							data={[
								{ date: '10/16/21', price: 0.25 },
								{ date: '10/17/21', price: 0.2 },
								{ date: '10/18/21', price: 0.03 },
								{ date: '10/19/21', price: 0.1 },
								{ date: '10/20/21', price: 0.03 },
							]}
						/>
						<GraphCard
							itemName="Flint"
							data={[
								{ date: '10/16/21', price: 0.04 },
								{ date: '10/17/21', price: 0.11 },
								{ date: '10/18/21', price: 0.23 },
								{ date: '10/19/21', price: 0.16 },
								{ date: '10/20/21', price: 0.16 },
							]}
						/>
						<GraphCard
							itemName="Green Wood"
							data={[
								{ date: '10/16/21', price: 0.12 },
								{ date: '10/17/21', price: 0.02 },
								{ date: '10/18/21', price: 0.24 },
								{ date: '10/19/21', price: 0.19 },
								{ date: '10/20/21', price: 0.22 },
							]}
						/>
						<GraphCard
							itemName="Aged Wood"
							data={[
								{ date: '10/16/21', price: 0.13 },
								{ date: '10/17/21', price: 0.24 },
								{ date: '10/18/21', price: 0.18 },
								{ date: '10/19/21', price: 0.07 },
								{ date: '10/20/21', price: 0.12 },
							]}
						/>
						<GraphCard
							itemName="Some other item"
							data={[
								{ date: '10/16/21', price: 0.07 },
								{ date: '10/17/21', price: 0.08 },
								{ date: '10/18/21', price: 0.02 },
								{ date: '10/19/21', price: 0.04 },
								{ date: '10/20/21', price: 0.14 },
							]}
						/>
						<GraphCard
							itemName="Yet another item"
							data={[
								{ date: '10/16/21', price: 0.1 },
								{ date: '10/17/21', price: 0.2 },
								{ date: '10/18/21', price: 0.04 },
								{ date: '10/19/21', price: 0.06 },
								{ date: '10/20/21', price: 0.16 },
							]}
						/>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
