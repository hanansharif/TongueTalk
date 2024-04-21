import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Import icon library (optional)

const Settings = ({ navigation }) => {
    const handlePress = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            {/* Profile Section */}
            <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Profile')}>
                <Text style={styles.settingText}>Profile</Text>
                {iconOptional && <Entypo name="chevron-right" size={24} color="#ccc" style={styles.icon} />}
            </TouchableOpacity>

            {/* Chat Settings Section */}
            <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Chats')}>
                <Text style={styles.settingText}>Chat Settings</Text>
                {iconOptional && <Entypo name="chevron-right" size={24} color="#ccc" style={styles.icon} />}
            </TouchableOpacity>

            {/* Account Settings Section */}
            <TouchableOpacity style={styles.settingItem} onPress={() => handlePress('Account')}>
                <Text style={styles.settingText}>Account Settings</Text>
                {iconOptional && <Entypo name="chevron-right" size={24} color="#ccc" style={styles.icon} />}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    settingText: {
        fontSize: 18,
    },
    icon: {
        opacity: 0.5, // Adjust opacity for a subtle visual cue
    },
});

// Optional flag to enable/disable icons
const iconOptional = true; // Set to true to display icons, false to hide

export default Settings;
