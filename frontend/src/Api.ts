import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const HTTP = axios.create({
    baseURL: API_BASE_URL
});

export default {
    signin: async (ID_token:string) => {
        console.log('api/user/signin');
        return HTTP.post(
            '/user/signin', 
            { token: ID_token }, { withCredentials: true }
        );
    }
};