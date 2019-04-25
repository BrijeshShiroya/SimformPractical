import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as icon from 'icons';
import styles from './style';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.onRightPress && <Text style={styles.right} onPress={this.props.onRightPress}>{this.props.rightTitle}</Text>}
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}
