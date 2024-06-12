import InitAxios from './InitAxios.service';

class Search extends InitAxios {
    constructor() {
        super("search/");
    }
    getPhotos(searchImage: string) {
        return this.axios.get('photos', { params: { per_page: 8, query: searchImage, client_id: process.env.NEXT_PUBLIC_ACCESS_KEY } })
            .then((response) => response.data)
            .catch(function (error) { console.log('Error', error.message); });
    }
}

export default new Search();