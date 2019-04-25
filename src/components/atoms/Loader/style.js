import { StyleSheet } from 'react-native';
import * as common from '../';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: common.SCREEN_HEIGHT,
        width: common.SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dismiss: {
        backgroundColor: 'red',
        position: 'absolute',
        height: 0,
        width: 0,
    }
});
