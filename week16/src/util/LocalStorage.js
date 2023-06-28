const get = () => {
	const listString = localStorage.getItem('keyWord')
	let ArrayList = JSON.parse(listString)
	if (ArrayList === null) {
		ArrayList = []
	}
	return [...ArrayList]
}
const set = list => {
	console.log('local 저장됨', list)
	localStorage.setItem('keyWord', JSON.stringify(list))
}

const Local = {
	get,
	set,
}

export default Local
