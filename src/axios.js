import axios from 'axios';

const instance = axios.create({
    baseURL : "https://whatsup-ouss-clone.herokuapp.com"
})

export default instance;