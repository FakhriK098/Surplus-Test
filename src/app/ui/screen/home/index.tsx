import { ScrollView, StyleSheet } from "react-native";
import { MovieControler } from "../../../controllers";
import GenreMovie from "./components/GenreMovie";
import NowPlayingMovie from "./components/NowPlayingMovie";
import TrandingMovie from "./components/TrandingMovie";


const HomeScreen = () => {
    return (
        <MovieControler.Provider>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <NowPlayingMovie/>
                <GenreMovie/>
                <TrandingMovie/>
            </ScrollView>
        </MovieControler.Provider>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 20
    }
})