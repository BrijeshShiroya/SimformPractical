import { StyleSheet } from 'react-native';
import * as color from '../../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: color.buttonBgColor,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        borderRadius: 25
    },
    button: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        fontSize: 19,
    },

});
