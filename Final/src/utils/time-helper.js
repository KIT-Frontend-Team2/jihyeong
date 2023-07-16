/**
 *
 * @param {type Date} date
 */
const timeHelper = date => {
	let changeTime = ''
	const thisTime = new Date()
	const createTime = new Date(date)
	if (thisTime.getFullYear() !== createTime.getFullYear())
		return (changeTime = `${
			thisTime.getFullYear() - createTime.getFullYear()
		} 년 전`)
	if (thisTime.getMonth() !== createTime.getMonth())
		return (changeTime = `${thisTime.getMonth() - createTime.getMonth()} 달 전`)
	if (thisTime.getDate() !== createTime.getDate())
		return (changeTime = `${thisTime.getDate() - createTime.getDate()} 일 전`)
	if (thisTime.getHours() !== createTime.getHours())
		return (changeTime = `${
			thisTime.getHours() - createTime.getHours()
		} 시간 전`)
	if (thisTime.getMinutes() !== createTime.getMinutes())
		return (changeTime = `${
			thisTime.getMinutes() - createTime.getMinutes()
		} 분 전`)
	changeTime = `방금`

	return changeTime
}

export default timeHelper
