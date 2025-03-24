import axios from 'axios';

const instance = axios.create({
// .. where we make our configurations
    baseURL: process.env.PUBLIC_API_URL
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    // Edit request config
    request.params = {
        ...request.params,
        access_key: process.env.PUBLIC_API_KEY
    }
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    // Edit response config
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;