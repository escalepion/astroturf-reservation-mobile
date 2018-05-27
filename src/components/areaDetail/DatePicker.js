import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservations'

import { dateFormat } from '../../data/StaticVars';

import MainContainer from '../common/MainContainer';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false };
    }
    componentDidMount() {
        this.props.fetchReservations(this.props.selectedDate);
    }
    onPreviousDateClick() {
        this.props.changeDate(this.props.selectedDate.subtract(1, 'days'));
        this.props.fetchReservations(this.props.selectedDate);
    }
    onNextDateClick() {
        this.props.changeDate(this.props.selectedDate.add(1, 'days'));
        this.props.fetchReservations(this.props.selectedDate);
    }
    handleDatePicked(date) {
        this.props.changeDate(moment(date));
        this.hideDateTimePicker();
        this.props.fetchReservations(this.props.selectedDate);
    }
    hideDateTimePicker() {
        this.setState({ isDateTimePickerVisible: false });
    }
    showDateTimePicker() {
        this.setState({ isDateTimePickerVisible: true });
    }
        render() {
        const { datePickerContainer } = styles;
        return (
            <MainContainer>
                <View style={datePickerContainer}>
                    <TouchableOpacity onPress={this.onPreviousDateClick.bind(this)}>
                        <Icon raised size={12} name="keyboard-arrow-left" color='#FFFFFF' containerStyle={{ backgroundColor: '#89C541' }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.showDateTimePicker.bind(this)}>
                        <Text>{moment(this.props.selectedDate).format(dateFormat)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onNextDateClick.bind(this)}>
                        <Icon raised size={12} name="keyboard-arrow-right" color='#FFFFFF' containerStyle={{ backgroundColor: '#89C541' }} />
                    </TouchableOpacity>
                    <DateTimePicker
                        date={new Date(this.props.selectedDate)}
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked.bind(this)}
                        onCancel={this.hideDateTimePicker.bind(this)}
                        cancelTextIOS='İptal'
                        confirmTextIOS='Tamam'
                    />
                </View>
            </MainContainer>
        );
    }
}

const styles = StyleSheet.create({
    datePickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

const mapStateToProps = (state) => {
    return { reservationList: state.reservations.reservationList };
};

export default connect(mapStateToProps, actions)(DatePicker);
