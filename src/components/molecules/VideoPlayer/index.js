import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';
import Video from 'react-native-video';

export default class VideoPlayer extends Component {


    onPress() {
        if (this.videoPlayer != null)
            this.videoPlayer.presentFullscreenPlayer();
    }

    render() {
        return (
            // <View style={{ height: '100%', width: '100%' }}>
            //  <Text>Here's some pre-Text</Text>
            <Video source={{ uri: this.props.url }}
                controls={true}
                ref={p => { this.videoPlayer = p; }}
                // Can be a URL or a local file.
                // Store reference
                {...this.props}
            // Callback when video cannot be loaded
            />
            //  <Button title="full screen" onPress={this.onPress.bind(this)}></Button>
            // </View>
        );
    }
} 