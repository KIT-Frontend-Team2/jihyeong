import { Button } from '@mui/material'
import PropTypes from 'prop-types'

export const MuiButton = ({ ...args }) => {
	return <Button {...args}>{args.label}</Button>
}

MuiButton.propTypes = {
	/**
	 * 버튼내의 글자를 입력해주세요
	 */
	label: PropTypes.string.isRequired,
	/**
	 * 버튼의 형식을 골라주세요
	 */
	variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
	/**
	 * 버튼의 사이즈를 골라주세요
	 */
	size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
	/**
	 * 버튼의 색깔을 골라주세요
	 */
	color: PropTypes.oneOf(['secondary', 'success', 'error', 'primary']),
	/**
	 * 버튼의 활성화 상태를 골라주세요
	 */
	disabled: PropTypes.bool,
	/**
	 * 버튼의 추가설정을 할 수 있습니다.
	 */
	sx: PropTypes.shape({}),
}

MuiButton.defaultProps = {
	label: '확인',
	size: 'default',
	variant: 'contained',
	disabled: false,
}

export default MuiButton
