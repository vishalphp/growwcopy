import axios from 'axios'

export default axios.create({ baseURL: 'http://localhost/storecart/' });


export const ProvateAxios = axios.create(
    {
    baseURL: 'http://localhost/storecart/',
    headers: {'Content-Type': 'applocation/json'},
}
);

