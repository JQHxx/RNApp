import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView
} from 'react-native'

import styles from '../styles';
import * as Constant from '../styles/constant';

import PullListView from './widget/PullLoadMoreListView'
import MessageListCell from './widget/MessageListCell'

/**
 *  消息中心
 */
export default class MessageListPage extends Component {


    constructor(props) {
        super(props)
        this._refresh = this._refresh.bind(this)
        this._loadMore = this._loadMore.bind(this)

        this.state = {
            datas: []
        }
    }

    _renderRow(rowData, rowID) {
        return (
            <MessageListCell/>
        )
    }

    componentDidMount() {
        this.setState({
            datas: [1, 2, 3]
        })
    }

    render() {
        return (

            <SafeAreaView style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <PullListView
                    style={{flex: 1}}
                    ref="pullList"
                    enableRefresh={false}
                    renderRow={(rowData, index) =>
                        this._renderRow(rowData, index)
                    }
                    refresh={this._refresh}
                    loadMore={this._loadMore}
                    dataSource={this.state.datas}
                    
                />
            </SafeAreaView>
        );
    }

    _refresh() {
        let size = 0;
        if (this.refs.pullList) {
            this.refs.pullList.refreshComplete((size >= 15));
        }
    }

    _loadMore() {
        let size = 0;
        if (this.refs.pullList) {
            this.refs.pullList.loadMoreComplete((size >= 15));
        }
    }

}