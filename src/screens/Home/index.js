
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
        this.setState({ isRefreshing: true });
        this.props.getVideoList(false)
    }

    // _renderItem = ({ item }) => {
    //     return (
    //         <TouchableOpacity style={{
    //             flex: 1,
    //             paddingRight: 20,
    //         }} onPress={() => {
    //             this.onShare(item)
    //         }}>
    //             <View style={{
    //                 width: '100%',
    //                 aspectRatio: 1.2,
    //                 borderRadius: 10,
    //                 alignItems: 'center',
    //                 justifyContent: 'center',
    //             }}>
    //                 <Image source={{ uri: item.thumbnail_url }} style={{ height: '100%', width: '100%' }} />
    //             </View>
    //             <Text style={{ color: 'white', paddingTop: 10, paddingBottom: 10 }}>{item.title}</Text>
    //         </TouchableOpacity>)
    // }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={() => {
                // this.onShare(item)
                this.props.navigation.navigate('PlayVideo', { videoData: item })
            }}>
                <View style={styles.otherItemContainer}>
                    <Text style={{
                        color: 'white',
                        paddingTop: 10,
                        paddingBottom: 10,
                        alignSelf: 'center',
                        color: 'black',
                        fontSize: 16
                    }}>{item.title}</Text>
                </View>
                <View style={styles.videoItemContainer}>
                    <Image
                        source={{ uri: item.thumbnail_url }}
                        style={{ height: '100%', width: '100%' }} />
                </View>


            </TouchableOpacity>)
    }
    renderVideoList() {
        return (
            <FlatList
                style={{ width: '100%', backgroundColor: 'white' }}
                contentContainerStyle={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}
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
    onProfilePress = () => {
        this.props.navigation.navigate('Profile')
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header title={'Video'}
                    onPress={this.onBackPress}
                    rightTitle={'Profile'}
                    onRightPress={this.onProfilePress} />
                {this.renderVideoList()}
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
