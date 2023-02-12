import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleProp } from 'react-native/types';

export interface ImageStyle {
    width?: number | string;
    height?: number | string;
}

interface FastImageProps {
    styleComponent: StyleProp<ImageStyle> | StyleProp<ImageStyle>[];
    url: string;
}

export const FastImageComponent: React.FC<FastImageProps> = ({
    styleComponent,
    url,
}) => {
    return(
        <FastImage
        style={styleComponent}
        source={{
            uri: `https://image.tmdb.org/t/p/w500${url}`, 
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable
        }}
        resizeMode={FastImage.resizeMode.stretch}/>
    )
}