import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo for the send icon
import EmojiSelector, { IconSize } from 'react-native-emoji-selector'; // Import EmojiSelector from react-native-emoji-selector

const MOCK_DATA = [
    { id: 1, user: 'You', message: 'Hi there!' },
    { id: 2, user: 'John Doe', message: 'Hello! How can I help you today?' },
];

const IndividualChats = ({ route }) => {
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState(MOCK_DATA);
    const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false); // State to manage the visibility of the emoji picker

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const newMessage = { id: Date.now(), user: 'You', message: messageText };
            setMessages([...messages, newMessage]);
            setMessageText('');
        }
    };

    const handleEmojiPress = (emoji) => {
        setMessageText(messageText + emoji); // Append the selected emoji to the message text
        setIsEmojiPickerVisible(false); // Close the emoji picker
    };

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={messages}
                    style={styles.flatListContainer}
                    renderItem={({ item }) => (
                        <View style={item.user === 'You' ? styles.youMessage : styles.otherMessage}>
                            <Text style={styles.messageText}>{item.message}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={messageText}
                        onChangeText={setMessageText}
                        placeholder="Type your message..."
                    />
                    <TouchableOpacity style={styles.emojiButton} onPress={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}>
                        <Ionicons name="happy-outline" size={24} color="#007bff" />
                    </TouchableOpacity>
                    {messageText.trim() !== '' && (
                        <Ionicons name="send" size={24} color="#007bff" onPress={handleSendMessage} />
                    )}
                </View>
            </View>
            {/* Emoji picker */}
            {isEmojiPickerVisible && (
                <EmojiSelector
                    visible={isEmojiPickerVisible}
                    onEmojiSelected={handleEmojiPress}
                    showSearchBar={false}
                    showSectionTitles={true}
                    showHistory={true}
                    columns={8}
                    // emojiSize={24}
                    // iconSize={32}
                    showTabs={true}
                />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    flatListContainer: {
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 27,
        marginTop: 10,
    },
    youMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#3498db',
        padding: 10,
        marginEnd: 10,
        margin: 5,
        borderRadius: 20,
        borderBottomEndRadius: 0
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#95a5a6',
        padding: 10,
        marginStart: 10,
        margin: 5,
        borderRadius: 20,
        borderBottomStartRadius: 0
    },
    messageText: {
        fontSize: 16,
        color: '#ffffff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    textInput: {
        flex: 1,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 40,
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    emojiButton: {
        // position: 'relative',
        right: 35,
        top: 0,
    },
});

export default IndividualChats;
