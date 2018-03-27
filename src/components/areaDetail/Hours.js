import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import { HoursMap } from '../../data/Hours';

import HourItem from './HourItem';
import AddReservationModal from './AddReservationModal';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { modalVisible: false };
    }
    onAddPress() {
        this.setState({ modalVisible: true });
    }
    onModalPress() {
        this.setModalVisible(false);
    }
    renderHours() {
        const arr = Array(24).fill().map((e, i) => i + 1);
        return (
            <FlatList
                data={arr}
                renderItem={({ item, index }) => <HourItem onAddPress={this.onAddPress.bind(this)} item={item} index={index} HoursMap={HoursMap} />}
                keyExtractor={(item, index) => index}
            />
        );
    }
    render() {
        return (
            <View>
                {this.renderHours()}
                <AddReservationModal 
                onModalPress={this.onModalPress.bind(this)} 
                visible={this.state.modalVisible}
                />
            </View>
        );
    }
}

export default Hours;
