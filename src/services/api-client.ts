import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0b111b40d5be4e138765af4b435c5693'
    }
})