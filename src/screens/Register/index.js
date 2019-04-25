import React, { Component } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import { TextField, Button } from 'atoms';
import styles from './style';
import * as icon from 'icons';
import * as keys from '../../constants/keys';
import * as alerts from '../../constants/alerts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as util from '../../utility';
import ImagePicker from 'react-native-image-crop-picker';

let pictureSize = 1000

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: '',
            password: '',
            profileUrl: ''
        }
    }

    onCancelPress = () => {
        this.props.navigation.goBack()
    }

    onRegisterPress = () => {
        if (this.state.fullname.trim() == '') {
            util.showAlert(alerts.enter_fullname)
        } else if (this.state.email.trim() == '') {
            util.showAlert(alerts.enter_email)
        } else if (!util.isValidEmail(this.state.email.trim())) {
            util.showAlert(alerts.invalid_email)
        } else if (this.state.password.trim() == '') {
            util.showAlert(alerts.enter_password)
        } else if (this.state.profileUrl.trim() == '') {
            util.showAlert(alerts.select_picture)
        } else {
            var registerData = {}
            registerData.fullname = this.state.fullname
            registerData.email = this.state.email
            registerData.password = this.state.password
            registerData.profileUrl = this.state.profileUrl
            AsyncStorage.setItem(keys.ASYNC_REGISTER_DATA, JSON.stringify(registerData)).then((success) => {
                this.props.navigation.navigate('Home')
            })
        }
    }

    onProfileClick() {
        this.openImagePickerDialog()
    }

    openImagePickerDialog() {
        Alert.alert(
            '',
            'Choose an Picture from',
            [
                {
                    text: 'Camera', onPress: () => {
                        ImagePicker.openCamera({
                            width: pictureSize,
                            height: pictureSize,
                            cropping: true,
                            // cropping: true,
                        }).then(image => {
                            this.setState({
                                profileUrl: image.path
                            })
                        }).catch(e => {
                            let code = e.code;
                            if (code === 'E_PICKER_CANCELLED') {

                            } else if (code === 'E_PERMISSION_MISSING') {

                            } else {
                            }
                        });
                    }
                },
                {
                    text: 'Gallery', onPress: () => {
                        ImagePicker.openPicker({
                            width: pictureSize,
                            height: pictureSize,
                            cropping: true,
                            // cropping: true,
                        }).then(image => {

                            this.setState({
                                profileUrl: image.path
                            })
                            console.log(image.path)
                        }).catch(e => {
                            let code = e.code;
                            if (code === 'E_PICKER_CANCELLED') {

                            } else if (code === 'E_PERMISSION_MISSING') {
                            }
                        });
                    }
                },
                {
                    text: 'Cancel', onPress: () => {

                    }
                },
            ],
            { cancelable: true }
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1 }}>
                    <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}>
                        <View style={styles.loginContainer}>
                            <TouchableOpacity style={styles.logo} onPress={() => this.onProfileClick()}>
                                {this.state.profileUrl != '' ?
                                    <Image source={{ uri: this.state.profileUrl }} style={{ height: '100%', width: '100%' }} /> :
                                    <Image source={icon.IC_PROFILE} />
                                }
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
                    </KeyboardAwareScrollView>
                    <View style={styles.bottomContainer}>
                        <Button
                            moreContainerStyle={{ width: '100%', borderRadius: 0 }}
                            title={'Cancel'}
                            onPress={this.onCancelPress}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
