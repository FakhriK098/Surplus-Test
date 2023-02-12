import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IMovie } from "../../../entities/Movie";
import { colors, fonts } from "../../assets/styles/colorThemes";
import Styles from "../../assets/styles/Styles";
import { FastImageComponent } from "../FastImage";

const MovieItem = ({
    data,
    onPress,
}: any) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => onPress()}>
            <View>
                <FastImageComponent 
                    styleComponent={{height: 200}} 
                    url={data.poster_path ? data.poster_path : ""}/>
                <View style={styles.content}>
                    <Text style={Styles.title}>{data.original_title}</Text>
                    <Text style={Styles.overview}>{data.overview}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default MovieItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.greyish30,
        borderRadius: 10,
        margin: 3,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        padding: 8
    },
})