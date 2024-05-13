import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons'; // Import Entypo icon
// import { Ionicons } from 'react-native-vector-icons';
// import { Ionicons } from '@react-native-vector-icons/ionicons';
// import MaterialIcons from '@react-native-vector-icons/material-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Settings from './Settings'; // Import your Settings component
import IndividualChats from './IndividualChats'; // Import your IndividualChats component
import Chats from './Chats'; // Import your Chats component
import Calls from './Calls'; // Import your Calls component
import ChatSettings from './ChatSettings'; // Import your ChatSettings component
import AccountSettings from './AccountSettings'; // Import your AccountSettings component
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo for the send icon
const fontFamily = Platform.OS === 'android' ? 'Roboto' : 'Verdana';
const DashMargin = Platform.OS === 'android' ? 40 : 60;
const MyIcon = require('../assets/3dots.png');
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function Dashboard({ navigation }) {
    const handleSelect = (item) => {
        console.log('Selected option:', item);
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.mainText, { fontFamily }]}>TongueTrek</Text>

                {/* Position the menu slightly below the three dots icon */}
                <Menu style={[styles.menu, { marginTop: 5 }]}>
                    <MenuTrigger>
                        {/* <Entypo name="dots-three-vertical" size={24} color="black" /> */}
                        {/* <Ionicons name="ellipsis-horizontal-outline" size={24} color="black" /> */}
                        {/* <Icon name="home" size={30} color="blue" />
                        <FontAwesomeIcon name="ellipsis-h" size={24} color="black" /> */}
                        {/* <Icon name="comments" size={30} color="#900" /> */}
                        <Image source={MyIcon} style={{ width: 25, height: 25 }} />
                        {/* <Text size={24} color="black">Menu</Text> */}
                    </MenuTrigger>
                    <MenuOptions customStyles={menuStyles}>
                        <MenuOption onSelect={() => navigation.navigate('Settings')} text='Settings' />
                        <MenuOption onSelect={() => navigation.navigate('Chats')} text='Chat Settings' />
                        <MenuOption onSelect={() => navigation.navigate('Account')} text='Account Settings' />
                    </MenuOptions>
                </Menu>
            </View>
            <Tab.Navigator>
                <Tab.Screen name="Chats" component={Chats} />
                <Tab.Screen name="Calls" component={Calls} />
            </Tab.Navigator>
        </>
    );
}

const Main = ({ navigation }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="IChat"
                    component={IndividualChats}
                    options={({ route }) => ({
                        headerTitle: route.params?.title, // Access the title prop
                        headerStyle: { backgroundColor: 'lightblue' }, // Set header background color
                        headerRight: () => (
                            // <Button title="Info" onPress={() => console.log('Info button pressed')} />
                            // <Ionicons name="ellipsis-vertical" size={24} />
                            <Image source={MyIcon} style={{ width: 25, height: 25 }} />
                        ),
                        // headerLeft: () => <Text style={{ fontSize: 20 }}>My App</Text>,
                    })}
                />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="Chats" component={ChatSettings} />
                <Stack.Screen name="Account" component={AccountSettings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: DashMargin,
        paddingLeft: 30,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically
    },
    mainText: {
        // fontFamily: 'Verdana',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007BFF',
        marginRight: 'auto', // Push the text to the left as far as possible
    },
    menu: {
        marginLeft: 'auto', // Push the menu to the right as far as possible
    }
});

const menuStyles = {
    optionsContainer: {
        borderRadius: 10, // Round corners
        marginTop: 25
    },
    optionText: {
        fontSize: 18, // Bigger font size
        padding: 10,
    },
    optionWrapper: {
        borderBottomWidth: 1, // Light gray lines between options
        borderBottomColor: 'lightgray',
    },
};

export default Main;
