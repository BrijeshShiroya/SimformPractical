import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
export default class Header extends Component {
 render() {
  return (
   <View style={styles.container}>
    <Text>Header</Text>
   </View>
  );
 }
}
