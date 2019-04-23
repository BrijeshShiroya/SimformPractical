
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native';
import { Loader } from 'atoms';
import { connect } from 'react-redux';
import { getVideoList } from '../../store/Video/actions';
import styles from './style';
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
            <TouchableOpacity style={{ width: '100%', width: '100%', marginBottom: 10 }}>
                <Image source={{ uri: item.thumbnail_url }}
                    style={{ height: '100%', width: '100%' }}
                    resizeMode={'contain'}
                />
            </TouchableOpacity>
        )
    }

    renderVideoList() {
        return (
            <FlatList
                data={this.state.videos}
                renderItem={this._renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.onRefresh.bind(this)}
                    />
                }
            />
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
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
