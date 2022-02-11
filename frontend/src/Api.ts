import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const HTTP = axios.create({
    baseURL: API_BASE_URL
});

export default {
    searchUser: async (name:string) => {
        return HTTP.get(
            `/users/name=${name}`
        );
    },

    signin: async (ID_token:string) => {
        return HTTP.post(
            '/users/signin', 
            { token: ID_token }, { withCredentials: true }
        );
    }
};