
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';


const chatsData = [
    { id: '1', name: 'John Doe', avatar: require('../assets/avatar.png') }, // Replace with your image path (optional)
    { id: '2', name: 'Jane Smith', avatar: require('../assets/avatar.png') }, // Replace with your image path (optional)
];

const ChatListItem = ({ item, navigation }) => {
    const avatarUri = item.avatar ? item.avatar : require('../assets/avatar.png'); // Default avatar

    return (
        <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('IChat', { chatId: item.id, chatName: item.name, title: item.name })} // Pass chatName as title
        >
            {item.avatar && <Image source={item.avatar} style={styles.avatar} />}
            <Text style={styles.chatName}>{item.name}</Text>
        </TouchableOpacity>
    );
};

const Chats = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Chats</Text> */}
            <FlatList
                data={chatsData}
                renderItem={({ item }) => <ChatListItem item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatName: {
        fontSize: 18,
    },
});

export default Chats;
