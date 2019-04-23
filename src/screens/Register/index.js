import React, { Component } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import { TextField, Button } from 'atoms';
import styles from './style';
import * as icon from 'icons';
import * as alert from '../../constants/alerts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as util from '../../utility';
export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: 'dd',
            password: ''
        }
    }

    onCancelPress = () => {
        this.props.navigation.goBack()
    }

    onRegisterPress = () => {

        if (this.state.fullname.trim() == '') {
            util.showAlert(alert.enter_fullname)
        } else if (this.state.email.trim() == '') {
            util.showAlert(alert.enter_email)
        } else if (!util.isValidEmail(this.state.email.trim())) {
            util.showAlert(alert.invalid_email)
        } else if (this.state.password.trim() == '') {
            util.showAlert(alert.enter_password)
        } else {
            // let requestParam = {}
            // requestParam.email = this.state.email
            // requestParam.password = this.state.password
            // // this.props.login(requestParam)
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
                    <View style={styles.loginContainer}>
                        <TouchableOpacity style={styles.logo}>
                            <Image source={icon.IC_PROFILE} />
                        </TouchableOpacity>
                        <TextField
                            placeholder={'full name'}
                            onChangeText={(text) => this.setState({ fullname: text })}
                            value={this.state.fullname}
                        />
                        <View style={styles.separator}></View>
                        <TextField
                            placeholder={'email address'}
                            keyboardType={'email-address'}
                            onChangeText={(text) => this.setState({ email: text })}
                            value={this.state.email}
                        />
                        <View style={styles.separator}></View>
                        <TextField
                            placeholder={'Password'}
                            secureTextEntry
                            onChangeText={(text) => this.setState({ password: text })}
                            value={this.state.password}
                        />
                        <Button
                            moreContainerStyle={{ marginTop: 30 }}
                            title={'Register'}
                            onPress={this.onRegisterPress}
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Button
                            moreContainerStyle={{ width: '100%', borderRadius: 0 }}
                            title={'Cancel'}
                            onPress={this.onCancelPress}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}
