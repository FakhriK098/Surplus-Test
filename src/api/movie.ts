import Constants from '../app/constants';
import Api from './axios';

const defaultTime = 5000;

const MovieApi = Object.freeze({
    getNowPlaying: () => {
        const api = Api;
        return api.get(
            `${Constants.BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
            {
                headers: {
                    'authorization': Constants.TOKEN
                },
                timeout: defaultTime
            }
        );
    },
    getGenreMovie: () => {
        const api = Api;
        return api.get(
            `${Constants.BASE_URL}/3/genre/movie/list?language=en-US`,
            {
                headers: {
                    'authorization': Constants.TOKEN
                },
                timeout: defaultTime
            }
        );
    },
    getTrandingNow: () => {
        const api = Api;
        return api.get(
            `${Constants.BASE_URL}/3/movie/popular?language=en-US&page=1`,
            {
                headers: {
                    'authorization': Constants.TOKEN
                },
                timeout: defaultTime
            }
        );
    },
    getMovieRecommendation: (id: number) => {
        const api = Api;
        return api.get(
            `${Constants.BASE_URL}/3/movie/${id}/recommendations?language=en-US`,
            {
                headers: {
                    'authorization': Constants.TOKEN
                },
                timeout: defaultTime
            }
        );
    },
    getMovieByGenre: (id: number) => {
        const api = Api;
        return api.get(
            `${Constants.BASE_URL}/4/list/${id}?page=1`,
            {
                headers: {
                    'authorization': Constants.TOKEN
                },
                timeout: defaultTime
            }
        );
    }
});

export default MovieApi;