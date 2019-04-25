import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert, SafeAreaView, Image } from 'react-native';
import { Header, TextField, Button } from 'atoms';
import * as alerts from '../../constants/alerts';
import styles from './style';
import * as keys from '../../constants/keys';
import * as icon from 'icons';
import { NavigationActions, StackActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as util from '../../utility';
import ImagePicker from 'react-native-image-crop-picker';
let pictureSize = 1000

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileUrl: '',
            fullname: '',
            email: '',
            isEdited: false

        }
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }

    onEditPress = () => {
        if (this.state.isEdited) {
            this.onSave()
        } else {
            this.setState({
                isEdited: true
            })
        }
    }

    onSave = () => {
        if (this.state.fullname.trim() == '') {
            util.showAlert(alerts.enter_fullname)
        } else if (this.state.email.trim() == '') {
            util.showAlert(alerts.enter_email)
        } else if (!util.isValidEmail(this.state.email.trim())) {
            util.showAlert(alerts.invalid_email)
        } else if (this.state.profileUrl.trim() == '') {
            util.showAlert(alerts.select_picture)
        } else {
            var registerData = {}
            registerData.fullname = this.state.fullname
            registerData.email = this.state.email
            registerData.password = this.state.password
            registerData.profileUrl = this.state.profileUrl
            AsyncStorage.setItem(keys.ASYNC_REGISTER_DATA, JSON.stringify(registerData)).then((success) => {
                this.setState({
                    isEdited: false
                })
                setTimeout(() => {
                    util.showAlert('Data save successful')
                }, 100);

            })
        }
    }

    componentDidMount() {
        AsyncStorage.getItem(keys.ASYNC_REGISTER_DATA).then((userData) => {
            if (userData) {
                let parsedData = JSON.parse(userData)
                setTimeout(() => {
                    this.setState({
                        email: parsedData.email,
                        fullname: parsedData.fullname,
                        profileUrl: parsedData.profileUrl
                    })
                }, 100);

            } else {
                util.showAlert('There are no registered user')
            }
        }).catch = () => {
            util.showAlert('There are no registered user')
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

    onLogoutClick() {
        Alert.alert(
            'Simform Practical',
            alerts.logout,
            [
                {
                    text: 'Cancel', onPress: () => {
                    }
                },
                {
                    text: 'Ok', onPress: () => {
                        AsyncStorage.removeItem(keys.ASYNC_LOGIN_DATA).then(() => {
                            this.props.navigation.dispatch(StackActions.reset({
                                key: null,
                                index: 0,
                                actions: [NavigationActions.navigate({ routeName: 'Signin' })],
                            }))
                        })
                    }
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header title={'Profile'}
                    onPress={this.onBackPress}
                    rightTitle={this.state.isEdited ? 'Save' : 'Edit'}
                    onRightPress={this.onEditPress}
                />
                <View style={{ flex: 1 }} >
                    <KeyboardAwareScrollView contentContainerStyle={styles.innerContainer}
                    >
                        <View style={styles.loginContainer} pointerEvents={this.state.isEdited ? 'auto' : 'none'}>
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
                        </View>
                    </KeyboardAwareScrollView>
                    <View style={styles.bottomContainer}>
                        <Button
                            moreContainerStyle={{ width: '100%', borderRadius: 0 }}
                            title={'Logout'}
                            onPress={() => this.onLogoutClick()}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}
