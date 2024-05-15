import axios, { AxiosInstance } from 'axios';

class InitAxios {
    axios: AxiosInstance;
    constructor(path: string) {
        this.axios = axios.create({
            baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}${path}`
        })
    }
}

export default InitAxios;