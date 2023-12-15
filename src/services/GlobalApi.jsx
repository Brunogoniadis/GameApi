import axios from 'axios';

const key = "5b057e92669e4147b0c1928da037756a";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api'
});

class GlobalAPI {
    constructor() {
        this.key = key;
        this.axiosInstance = axiosInstance;
    }

    getGenreList() {
        return this.axiosInstance.get('/genres?key=' + this.key);
    }

    getGamesByGenre(genreId) {
        return this.axiosInstance.get(`/games?key=${this.key}&genres=${genreId}`);
    }


    getGameDetails(gameId) {
        return this.axiosInstance.get(`/games/${gameId}?key=${this.key}`);
    }
}

export default GlobalAPI;