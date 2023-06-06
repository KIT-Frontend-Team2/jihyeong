import axios from "axios";



export const axiosTodo = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + `/todo`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
    withCredentials: true
})

export const axiosSign = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + `/user`,
})
