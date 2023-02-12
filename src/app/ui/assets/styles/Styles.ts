import { StyleSheet } from "react-native";
import { colors, fonts } from "./colorThemes";

const Styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: 'black'
    },
    overview: {
        fontSize: 12,
        fontFamily: fonts.regular,
        color: 'black',
        marginTop: 4
    },
    subTitle: {
        fontSize: 14,
        fontFamily: fonts.bold,
        color: colors.greyish
    },
    subValue: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: 'black'
    }
});

export default Styles;