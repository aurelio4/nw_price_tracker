import { useState, useEffect} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { Card } from 'antd';
import { TooltipProps } from 'recharts';

interface Size {
    width: number;
    height: number;
}

const { Meta } = Card;

const GraphCard = (): JSX.Element => {
	// TODO: use this for styling for mobile
	const [size, setSize] = useState<Size>({ width: window.innerWidth, height: window.innerHeight });
	const [data] = useState<Array<object>>([{date: 'date 1', price: 0.25}, {date: 'date 2', price: 0.20}, {date: 'date 3', price: 0.32}, {date: 'date 4', price: 0.18}, {date: 'date 5', price: 0.13}])

	const resizeHandler = (): void => {
		const width = window.innerWidth
		const height = window.innerHeight
	
		setSize({
		width,
		height
		})
	}

	const CustomTooltip = ({payload, active}: TooltipProps) => {
		if (active) {
			return (
				<div className="custom-tooltip">
					<p className="item-name">{`Item: ${payload?.[0].payload.date}`}</p>
					<p className="item-price">{`Price: ${payload?.[0].payload.price}`}</p>
				</div>
			)
		}

		return null
	}

	useEffect(() => {
		window.onresize = resizeHandler
	})

    return (
        <div className="graph-card-container">
			<Card
				hoverable
				style={{ width: 600, backgroundColor: '#272624', borderRadius: '5px',  }}
				className="graph-card"
			>
				<Meta title="Stone" style={{ textAlign: 'center', paddingBottom: '10px' }} />
				<LineChart className="price-graph" width={600} height={300} data={data} margin={{ right: 60, left: -20, top: 10 }}>
					<Line type="linear" dataKey="price" stroke="#ffffff" />
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
					<XAxis dataKey="date" stroke="#fff" />
					<YAxis stroke="#fff" />
					<Tooltip content={<CustomTooltip />} />
				</LineChart>
			</Card>
        </div>
    )
}

export default GraphCard