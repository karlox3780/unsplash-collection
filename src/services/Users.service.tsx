import InitAxios from './InitAxios.service';

class Users extends InitAxios {
    constructor() {
        super("users/");
    }
    getCollections() {
        return this.axios.get('karlox3780/collections', { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}` } })
            .then((response) => response.data)
            .catch(function (error) { console.log('Error', error.message); });
    }
}

export default new Users();