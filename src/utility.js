import { Alert } from 'react-native';

export const isValidEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
        return true;
    }
    return false;
};

export const showAlert = (message) => {
    Alert.alert(
        'Simform Practical',
        message,
        [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
    )

};