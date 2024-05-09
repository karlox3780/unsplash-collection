import axios from 'axios';

class InitAxios {
    constructor(path: string) {
        this.axios = axios.create({
            baseURL: `${process.env.ACCESS_KEY}${path}`
        })
    }
}

export default InitAxios;