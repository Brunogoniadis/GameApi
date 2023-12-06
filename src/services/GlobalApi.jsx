import axios from 'axios';

function GlobalAPI() {
    const key = "5b057e92669e4147b0c1928da037756a";
    
    // Renomeie a constante para axiosInstance, por exemplo
    const axiosInstance = axios.create({
        baseURL: 'https://api.rawg.io/api'
    });

    const getGenreList = axiosInstance.get('/genres?key=' + key);

    return getGenreList;
}

export default GlobalAPI; 