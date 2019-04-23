import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
const Button = (props) => {
    return (
        <View style={[styles.container, props.moreContainerStyle]}>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button
