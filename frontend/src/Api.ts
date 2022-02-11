import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const HTTP = axios.create({
    baseURL: API_BASE_URL
});

export default {
    getChatrooms: async (userID: string) => {
        console.log(`api/users/chatrooms/id=${userID}`);
        return HTTP.get(`/users/chatrooms/id=${userID}`);
    },

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