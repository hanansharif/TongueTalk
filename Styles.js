import { StyleSheet, Platform } from 'react-native';

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
    shadowProp: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            // android: {
            //     elevation: 10, // Adjust as needed
            //     // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust as needed
            // },
        }),
    },
    shadowPropBtn: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 6 },
                shadowOpacity: 0.4,
                shadowRadius: 10,
            },
            android: {
                elevation: 25, // Adjust as needed
                // backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust as needed
            },
        }),
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
    // i
});

export default Styles;