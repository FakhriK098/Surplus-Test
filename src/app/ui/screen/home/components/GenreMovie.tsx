import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Constants from "../../../../constants";
import { MovieControler } from "../../../../controllers";
import { IGenre, IMovie } from "../../../../entities/Movie";
import { fonts } from "../../../assets/styles/colorThemes";
import Styles from "../../../assets/styles/Styles";
import { ChipGenre } from "../../../components/ChipGenre";

const GenreMovie = () => {
    const navigation = useNavigation();
    const {state, onGetGenreMovie} = MovieControler.useMovieContext();
    useEffect(() => {
        onGetGenreMovie();
    },[]);
    const [selected, setSelected] = useState('');
    const handleSelected = (value: string, id: number) => {
        setSelected(value);
        navigation.navigate(Constants.ROUTE.Movie_List, {id: id});
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{Constants.TITLE.Genre_Movie}</Text>
            <FlatList
                data={state.genre}
                horizontal 
                showsHorizontalScrollIndicator={false}
                renderItem={({item} : any) => (
                    <ChipGenre 
                        title={item.name}
                        onPress={() => handleSelected(item.name, item.id)} 
                        value={selected}/>
                )}/>
        </View>
    );
};

export default GenreMovie;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 10
    },
    title: {
        fontSize: 20,
        marginStart: 3,
        marginBottom: 10,
        color: 'black',
        fontFamily: fonts.regular
    }
})