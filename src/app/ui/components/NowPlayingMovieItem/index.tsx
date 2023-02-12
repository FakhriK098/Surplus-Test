import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../assets/styles/colorThemes';
import { FastImageComponent } from '../FastImage';

interface INowPlayingMovie {
    imageUrl: string,
    onPress: Function
}

const NowPlayingMovieItem = ({
    imageUrl,
    onPress
}: INowPlayingMovie) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPress()}>
                <FastImageComponent
                    styleComponent={{width:200, height: 300}}
                    url={imageUrl}/>
            </TouchableOpacity>
        </View>
    );
};

export default NowPlayingMovieItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.greyish,
        maxHeight: 300,
        marginStart: 3,
    }
})