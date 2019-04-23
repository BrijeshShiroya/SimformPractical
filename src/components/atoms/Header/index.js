import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as icon from 'icons';
import styles from './style';
export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: 0,
                    height: '70%',
                    aspectRatio: 1.0
                }} onPress={this.props.onPress}>
                    <Image source={icon.IC_BACK} />
                </TouchableOpacity> */}
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}
