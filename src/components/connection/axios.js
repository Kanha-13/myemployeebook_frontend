import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:1312/",
})

export default instance;