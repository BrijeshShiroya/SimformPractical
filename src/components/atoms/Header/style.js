import { StyleSheet, Platform } from 'react-native';
import * as color from '../../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Platform.OS == 'ios' ? 44 : 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: color.primaryColor,
    },
    title: {
        fontSize: 17,
        color: 'white'
    },
    right: {
        position: 'absolute',
        right: 20,
        color: 'white'
    }
});
