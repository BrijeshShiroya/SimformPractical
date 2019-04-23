
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native';
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
            }}>
                <View style={{
                    width: (common.SCREEN_WIDTH - 60) / 2,
                    aspectRatio: 1.2,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: "green"
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
