import axios from "axios";
import { axiosClient } from "./axiosClient";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const addNewEnquiry = async (newEnquiry) => {
    const res = await axios.post(`${baseUrl}/enquiries/new`, newEnquiry)
    return res
}

const getEnquiries = async () => {
    const request = axiosClient.get(`/enquiries/`)
    return request.then(response => response.data)
}

const deleteEnquiry = async (id) => {
    const res = await axiosClient.delete(`${baseUrl}/enquiries/${id}`)
    return res
}
export default {addNewEnquiry, getEnquiries, deleteEnquiry}