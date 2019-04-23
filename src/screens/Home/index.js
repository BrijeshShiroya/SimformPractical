
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../store/Auth/actions';
import styles from './style';

class Home extends Component {
 render() {
  return (
   <View style={styles.container}>
    <TouchableOpacity style={{ height: 100, width: 100 }}
     onPress={() => {
      this.props.navigation.navigate('Profile')
     }}>
     <Text>Next</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{ height: 100, width: 100 }} onPress={() => {
     this.props.navigation.goBack()
    }}>
     <Text>Back</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{ height: 100, width: 100 }}
     onPress={() => {
      this.props.login()
     }}>
     <Text>Get Data</Text>
    </TouchableOpacity>
    <Text>hi</Text>
    <Text>{JSON.stringify(this.props.loading)}</Text>
   </View>
  );
 }
}

const mapStateToProps = state => {
 const { loading } = state.auth
 return {
  loading
 }
};

export default connect(mapStateToProps, { login })(Home)
