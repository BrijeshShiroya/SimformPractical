import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './style';
const TextField = (props) => {
    return (
        <TextInput
            placeholderTextColor={'white'}
            style={styles.textInput}
            {...props}
        />
    );
}

export default TextField
