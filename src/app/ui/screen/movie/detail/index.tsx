import { useRoute } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import { DetailControler } from "../../../../controllers";
import MyComponent from "./components/MyComponent";

interface IDetailValue {
    movie: any,
    genre: any
}

const MovieDetailScreen = () => {
    const {data, genre}: any = useRoute().params;
    const value: IDetailValue = {
        movie: data,
        genre
    }
    return (
        <DetailControler.Provider value={value}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: 'white'}}>
                    <MyComponent/>
            </ScrollView>
        </DetailControler.Provider>
    );
};

export default MovieDetailScreen;