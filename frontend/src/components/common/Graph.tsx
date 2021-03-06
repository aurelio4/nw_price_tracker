import React, { useState, useEffect } from 'react';
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
} from 'recharts';

interface Size {
	width: number;
	height: number;
}

const Graph = (): JSX.Element => {
	const [size, setSize] = useState<Size>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const data = [
		{ name: 'date 1', price: 0.25 },
		{ name: 'date 2', price: 0.2 },
		{ name: 'date 3', price: 0.32 },
		{ name: 'date 4', price: 0.18 },
		{ name: 'date 5', price: 0.13 },
	];

	const resizeHandler = () => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		setSize({
			width,
			height,
		});
	};

	useEffect(() => {
		window.onresize = resizeHandler;
	});

	return (
		<LineChart
			className="price-graph"
			width={size?.width / 1.3}
			height={450}
			data={data}
			margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
		>
			<Line type="linear" dataKey="price" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
		</LineChart>
	);
};

export default Graph;
