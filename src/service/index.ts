import axios from "axios";

export default axios.create({
    baseURL: 'https://tfm.jediupc.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
});