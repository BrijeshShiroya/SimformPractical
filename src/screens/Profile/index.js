import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Header } from 'atoms';
import styles from './style';
export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    componentWillMount() {
        AsyncStorage.getItem('loginData').then((result) => {

            let data = JSON.parse(result)
            this.setState({
                email: data.email
            })

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Profile'} onPress={this.onBackPress} />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Email</Text>
                    <Text>{this.state.email}</Text>
                    <TouchableOpacity onPress={() => {
                        AsyncStorage.removeItem('loginData').then(() => {
                            this.props.navigation.navigate('Signin')
                        })
                    }}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
