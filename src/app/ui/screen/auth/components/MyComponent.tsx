import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Constants from '../../../../constants';
import { AuthControler } from '../../../../controllers';
import { colors, fonts } from '../../../assets/styles/colorThemes';

const MyComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {onLogin} = AuthControler.useAuthContext();
    const navigation = useNavigation();

    const actionLogin = async (email?: string, password?: string) => {
        if (email === '' || password === '') {
            if (Platform.OS === 'android') {
                ToastAndroid.show(Constants.MESSAGE.Empty_Login, ToastAndroid.SHORT);
                return;
            }
        }

        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!expression.test(email ? email : '')) {
            if (Platform.OS === 'android') {
                ToastAndroid.show(Constants.MESSAGE.Wrong_Format_Email, ToastAndroid.SHORT);
                return;
            }
        }
        const result = await onLogin(email, password);
        if(result !== null) {
            navigation.navigate(Constants.ROUTE.Home);
        } else {
            if(Platform.OS === 'android') {
                ToastAndroid.show(Constants.MESSAGE.Wrong_Email_Password, ToastAndroid.SHORT);
            }
        }


    }
    return (
        <View style={styles.container}>
            <Text>Hallo</Text>
            <TextInput
                style={styles.inputView}
                placeholder='Email'
                placeholderTextColor={colors.greyish}
                onChangeText={(email) => setEmail(email)}/>
            <TextInput
                style={styles.inputView}
                placeholder='Password'
                placeholderTextColor={colors.greyish}
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}/>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={() => actionLogin(email, password)}>
                <Text
                    style={{fontFamily: fonts.regular, color: 'white'}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputView: {
        backgroundColor: colors.greyish30,
        borderRadius: 25,
        width: '70%',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 10
    },
    btnLogin: {
        backgroundColor: colors.red,
        borderRadius: 25,
        width: '70%',
        padding: 20,
        marginTop: 10,
        alignItems: 'center'
    }
})