import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
// import Parse from 'parse/react-native';
import Styles from './Styles';

const UserLogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginPress = () => {
        console.log('Login Clicked');
    };

    return (
        <View style={Styles.login_wrapper}>
            <Image
                style={Styles.image}
                source={require('./logo.png')}
            />
            <View style={Styles.form}>
                <TextInput
                    style={Styles.form_input}
                    // value={username}
                    placeholder={'Username'}
                    onChangeText={(text) => setUsername(text)}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                />
                <TextInput
                    style={Styles.form_input}
                    // value={password}
                    placeholder={'Password'}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={handleLoginPress}>
                    <View style={Styles.button}>
                        <Text style={Styles.button_label}>{'Sign in'}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default UserLogIn;