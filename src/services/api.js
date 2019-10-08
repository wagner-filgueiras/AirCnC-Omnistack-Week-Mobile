import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.157.2:3334'

});

export default api;