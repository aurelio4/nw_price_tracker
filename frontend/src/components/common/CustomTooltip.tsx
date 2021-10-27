import { TooltipProps } from 'recharts';

export const CustomTooltip = ({ payload, active }: TooltipProps) => {
	if (active) {
		return (
			<div className="custom-tooltip">
				<p className="item-name">{`Item: ${payload?.[0].payload.date}`}</p>
				<p className="item-price">{`Price: ${payload?.[0].payload.price}`}</p>
			</div>
		);
	}

	return null;
};
