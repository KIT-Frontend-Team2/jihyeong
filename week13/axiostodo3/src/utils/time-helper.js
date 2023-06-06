/**
 * 
 * @param {type Date} date 
 */
const timeHelper = (date) => {
    let result = '';
    const thisTime = new Date()
    const createTime = new Date(date)
    if (thisTime.getFullYear() !== createTime.getFullYear()) return result = `${thisTime.getFullYear() - createTime.getFullYear()}년 전`
    if (thisTime.getMonth() !== createTime.getMonth()) return result = `${thisTime.getMonth() - createTime.getMonth()}월 전`
    if (thisTime.getDate() !== createTime.getDate()) return result = `${thisTime.getDate() - createTime.getDate()}일 전`
    if (thisTime.getHours() !== createTime.getHours()) return result = `${thisTime.getHours() - createTime.getHours()}시간 전`
    if (thisTime.getMinutes() !== createTime.getMinutes()) return result = `${thisTime.getMinutes() - createTime.getMinutes()}분 전`
    result = `방금 전`

    return result
}

export default timeHelper
