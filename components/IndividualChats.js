import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const MOCK_DATA = [
    { id: 1, user: 'You', message: 'Hi there!' },
    { id: 2, user: 'John Doe', message: 'Hello! How can I help you today?' },
];

const IndividualChats = ({ route }) => {
    const [messageText, setMessageText] = useState('');
    const [messages, setMessages] = useState(MOCK_DATA);

    const handleSendMessage = () => {
        if (messageText.trim()) { // Check if message is not empty
            const newMessage = { id: Date.now(), user: 'You', message: messageText };
            setMessages([...messages, newMessage]); // Add new message to state
            setMessageText(''); // Clear input after sending
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <View style={item.user === 'You' ? styles.youMessage : styles.otherMessage}>
                        <Text style={styles.messageText}>{item.user}: {item.message}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    value={messageText}
                    onChangeText={setMessageText}
                    placeholder="Type your message..."
                />
                <Button title="Send" onPress={handleSendMessage} style={styles.sendButton} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 50
    },
    youMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#ddd',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 10,
    },
    sendButton: {
        marginLeft: 10,
    },
});

export default IndividualChats;
