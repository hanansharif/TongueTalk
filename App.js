import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import UserLogIn from './UserLogIn';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Hey Hanan!</Text>
    //   <Text> Open up App.js to start working on your app!</Text>
    //   <TextInput placeholder='Type Here ...' />
    //   <Button style={styles.button} title="Press Me" onPress={() => console.log('Pressed')} />
    //   <TouchableOpacity style={styles.button} onPress={() => console.log('Pressed')}>
    //     <Text style={styles.buttonText}>My Button</Text>
    //   </TouchableOpacity>
    //   <StatusBar style="auto" />
    // </View>
    <>
      <UserLogIn />
    </>
  );
}

const styles = StyleSheet.create({
  // button: {
  //   backgroundColor: '#',
  //   padding: 10,
  //   borderRadius: '20%',
  // },
  // buttonText: {
  //   color: 'white',
  //   fontFamily: 'Verdana',
  //   fontSize: 18,
  // },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },
  // btn: {
  // }
});
