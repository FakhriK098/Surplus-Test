import React, { useContext, useState } from "react";
import MovieApi from "../../../api/movie";

interface IState {
    movie: any,
    genre: any,
    movieRecommendation: any,
}

interface InitialState {
    onGetMovieRecommendation: Function;
    onGetGenreByMovieId: Function;
    state: IState
}

const initialState = {
    onGetMovieRecommendation: () => {},
    onGetGenreByMovieId: () => {},
    state: {
        movie: null,
        genre: []
    }
}

interface IValue {
    movie: any;
    genre: any;
}

const DetailContext = React.createContext<InitialState>(initialState);
const { Provider: DetailProvider} = DetailContext;
const Provider: React.FC<{value: IValue}> = ({children, value}) => {
    const [state, setState] = useState<IState>({
        movie: value.movie,
        genre: [],
        movieRecommendation: []
    })

    const onGetGenreByMovieId = () => {
        let genreMovie: string[] = [];
        value.genre.map(item => {
            if(value.movie.genre_ids.find(ids => ids === item.id)) {
                genreMovie.push(item.name);
            }
        });
        setState((prevState) => ({
            ...prevState,
            genre: genreMovie
        }));
    };

    const onGetMovieRecommendation = async (id: number) => {
        try {
            const {data} = await MovieApi.getMovieRecommendation(id);
            setState((prevState) => ({
                ...prevState,
                movieRecommendation: data.results
            }));
        } catch(error) {
            console.log("Error getMovieRecommendation: ", error);
        }
    };

    return (
        <DetailProvider 
        value={{
            onGetMovieRecommendation,
            onGetGenreByMovieId,
            state
        }}>
            {children}
        </DetailProvider>
    );
};

const useDetailContext = () => useContext(DetailContext);
export default {
    Provider,
    useDetailContext
};