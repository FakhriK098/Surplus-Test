import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../assets/styles/colorThemes";
import { FastImageComponent } from "../FastImage";

interface ITrandingMovieItem {
    imageUrl: string;
    originalTitle: string;
    onPress: Function;
}

const TrandingMovieItem = ({
    imageUrl,
    originalTitle,
    onPress
}: ITrandingMovieItem) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onPress()}>
                <FastImageComponent
                    styleComponent={{width:400, height: 200}}
                    url={imageUrl}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{originalTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TrandingMovieItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.greyish,
        maxHeight: 200,
        marginStart: 3,
    },
    title: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.bold
    },
    titleContainer: {
        position: 'absolute',
        backgroundColor: colors.greyish30,
        width: '100%',
        bottom: 0,
        padding: 10
    }
})