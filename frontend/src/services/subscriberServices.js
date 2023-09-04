import axios from "axios";
import { axiosClient } from "./axiosClient";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const addNewSubscriber = async (newSubscriber) => {
    const res = await axios.post(`${baseUrl}/subscribers/new`, newSubscriber)
    return res
}

const getSubscribers = async () => {
    const request = axiosClient.get(`/subscribers/`)
    return request.then(response => response.data)
}

export default {addNewSubscriber, getSubscribers}
