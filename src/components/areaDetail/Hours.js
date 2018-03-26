import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';

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
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Tamam"
                    cancelBtnText="İptal"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { this.setState({ date }); }}
                />
                {this.renderHours()}
            </View>
        );
    }
}

export default Hours;
