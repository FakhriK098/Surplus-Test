import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useState } from 'react';
import Constants from '../../constants';

interface IState {
    userToken: string | null;

}

interface InitialState {
    onLogin: Function;
    onGetUserToken: Function;
    state: IState;
}

const initialState = {
    onLogin: () => {},
    onGetUserToken: () => {},
    state: {
        userToken: null
    }
}

const AuthContext = React.createContext<InitialState>(initialState);
const {Provider: AuthProvider} = AuthContext;
const Provider = ({children}) => {
    const [state, setState] = useState<IState>({
        userToken: null
    })

    const onLogin = async (email: string, password: string) => {
        if(email === Constants.EMAIL && password === Constants.PASSWORD) {
            try {
                await AsyncStorage.setItem(
                    Constants.USER_TOKEN,
                    email
                );
                return 'Success';
            } catch(error) {
                return null;
            }
        }
        return null;
    };

    const onGetUserToken = async() => {
        try {
            const resultToken = await AsyncStorage.getItem(Constants.USER_TOKEN);
            setState((prevState) => ({
                ...prevState,
                userToken: resultToken,
            }));
        } catch(error) {
            return null;
        }
    }

    return (
        <AuthProvider value={{
            state,
            onLogin,
            onGetUserToken,
        }}>
            {children}
        </AuthProvider>
    );
};

const useAuthContext = () => useContext(AuthContext);
export default {
    Provider,
    useAuthContext
}