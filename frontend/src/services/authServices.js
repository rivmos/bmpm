import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const createUser = async (newUser) => {
    const res = await axios.post(`${baseUrl}/auth/signup`, newUser)
    return res
}

const loginUser = async (user) => {
    const res = await axios.post(`${baseUrl}/auth/login`, user)
    return res.data
}


export default {createUser, loginUser}