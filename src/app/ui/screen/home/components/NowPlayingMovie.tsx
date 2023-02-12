import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { IMovie } from "../../../../entities/Movie";
import NowPlayingMovieItem from "../../../components/NowPlayingMovieItem";
import Constants from "../../../../constants";
import { fonts } from "../../../assets/styles/colorThemes";
import { MovieControler } from "../../../../controllers";
import { useNavigation } from "@react-navigation/native";

interface IMovieList {
    item: IMovie
}

const NowPlayingMovie = () => {
    const navigation = useNavigation();
    const { state, onGetMovieNowPlaying} = MovieControler.useMovieContext();
    useEffect(() => {
        onGetMovieNowPlaying();
    },[]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Constants.TITLE.Now_Playing}</Text>
            <FlatList
            data={state.nowPlayingMovie}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}: any) => (
                <NowPlayingMovieItem
                    imageUrl={item.poster_path ? item.poster_path : ""}
                    onPress={() => {
                        navigation.navigate(Constants.ROUTE.Movie_Detail, {data: item, genre: state.genre});
                    }}/>
            )}
            contentContainerStyle={{flexGrow: 1}}/>
        </View>
    );
};

export default NowPlayingMovie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10,
    },
    title: {
        fontSize: 20,
        marginStart: 3,
        marginBottom: 10,
        color: 'black',
        fontFamily: fonts.regular
    }
})