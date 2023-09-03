import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const addNewSubscriber = async (newSubscriber) => {
    const res = await axios.post(`${baseUrl}/subscribers/new`, newSubscriber)
    return res
}

const getSubscribers = async () => {
    const request = axios.get(`${baseUrl}/subscribers/`)
    return request.then(response => response.data)
}

export default {addNewSubscriber, getSubscribers}
