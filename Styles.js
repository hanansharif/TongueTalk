import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    login_wrapper: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: 300,
        marginBottom: '50%',
    },
    form_input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    button: {
        height: 40,
        backgroundColor: '#4CAF50',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_label: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 24,
    },
});

export default Styles;