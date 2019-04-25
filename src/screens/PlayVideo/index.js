import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { VideoPlayer } from 'molecules';
import { Loader } from 'atoms';
import styles from './style';
export default class PlayVideo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            videoLoading: true
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1, backgroundColor: 'black'
                }}>
                    <VideoPlayer url={this.props.navigation.state.params.videoData.video_url}
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
                </View>
            </SafeAreaView>
        );
    }
}
