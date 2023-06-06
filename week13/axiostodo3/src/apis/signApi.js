import axios from "axios"

const login = async (email, password) => {
    try {
        const res = await axios.post('http://localhost:9000/user/login', { email, password }, {
            withCredentials: true
        })
        localStorage.setItem('accessToken', res.data.data.token)
    } catch (err) {
        console.log(err)
    }
}

const signUp = async (email, password) => {
    try {
        await axios.post("http://localhost:9000/user/sign", { email, password })
    } catch (err) {
        console.log(err)
    }
}

const SIGN_API = {
    login, signUp
}

export default SIGN_API