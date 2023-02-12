import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, fonts } from "../../assets/styles/colorThemes";

interface IChipGenre {
    title: string,
    onPress: Function,
    value: string,
}

export const ChipGenre: React.FC<IChipGenre> = ({
    title,
    onPress,
    value,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.container, 
                {borderColor: colors.red }
            ]}
            onPress={() => onPress(title)}>
            <Text style={[
                styles.title,
                {color: colors.red}
            ]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'white',
        marginStart: 5,
        padding: 10
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.regular,
    },
})