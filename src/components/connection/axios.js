import axios from 'axios'

const instance = axios.create({
    baseURL: "https://myempmanager.herokuapp.com/",
})

export default instance;