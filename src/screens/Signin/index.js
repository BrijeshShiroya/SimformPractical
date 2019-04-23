import React, { Component } from 'react';
import { View, SafeAreaView, Image, Text, AsyncStorage } from 'react-native';
import { TextField, Button } from 'atoms';
import styles from './style';
import * as icon from 'icons';
import * as alerts from '../../constants/alerts';
import { connect } from 'react-redux';
import { login } from '../../store/Auth/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as util from '../../utility';


class Signin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        AsyncStorage.getItem('loginData').then((result) => {
            if (JSON.parse(result)) {
                this.props.navigation.navigate('Home')
            } else {

            }
        }).catch(() => {
            // returnToDispatch(dispatch, LOGIN_FAILURE)
        })
    }

    onForgetPress = () => {

    }

    onCreateAccountPress = () => {
        this.props.navigation.navigate('Register')
    }

    onLoginPress = () => {
        if (this.state.email.trim() == '') {
            util.showAlert(alerts.enter_email)
        } else if (!util.isValidEmail(this.state.email.trim())) {
            util.showAlert(alerts.invalid_email)
        } else if (this.state.password.trim() == '') {
            util.showAlert(alerts.enter_password)
        } else {
            // let requestParam = {}
            // requestParam.email = this.state.email
            // requestParam.password = this.state.password
            // // this.props.login(requestParam)
            var loginData = {}
            loginData.email = this.state.email
            loginData.password = this.state.password
            AsyncStorage.setItem('loginData', JSON.stringify(loginData)).then((success) => {
                this.props.navigation.navigate('Home')
            })
        }

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
                    <View style={styles.loginContainer}>
                        <Image style={styles.logo} source={icon.IC_LOGO} resizeMode={'contain'} />
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
                            moreContainerStyle={{ marginTop: 10 }}
                            title={'Sign in'}
                            onPress={this.onLoginPress}
                        />
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.title} onPress={this.onForgetPress}>Forgot Password?</Text>
                        <View style={{ height: '100%', width: 1, backgroundColor: 'white' }} />
                        <Text style={styles.title} onPress={this.onCreateAccountPress}>Create an account?</Text>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}


const mapStateToProps = state => {
    const { loading, userData } = state.video
    return {
        loading, userData
    }
};

export default connect(mapStateToProps, { login })(Signin)

