import API_KEY from '../const/api.key'
import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3000' + API_KEY.SEARCH_URL,
})

export default axiosInstance
