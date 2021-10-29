// import { useState, useEffect} from 'react'
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';
import { Card } from 'antd';
import { CustomTooltip } from '../common/CustomTooltip';

// interface Size {
//     width: number;
//     height: number;
// }

interface PropType {
	itemName: string;
	data: Array<object>;
}

const { Meta } = Card;

const GraphCard = ({ itemName, data }: PropType): JSX.Element => {
	// TODO: use this for styling for mobile?
	// const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight});

	// const resizeHandler = (): void => {
	// 	const width = window.innerWidth
	// 	const height = window.innerHeight

	// 	setSize({
	// 	width,
	// 	height
	// 	})
	// }

	// useEffect(() => {
	// 	window.onresize = resizeHandler
	// })

	return (
		<div className="graph-card-container">
			<Card
				hoverable
				style={{ width: 600, backgroundColor: '#272624', borderRadius: '5px' }}
				className="graph-card"
			>
				<Meta
					title={itemName}
					style={{ textAlign: 'center', paddingBottom: '10px' }}
				/>
				<LineChart
					className="price-graph"
					width={600}
					height={300}
					data={data}
					margin={{ right: 60, left: -20, top: 10 }}
				>
					<Line type="linear" dataKey="price" stroke="#ffffff" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="date" stroke="#fff" />
					<YAxis stroke="#fff" />
					<Tooltip content={<CustomTooltip />} />
				</LineChart>
			</Card>
		</div>
	);
};

export default GraphCard;
