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
            <View>
                <DatePicker 
                    selectedDate={this.state.selectedDate}
                    changeDate={(date) => this.changeDate(date)}
                />
                <Hours />
            </View>
        );
    }
};

export default AreaDetail;
