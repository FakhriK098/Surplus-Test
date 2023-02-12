import React, { useContext, useState } from 'react';
import MovieApi from '../../../api/movie';

interface IState {
    nowPlayingMovie: any;
    genre: any;
    trandingNowMovie: any;
    movieByGenre: any;
}

interface InitialState {
    state: IState,
    onGetMovieNowPlaying: Function,
    onGetGenreMovie: Function,
    onGetTrandingNowMovie: Function,
    onGetMovieByGenre: Function,
}

const initialState = {
    state: {
        nowPlayingMovie: [],
        genre: [],
        trandingNowMovie: [],
        movieByGenre: [],
    },
    onGetMovieNowPlaying: () => {},
    onGetGenreMovie: () => {},
    onGetTrandingNowMovie: () => {},
    onGetMovieByGenre: () => {},
}

const MovieContext = React.createContext<InitialState>(initialState);
const { Provider: MovieProvider} = MovieContext;
const Provider = ({children}) => {
    const [state, setState] = useState<IState>({
        nowPlayingMovie: [],
        genre: [],
        trandingNowMovie: [],
        movieByGenre: []
    });

    const onGetMovieNowPlaying = async () => {
        try {
            const {data} = await MovieApi.getNowPlaying();
            setState((preState) => ({
                ...preState,
                nowPlayingMovie: data.results
            }));
        } catch(error) {
            console.log('Error getMovieNowPlaying: ', error);
        }
    };

    const onGetGenreMovie = async () => {
        try {
            const {data} = await MovieApi.getGenreMovie();
            setState((prevState) => ({
                ...prevState,
                genre: data.genres
            }));
        } catch(error) {
            console.log('Error getGenreMovie: ', error);
        }
    };

    const onGetTrandingNowMovie = async () => {
        try {
            const {data} = await MovieApi.getTrandingNow();
            setState((prevState) => ({
                ...prevState,
                trandingNowMovie: data.results
            }));
        } catch(error) {
            console.log('Error getTrandingMovie: ', error)
        }
    };

    const onGetMovieByGenre = async (id: number) => {
        try {
            const {data} = await MovieApi.getMovieByGenre(id);
            setState((prevState) => ({
                ...prevState,
                movieByGenre: data.results
            }));
        } catch(error) {
            console.log("Error getMovieByGenre:", error);
        }
    };

    return (
        <MovieProvider 
        value={{
            state,
            onGetMovieNowPlaying,
            onGetGenreMovie,
            onGetTrandingNowMovie,
            onGetMovieByGenre
        }}>
            {children}
        </MovieProvider>
    );
};

const useMovieContext = () => useContext(MovieContext);
export default {
    Provider,
    useMovieContext
}