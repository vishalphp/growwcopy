import axios from 'axios'

export default axios.create({ baseURL: 'http://localhost/storecart/' });


export const provateAxios = axios.create(
    {
    baseURL: 'http://localhost/storecart/',
    headers: {'Content-Type': 'applocation/json'},
}
);

