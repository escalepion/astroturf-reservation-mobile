import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Icon } from 'react-native-elements';

import { dateFormat } from '../../data/StaticVars';

import MainContainer from '../common/MainContainer';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false };
    }
    onPreviousDateClick() {
        this.props.changeDate(this.props.selectedDate.subtract(1, 'days'));
    }
    onNextDateClick() {
        this.props.changeDate(this.props.selectedDate.add(1, 'days'));
    }
    handleDatePicked = (date) => {
        this.props.changeDate(date);
        this.hideDateTimePicker();
    };
    hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    onModalPress() {
        this.setModalVisible(false);
    }
    render() {
        return (
            <MainContainer>
                <TouchableOpacity onPress={this.onPreviousDateClick.bind(this)}>
                    <Icon name="add" color='#FFFFFF' containerStyle={{ backgroundColor: '#6733BA' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.showDateTimePicker}>
                    <Text>{moment(this.props.selectedDate).format(dateFormat)}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.onNextDateClick.bind(this)}>
                    <Icon name="add" color='#FFFFFF' containerStyle={{ backgroundColor: '#6733BA' }} />
                </TouchableOpacity>
                <DateTimePicker
                    date={new Date(this.props.selectedDate)}
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
