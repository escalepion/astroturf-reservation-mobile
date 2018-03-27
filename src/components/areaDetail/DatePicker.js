import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Expo from 'expo';
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
    componentDidMount() {
        this.showFirstContactAsync();
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
    async showFirstContactAsync() {
        // Ask for permission to query contacts.
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied...
            return;
        }
        const contacts = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            pageSize: 10,
            pageOffset: 0,
        });
        if (contacts.total > 0) {
            Alert.alert(
                'Your first contact is...',
                `Name: ${contacts.data[0].name}\n` +
                `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
                `Emails: ${JSON.stringify(contacts.data[0].emails)}`
            );
        }
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
