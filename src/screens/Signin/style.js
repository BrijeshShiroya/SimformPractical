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
        height: 220,
        width: 220,
        paddingBottom: 20,
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    title: {
        color: 'white',
        fontSize: 15
    }
});
