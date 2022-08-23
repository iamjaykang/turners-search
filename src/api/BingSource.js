import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.bing.microsoft.com/v7.0/custom'
})
