import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const AreaItem = ({ item, onDeleteAreaClick }) => {
    console.log(item);
    const {
        itemContainer,
        thumbnailStyle,
        thumbnailContainerStyle,
        itemContentContainer,
        itemTitle,
        itemText,
        itemContentGroup
    } = styles;
    return (
        <View style={itemContainer}>
            <View style={thumbnailContainerStyle}>
                <Image style={thumbnailStyle} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZb4Msl5b1Q3RYRbDDhB1sGwZgBWuJTW8JZyFuK6V4cUp0blZ' }} />
            </View>
            <View style={itemContentContainer}>
                <View style={itemContentGroup}>
                    <Text style={itemTitle}>Saha: </Text>
                    <Text style={itemText}>{item.areaName}</Text>
                </View>
                <View style={itemContentGroup}>
                    <Button title="Sahaya Git" onPress={() => {}} />
                </View>
                <View style={itemContentGroup}>
                    <Button color='#D9534F' title="Sahayı Sil" onPress={onDeleteAreaClick} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 0.7,
        borderColor: '#d6d7da',
        display: 'flex',
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        justifyContent: 'flex-start'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    thumbnailStyle: {
        width: 150,
        height: 150
    },
    itemContentContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    itemContentGroup: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#d6d7da',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AreaItem;
