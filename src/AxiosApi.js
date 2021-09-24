import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://blog-hw-63-default-rtdb.europe-west1.firebasedatabase.app'
});

export default axiosApi;