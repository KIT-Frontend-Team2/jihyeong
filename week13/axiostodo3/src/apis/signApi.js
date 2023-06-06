import { axiosSign } from "utils/axios"

const login = async (email, password) => {
    try {
        const res = await axiosSign.post('/login', { email, password }, {
            withCredentials: true
        })
        localStorage.setItem('accessToken', res.data.data.token)
    } catch (err) {
        console.log(err)
    }
}

const signUp = async (email, password) => {
    try {
        await axiosSign.post("/sign", { email, password })
    } catch (err) {
        console.log(err)
    }
}

const SIGN_API = {
    login, signUp
}

export default SIGN_API