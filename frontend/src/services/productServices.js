import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_BMPM_API

const getDropDownData = async () => {
    const request = await axios.get(`${baseUrl}/dropdowndata`)
    return request.data
}

const getProduct = async (id) => {
    const request = axios.get(`${baseUrl}/products/${id}`)
    return request.then(response => response.data)
}

const addNewProduct = async (newProduct) => {
    const request = axios.post(`${baseUrl}/products/new`,newProduct)
    return request.then(response => response.data)
}

export default {getDropDownData, getProduct, addNewProduct}
