import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const HourItem = ({ index, HoursMap, onAddPress }) => {
    const { hourItemContainer } = styles;
    return (
        <View style={hourItemContainer}>
            <Text>{`${HoursMap[index]} - ${HoursMap[index + 1]}`}</Text>
            <Icon raised name="add" color='#FFFFFF' containerStyle={{ backgroundColor: '#6733BA' }} onPress={onAddPress} />
        </View>
    );
};

export default HourItem;

const styles = StyleSheet.create ({
    hourItemContainer : {
        backgroundColor: '#dddddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 2,
        paddingRight: 5,
        paddingLeft: 5
    }
});
