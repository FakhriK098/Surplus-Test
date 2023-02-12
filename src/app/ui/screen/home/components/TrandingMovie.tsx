import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import TrandingMovieItem from "../../../components/TrandingMovieItem";
import { fonts } from "../../../assets/styles/colorThemes";
import { Text } from "react-native";
import Constants from "../../../../constants";
import { MovieControler } from "../../../../controllers";
import { useNavigation } from "@react-navigation/native";

const TrandingMovie = () => {
    const navigation = useNavigation();
    const {state, onGetTrandingNowMovie} = MovieControler.useMovieContext();

    useEffect(() => {
        onGetTrandingNowMovie();
    },[]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{Constants.TITLE.Tranding_Now}</Text>
            <FlatList
            data={state.trandingNowMovie}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}: any) => (
                <TrandingMovieItem
                    imageUrl={item.backdrop_path ? item.backdrop_path : ""}
                    originalTitle={item.original_title ? item.original_title : ""}
                    onPress={() => {
                        navigation.navigate(Constants.ROUTE.Movie_Detail, {data: item, genre: state.genre});
                    }}/>
            )}
            contentContainerStyle={{flexGrow: 1}}/>
        </View>
    );
};

export default TrandingMovie;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontSize: 20,
        marginStart: 3,
        marginBottom: 10,
        color: 'black',
        fontFamily: fonts.regular
    }
})