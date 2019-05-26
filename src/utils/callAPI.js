import axios from 'axios';
const callAPI = (method = 'GET', endpoint, data) => {
    return axios({
        method: method,
        url: `https://5ce784a89f2c390014db9ee0.mockapi.io/${endpoint}`,
        data: data
    }).catch(err => console.log(err));
};

export default callAPI;