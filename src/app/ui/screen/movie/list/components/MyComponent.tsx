import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import Constants from "../../../../../constants";
import { MovieControler } from "../../../../../controllers";
import Styles from "../../../../assets/styles/Styles";
import MovieItem from "../../../../components/MovieItem";

const MyComponent: React.FC<{id: number}> = ({id}) => {
    const navigation = useNavigation();
    const {state, onGetMovieByGenre} = MovieControler.useMovieContext();

    useEffect(() => {
        onGetMovieByGenre(id);
    },[])

    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            {state.movieByGenre.length == 0 ? (
                <>
                    <View style={{
                        flex:1, 
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                        <Text style={Styles.title}>{Constants.TITLE.Empty_Movie}</Text>
                    </View>
                </>
            ) : (
                <>
                    <FlatList
                        data={state.movieByGenre}
                        renderItem={({item}: any) => (
                            <MovieItem 
                                data={item}
                                onPress={() => {
                                    navigation.navigate(Constants.ROUTE.Movie_Detail, {data: item, genre: state.genre});
                                }}/>
                        )}
                        numColumns={2}
                        keyExtractor={movie => movie.id}/>
                </>
            )}
        </View>
    );
};

export default MyComponent;