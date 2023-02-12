import { useRoute } from '@react-navigation/native';
import React from 'react';
import { MovieControler } from '../../../../controllers';
import MyComponent from './components/MyComponent';

const MovieListScreen = () => {
    const {id}: any = useRoute().params;
    return (
        <MovieControler.Provider>
            <MyComponent id={id}/>
        </MovieControler.Provider>
    );
};

export default MovieListScreen;