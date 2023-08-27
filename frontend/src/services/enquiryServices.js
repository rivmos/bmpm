import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const addNewEnquiry = async (newEnquiry) => {
    const res = await axios.post(`${baseUrl}/enquiries/new`, newEnquiry)
    return res
}

export default {addNewEnquiry}