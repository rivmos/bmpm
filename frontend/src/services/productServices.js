import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const getDropDownData = async () => {
    const request = axios.get(`${baseUrl}/dropdowndata`)
    return request.then(response => {console.log(response.data);return response.data})
}

const getProduct = async (id) => {
    const request = axios.get(`${baseUrl}/products/${id}`)
    return request.then(response => response.data)
}


export default {getDropDownData, getProduct}
