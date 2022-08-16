import axios from "axios";

export default axios.create({
    baseURL: 'https://tfm.jediupc.com/api',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
});