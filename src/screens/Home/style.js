import { StyleSheet } from 'react-native';
import * as color from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    itemContainer: {
        flex: 1,
        height: 200,
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'flex-end',
        borderRadius: 40,
        overflow: 'hidden'
    },
    videoItemContainer: {
        backgroundColor: 'pink',
        position: 'absolute',
        top: 0,
        alignSelf: "center",
        width: '80%',
        height: '80%',
        borderRadius: 40,
        overflow: 'hidden',
    },
    otherItemContainer: {

        justifyContent: 'flex-end',
        backgroundColor: 'lightgrey',
        height: '80%',
        width: '100%',
        overflow: 'hidden',
        borderRadius: 40,
    }
});
