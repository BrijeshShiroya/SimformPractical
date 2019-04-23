import React, { Component } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { TextField, Button } from 'atoms';
import styles from './style';
import * as icon from 'icons';
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
            email: 'dd',
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
        } else {
            // let requestParam = {}
            // requestParam.email = this.state.email
            // requestParam.password = this.state.password
            // // this.props.login(requestParam)
            this.props.navigation.navigate('Home')
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
                            // utility.openSetting(alerts.ALERT_NEED_CAMERA_PERMISSION)
                            if (code === 'E_PICKER_CANCELLED') {

                            } else if (code === 'E_PERMISSION_MISSING') {
                                // utility.openSetting(alerts.ALERT_NEED_CAMERA_PERMISSION)
                            } else {
                                // utility.openSetting(alerts.ALERT_NEED_CAMERA_PERMISSION)
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
                            // alert(JSON.stringify(e));
                            let code = e.code;
                            if (code === 'E_PICKER_CANCELLED') {

                            } else if (code === 'E_PERMISSION_MISSING') {
                                // openSetting(alerts.ALERT_NEED_CAMERA_PERMISSION)
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
