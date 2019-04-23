
import React, { Component } from 'react';
import { View, Text, Share, TouchableOpacity, SafeAreaView, Platform, FlatList, Image, RefreshControl } from 'react-native';
import { Loader, Header } from 'atoms';
import { connect } from 'react-redux';
import { getVideoList } from '../../store/Video/actions';
import styles from './style';
import * as common from '../../constants/common';
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRefreshing: false,
            videos: []
        }
    }
    componentWillMount() {
        this.props.getVideoList(true)
    }

    onShare = async (item) => {
        try {
            const result = await Share.share({
                message:
                    item.video_url,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    componentDidUpdate(prevProps, nextState) {
        if (prevProps.videoList != this.props.videoList) {
            this.setState({
                videos: this.props.videoList,
                isRefreshing: false
            })
        }
    }

    onRefresh() {
        this.setState({ isRefreshing: true }); // true isRefreshing flag for enable pull to refresh indicator
        this.props.getVideoList(false)
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flex: 1,
                paddingRight: 20,
            }} onPress={() => {
                this.onShare(item)
            }}>
                <View style={{
                    width: (common.SCREEN_WIDTH - 60) / 2,
                    aspectRatio: 1.2,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={{ uri: item.thumbnail_url }} style={{ height: '100%', width: '100%' }} />
                </View>
                <Text style={{ color: 'white', paddingTop: 10, paddingBottom: 10 }}>{item.title}</Text>
            </TouchableOpacity>)
    }

    renderVideoList() {
        return (
            <FlatList
                style={{ width: '100%' }}
                contentContainerStyle={{ padding: 20, paddingTop: 0, paddingRight: 0, }}
                numColumns={2}
                data={this.state.videos}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.onRefresh.bind(this)}
                        color={'white'}
                    />
                }
            />
        )
    }

    onBackPress = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header title={'Video'} onPress={this.onBackPress} />
                {this.renderVideoList()}
                <TouchableOpacity style={{
                    position: 'absolute',
                    top: Platform.OS == 'ios' ? 42 : 20,
                    right: 20
                }} onPress={() => {
                    this.props.navigation.navigate('Profile')
                }}>
                    <Text style={{ color: 'white' }}>Profile</Text>
                </TouchableOpacity>
                <Loader isVisible={this.props.loading} />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    const { loading, videoList } = state.video
    return {
        loading, videoList
    }
};

export default connect(mapStateToProps, { getVideoList })(Home)
