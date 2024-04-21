import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import icon library for call types

const callsData = [
    {
        id: '1',
        name: 'John Doe',
        avatar: require('../assets/avatar.png'), // Replace with your image path (optional)
        type: 'outgoing', // Optional: Incoming or Outgoing call type
    },
    {
        id: '2',
        name: 'Jane Smith',
        avatar: require('../assets/avatar.png'), // Replace with your image path (optional)
        type: 'missed', // Optional: Incoming or Outgoing call type
    },
];

const CallListItem = ({ item, onPress }) => {
    const callTypeIcon = {
        outgoing: <AntDesign name="phone" size={24} color="#007bff" />,
        missed: <AntDesign name="closecircleo" size={24} color="red" />, // Using closecircleo for missed calls
    };

    return (
        <TouchableOpacity style={styles.callItem} onPress={onPress}>
            {item.avatar && <Image source={item.avatar} style={styles.avatar} />}
            <View style={styles.callDetails}>
                <Text style={styles.callName}>{item.name}</Text>
                {item.type && callTypeIcon[item.type]}
            </View>
        </TouchableOpacity>
    );
};

const Calls = () => {
    const handleCallPress = (item) => {
        // Implement call details or action based on item data
        console.log('Call item pressed:', item);
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.header}>Calls</Text> */}
            <FlatList
                data={callsData}
                renderItem={({ item }) => (
                    <CallListItem item={item} onPress={() => handleCallPress(item)} />
                )}
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
    callItem: {
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
    callDetails: {
        flex: 1,
    },
    callName: {
        fontSize: 18,
    },
});

export default Calls;
