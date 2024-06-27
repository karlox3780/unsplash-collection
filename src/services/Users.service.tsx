import InitAxios from './InitAxios.service';

class Users extends InitAxios {
    constructor() {
        super("users/karlox3780/collections");
    }
    getCollections() {
        return this.axios.get('', {})
            .then((response) => response.data)
            .catch(function (error) { console.log('Error', error.message); });
    }
}

export default new Users();