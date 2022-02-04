import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const HTTP = axios.create({
    baseURL: API_BASE_URL
});

export default {
    signin: async (ID_token:string) => {
        console.log('calling http://localhost:8080/user/signin');
        return HTTP.post(
            '/user/signin', 
            { token: ID_token }, { withCredentials: true }
        );
    }
};