import React from 'react';
import { View, Text } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const MyAdvancedDropDown = () => (
    <View style={{ marginTop: 100 }}>
        <Text>Hello world!</Text>
        <Menu>
            <MenuTrigger text='Select action' />
            <MenuOptions>
                <MenuOption onSelect={() => alert(`Save`)} text='Save' />
                <MenuOption onSelect={() => alert(`Delete`)} >
                    <Text style={{ color: 'red' }}>Delete</Text>
                </MenuOption>
                <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
        </Menu>
    </View>
);

export default MyAdvancedDropDown;
