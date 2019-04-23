import React, { Component } from 'react';

import { View, ActivityIndicator } from 'react-native';
import * as color from '../../../constants/colors';
import styles from './style';

export default class Loader extends Component {
    render() {
        const { isVisible } = this.props;
        return (
            isVisible ?
                <View style={styles.container} >
                    <ActivityIndicator size="small" color={'white'} />
                </View> : null
        );
    }
}