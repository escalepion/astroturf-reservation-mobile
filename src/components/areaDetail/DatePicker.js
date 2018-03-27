import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import MainContainer from '../common/MainContainer';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false };
    }
    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this.hideDateTimePicker();
    };
    render() {
        return (
            <MainContainer>
                <TouchableOpacity onPress={this.showDateTimePicker}>
                    <Text>Show DatePicker</Text>
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    cancelTextIOS='İptal'
                    confirmTextIOS='Tamam'
                />
            </MainContainer>
        );
    }
}

export default DatePicker;
