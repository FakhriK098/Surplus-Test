import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Constants from "./app/constants/index";
import HomeScreen from './app/ui/screen/home';
import MovieListScreen from './app/ui/screen/movie/list';
import { colors } from './app/ui/assets/styles/colorThemes';
import MovieDetailScreen from './app/ui/screen/movie/detail';
import AuthScreen from './app/ui/screen/auth';
import { AuthControler } from './app/controllers';

const Stack = createStackNavigator();

const AppNavigation = () => {

    const headerStyle = {
        title: Constants.TITLE.Movies_By_Genre,
        headerStyle: {backgroundColor: colors.red},
        headerTitleStyle: {color: 'black'},
    };
    const {onGetUserToken, state} = AuthControler.useAuthContext();
   React.useEffect(() => {
        onGetUserToken();
   });
    return (
        <Stack.Navigator>
            {!state.userToken ? (
                <>
                <Stack.Screen
                    name={Constants.ROUTE.Auth}
                    component={AuthScreen}
                    options={{headerShown: false}}/>
                </>
            ) : (
                <>
                <Stack.Screen
                name={Constants.ROUTE.Home}
                component={HomeScreen}
                options={{headerShown: false}}/>
                <Stack.Screen
                name={Constants.ROUTE.Movie_List}
                component={MovieListScreen}
                options={headerStyle}/>
                <Stack.Screen
                name={Constants.ROUTE.Movie_Detail}
                component={MovieDetailScreen}
                options={{headerShown: false}}/>
                </>

            )}
        </Stack.Navigator>
    );
;}

export default AppNavigation;