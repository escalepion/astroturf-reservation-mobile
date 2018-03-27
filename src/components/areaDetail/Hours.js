import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';

import { HoursMap } from '../../data/Hours';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = { date: '2016-05-15' };
    }
    renderHours() {
        const arr = Array(24).fill().map((e, i) => i + 1);
        return (
            <FlatList
                data={arr}
                renderItem={({ item, index }) => <Text>{`${HoursMap[index]} - ${HoursMap[index + 1]}`}</Text>}
                keyExtractor={(item, index) => index}
            />
        );
    }
    render() {
        return (
            <View>
                {this.renderHours()}
            </View>
        );
    }
}

export default Hours;
