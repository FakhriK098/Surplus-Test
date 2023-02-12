import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { FastImageComponent } from '../../../../components/FastImage';
import Icon from "react-native-vector-icons/AntDesign";
import Styles from '../../../../assets/styles/Styles';
import { useNavigation } from '@react-navigation/native';
import { DetailControler } from '../../../../../controllers';
import Constants from '../../../../../constants';
import NowPlayingMovieItem from '../../../../components/NowPlayingMovieItem';
import { fonts } from '../../../../assets/styles/colorThemes';

const MyComponent = () => {
    const navigation = useNavigation();
    const {state, onGetGenreByMovieId, onGetMovieRecommendation} = DetailControler.useDetailContext();

    useEffect(() => {
       onGetGenreByMovieId(); 
       onGetMovieRecommendation(state.movie.id);
    },[]);

    return (
        <View style={styles.container}>
            <View>
                <FastImageComponent 
                    styleComponent={{width: '100%', height: 250}} 
                    url={state.movie.backdrop_path}/>
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={() => navigation.goBack()}>
                    <Icon
                    name="arrowleft"
                    size={30}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginStart: 4}}>
                <FastImageComponent 
                    styleComponent={{width: 125, height: 170}}
                    url={state.movie.poster_path}/>
                <View style={styles.content}>
                    <Text style={Styles.title}>{state.movie.original_title}</Text>
                    <Text style={{fontSize: 12}}>{state.movie.release_date}</Text>
                    <View>
                        <View style={{flex:1, flexDirection:'row', marginTop: 4, maxWidth: '85%'}}>
                            <Text style={Styles.subTitle}>{Constants.TITLE.Genre}</Text>
                            <Text style={[Styles.subValue, {marginStart: 35}]}>{state.genre.toString()}</Text>
                        </View>
                    </View>
                    <View>
                    <View style={{flex:1, flexDirection:'row', marginTop: 2}}>
                        <Text style={Styles.subTitle}>{Constants.TITLE.Language}</Text>
                        <Text style={[Styles.subValue, {marginStart: 10}]}>{state.movie.original_language}</Text>
                    </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row', marginTop: 2}}>
                        <Text style={Styles.subTitle}>{Constants.TITLE.Vote_Average}</Text>
                        <Text style={[Styles.subValue, {marginStart: 43}]}>{state.movie.vote_average}</Text>
                    </View>
                </View>
            </View>
            <Text style={[Styles.overview,{marginHorizontal: 3, alignItems: 'stretch'}]}>{state.movie.overview}</Text>
            <View>
                <Text style={styles.subTitle}>{Constants.TITLE.Recommendation}</Text>
                <FlatList
                    style={{marginVertical: 8}}
                    data={state.movieRecommendation}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={({item}: any) => (
                        <NowPlayingMovieItem
                            imageUrl={item.poster_path ? item.poster_path : ""}
                            onPress={() => {}}/>
            )}
            contentContainerStyle={{flexGrow: 1}}/>
            </View>
        </View>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    btnBack: {
        backgroundColor: 'white',
        borderRadius: 25,
        maxHeight: 40,
        maxWidth: 40,
        padding: 4,
        position: 'absolute',
        marginTop: 20,
        marginLeft: 20
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 4,
        marginStart: 8,
        flexWrap: 'wrap'
    },
    subTitle: {
        fontFamily: fonts.bold,
        fontSize: 18,
        color: 'black',
        marginStart: 3,
        marginTop: 8
    }
})