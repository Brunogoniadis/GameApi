import axios from 'axios';

const key = "5b057e92669e4147b0c1928da037756a";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    headers: {
        'Access-Control-Allow-Origin': 'https://game-api-lac.vercel.app/',
    },
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
        return this.axiosInstance.get(`/games?key=${this.key}&genres=${genreId}&page_size=150`);
    }

    getGameDetails(gameId) {
        return this.axiosInstance.get(`/games/${gameId}?key=${this.key}`);
    }

    getGameScreenshots(gameId) {
        return this.axiosInstance.get(`/games/${gameId}/screenshots?key=${this.key}`);
    }

    searchGames(query) {
        return this.axiosInstance.get(`/games?key=${this.key}&search=${query}&page_size=10`);
    }

}


export default GlobalAPI;