import PropTypes from 'prop-types'
import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

const Chart = ({ size, chart_data, margin }) => (
	<LineChart
		width={size.width}
		height={size.height}
		data={chart_data.data}
		margin={margin}
	>
		<Line type="monotone" dataKey={chart_data.y} stroke="#007679" />
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		<XAxis tickLine={false} dataKey={chart_data.x} />
		<YAxis tickLine={false} tickFormatter={chart_data.formatter} />
		<Tooltip />
	</LineChart>
)

export default Chart

Chart.propTypes = {
	/**
	 * 차트의 사이즈는 어떻게 할까요?
	 */
	size: PropTypes.object,
	/**
	 * 차트의 데이터는 어떻게 할까요?
	 */
	chart_data: PropTypes.object,
	/**
	 * 차트의 여백은 어떻게 할까요?
	 */
	margin: PropTypes.object,
}

Chart.defaultProps = {
	size: {
		width: 400,
		height: 300,
	},
	chart_data: {
		data: [
			{
				name: '5월',
				value: 600000,
			},
			{
				name: '6월',
				value: 300000,
			},
			{
				name: '7월',
				value: 500000,
			},
			{
				name: '최근',
				value: 200000,
			},
		],
		x: 'name',
		y: 'value',
		formatter: y => `${y / 1000}만원`,
	},
	margin: {
		top: 5,
		right: 5,
		bottom: 20,
		left: 20,
	},
}
