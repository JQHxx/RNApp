
import React, {Component} from 'react'
import {Text} from 'react-native'


import homeActions from '../store/actions/home'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class HomePage extends Component {

    componentDidMount() {
        this.loadListData();
    }

    constructor(props) {
        super(props);

        // 方法绑定
        this.loadListData = this.loadListData.bind(this);

        this.state = {
            json: ''
        }
    }

    render() {

        let {homeState} = this.props;
        let dataSource = homeState.homeModel;
        return (
            <Text>{JSON.stringify(dataSource)}</Text>
        );
    }

    loadListData() {
        let {home} = this.props;
        let params = new FormData();
        home.homeList(params);
    }


}

export default connect(state => ({
    homeState: state.home
}), dispatch => ({
    home: bindActionCreators(homeActions, dispatch)
})
)(HomePage)