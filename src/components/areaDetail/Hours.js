import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import firebase from 'firebase';
import moment from 'moment';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';

import { HoursMap } from '../../data/Hours';

import HourItem from './HourItem';
import AddReservationModal from './AddReservationModal';
import DeleteReservationModal from './DeleteReservationModal';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedHour: undefined, selectedDeleteHour: undefined, dateRefFormat: 'DDMMYYYY' };
    }
    onAddPress(index) {
        this.setState({ selectedHour: index });
    }
    onDeletePress(index) {
        this.setState({ selectedDeleteHour: index });
    }
    onAddConfirm(number = '') {
        const dateRef = moment(this.props.selectedDate).format(this.state.dateRefFormat);
        const last10cars = this.setPhoneNumber(number);
        firebase.database().ref(`reservations/${dateRef}`)
            .update({ [this.state.selectedHour]: { id: last10cars } })
            .then(() => this.setState({ selectedHour: undefined }));
    }
    onDeleteConfirm() {
        const dateRef = moment(this.props.selectedDate).format(this.state.dateRefFormat);
        firebase.database().ref(`reservations/${dateRef}/${this.state.selectedDeleteHour}`)
            .remove()
            .then(() => this.setState({ selectedDeleteHour: undefined }));
    }
    setPhoneNumber(number) {
        const phoneNumber = number.replace(/\D/g, '');
        const last10cars = phoneNumber.length <= 10 ? phoneNumber : phoneNumber.substr(phoneNumber.length - 10);
        return last10cars;
    }
    closeModal() {
        this.setState({ selectedHour: undefined });
    }
    closeDeleteModal() {
        this.setState({ selectedDeleteHour: undefined });
    }
    renderPerson(id) {
        //id is phone number in this case
        if (this.props.contactList) {
            const person = this.props.contactList.data.find((item) => {
                if (!item.phoneNumbers) {
                    return false;
                }
                return this.setPhoneNumber(item.phoneNumbers[0].number) === id;
            });
            if (person) {
                return `${person.name} (${person.phoneNumbers && person.phoneNumbers[0].number})`;
            }
            return 'Bilinmeyen kullanıcı';
        }
    }
    renderHours() {
        const arr = Array(24).fill().map((e, i) => i + 1);
        return (
            <FlatList
                data={arr}
                renderItem={({ item, index }) => <HourItem
                    onAddPress={() => this.onAddPress(index)}
                    onDeletePress={() => this.onDeletePress(index)}
                    person={this.props.reservationList && this.props.reservationList[index] && this.renderPerson(this.props.reservationList[index].id)}
                    item={item} index={index}
                    HoursMap={HoursMap}
                />}
                keyExtractor={(item, index) => index}
            />
        );
    }
    render() {
        return (
            <View style={styles.hoursContainer}>
                {this.renderHours()}
                {this.state.selectedHour >= 0 ? <AddReservationModal
                    closeModal={this.closeModal.bind(this)}
                    visible={this.state.selectedHour && true}
                    onAddConfirm={this.onAddConfirm.bind(this)}
                /> : undefined}
                {this.state.selectedDeleteHour >= 0 ? <DeleteReservationModal
                    closeModal={this.closeDeleteModal.bind(this)}
                    visible={this.state.selectedDeleteHour && true}
                    onDeleteConfirm={this.onDeleteConfirm.bind(this)}
                /> : undefined}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    hoursContainer: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return {
        contactList: state.contacts.contactList,
        reservationList: state.reservations.reservationList
    };
};

export default connect(mapStateToProps, null)(Hours);
