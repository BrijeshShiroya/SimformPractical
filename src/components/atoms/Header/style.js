import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS == 'ios' ? 64 : 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 17,
        color: 'white'
    }
});
