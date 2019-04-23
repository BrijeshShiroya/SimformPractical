import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
export default class Profile extends Component {

 render() {
  return (
   <View style={styles.container}>
    <TouchableOpacity style={{ height: 100, width: 100 }}
     onPress={() => {
      this.props.navigation.goBack()
     }}>
     <Text>Back</Text>
    </TouchableOpacity>
   </View>
  );
 }
}
