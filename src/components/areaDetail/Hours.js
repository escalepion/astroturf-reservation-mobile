import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import firebase from 'firebase';

import { HoursMap } from '../../data/Hours';

import HourItem from './HourItem';
import AddReservationModal from './AddReservationModal';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedHour: undefined };
    }
    onAddPress(index) {
        this.setState({ selectedHour: index });
    }
    onAddConfirm() {
        firebase.database().ref(`reservations/${this.props.selectedDate}`)
        .set({ [this.state.selectedHour]: { name: 'Haso' } })
        .then((response) => console.log(response.result))
        .catch((error) => console.log(error));
    }
    closeModal() {
        this.setState({ selectedHour: undefined });
    }
    renderHours() {
        const arr = Array(24).fill().map((e, i) => i + 1);
        return (
            <FlatList
                data={arr}
                renderItem={({ item, index }) => <HourItem onAddPress={() => this.onAddPress(index)} item={item} index={index} HoursMap={HoursMap} />}
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

export default Hours;
