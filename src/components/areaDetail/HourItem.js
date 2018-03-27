import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const HourItem = ({ index, HoursMap, onAddPress }) => {
    return (
        <View>
            <Text>{`${HoursMap[index]} - ${HoursMap[index + 1]}`}</Text>
            <TouchableOpacity onPress={() => {}}>
                <Icon name="add" color='#FFFFFF' containerStyle={{ backgroundColor: '#6733BA' }} onPress={onAddPress} />
            </TouchableOpacity>
        </View>
    );
};

export default HourItem;
