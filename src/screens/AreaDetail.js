import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';

import Hours from '../components/areaDetail/Hours';
import DatePicker from '../components/areaDetail/DatePicker';

class AreaDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedDate: moment() };
    }
    changeDate(date) {
        this.setState({ selectedDate: date });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DatePicker areaInfo={this.props.navigation.state.params.item} selectedDate={this.state.selectedDate} changeDate={(date) => this.changeDate(date)} />
                <Hours selectedDate={this.state.selectedDate} areaInfo={this.props.navigation.state.params.item} />
            </View>
        );
    }
};

export default AreaDetail;
