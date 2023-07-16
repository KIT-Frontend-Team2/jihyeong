import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

import MuiButton from './Button'

export default {
	title: 'Atom/Button',
	tags: ['autodocs'],
	component: MuiButton,
	argTypes: {
		button: { control: { type: 'text' } },
		disabled: { control: 'boolean' },
		size: {
			control: {
				type: 'select',
			},
			options: ['default', 'small', 'medium', 'large'],
		},
		onClick: { action: '클릭' },
	},
}

export const 중간사이즈 = {
	args: {
		size: 'medium',
		label: 'Error',
		endIcon: <AccessAlarmIcon />,
	},
}

export const 작은사이즈 = {
	args: {
		size: 'small',
		label: 'send',
	},
}

export const 비활성화 = {
	args: {
		size: 'small',
		label: 'send',
		color: 'error',
		disabled: true,
	},
}
