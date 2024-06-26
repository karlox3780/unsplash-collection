import InitAxios from './InitAxios.service';

class Collections extends InitAxios {
    constructor() {
        super("collections/");
    }
    createCollection(title: string, description: string) {
        return this.axios.get('', { params: { title: title, description: description } })
            .then((response) => response.data)
            .catch(function (error) { console.log('Error', error.message); });
    }
}

export default new Collections();