import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import firebase from 'firebase';
import moment from 'moment';
import {connect} from 'react-redux';

import { HoursMap } from '../../data/Hours';

import HourItem from './HourItem';
import AddReservationModal from './AddReservationModal';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedHour: undefined, dateData: {}, dateRefFormat : 'DDMMYYYY' };
    }
    componentDidMount() {
        const dateRef = moment(this.props.selectedDate).format(this.state.dateRefFormat);
        firebase.database().ref(`reservations/${dateRef}`)
            .on('value', snapshot => {
                this.setState({ dateData: snapshot.val() });
            });
    }
    onAddPress(index) {
        this.setState({ selectedHour: index });
    }
    onAddConfirm(id) {
        const dateRef = moment(this.props.selectedDate).format(this.state.dateRefFormat);
        firebase.database().ref(`reservations/${dateRef}`)
        .update({ [this.state.selectedHour]: { id } })
        .then((response) => this.setState({ selectedHour: undefined }))
        // .catch((error) => console.log(error));
    }
    closeModal() {
        this.setState({ selectedHour: undefined });
    }
    renderPerson(id) {
        console.log(this.props.contactList);
        if(this.props.contactList) {
            const person = this.props.contactList.data.find(item => item.id === id);
            if(person) {
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
                renderItem={({ item, index }) => <HourItem onAddPress={() => this.onAddPress(index)} person={this.state.dateData && this.state.dateData[index] && this.renderPerson(this.state.dateData[index].id)} item={item} index={index} HoursMap={HoursMap} />}
                keyExtractor={(item, index) => index}
            />
        );
    }
    render() {
        return (
            <View>
                {this.renderHours()}
                {this.state.selectedHour >=0 ? <AddReservationModal
                    closeModal={this.closeModal.bind(this)}
                    visible={this.state.selectedHour && true}
                    onAddConfirm={this.onAddConfirm.bind(this)}
                /> : undefined}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {contactList : state.contacts.contactList};
}

export default connect(mapStateToProps, null)(Hours);
