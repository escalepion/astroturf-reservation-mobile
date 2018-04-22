import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ContactListItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.name}>{item.name && item.name}</Text>
                <Text>{item.phoneNumbers && item.phoneNumbers[0].number}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        marginRight: 15
    }
});

export default ContactListItem;