import { StyleSheet } from 'react-native';
import * as color from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primaryColor
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    loginContainer: {
        flex: 1,
        width: '100%',
        paddingLeft: 35,
        paddingRight: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 6,
        borderColor: 'white',
        backgroundColor: color.buttonBgColor,
        marginBottom: 40,
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'white'
    },
    bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: 'white',
        fontSize: 15
    }
});
