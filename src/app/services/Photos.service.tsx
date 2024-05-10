import InitAxios from './InitAxios.service';

class Photos extends InitAxios {
    constructor() {
        super("photos");
    }
    getPhotos() {
        return this.axios.get('', { params: { client_id: process.env.NEXT_PUBLIC_ACCESS_KEY } })
            .then((response) => response.data)
            .catch(function (error) { console.log('Error', error.message); });
    }
}

export default new Photos();