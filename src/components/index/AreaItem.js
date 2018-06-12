import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Avatar } from 'react-native-elements';

const AreaItem = ({ item, onDeleteAreaClick, navigation }) => {
    const {
        itemContainer,
        thumbnailContainerStyle,
        itemContentContainer,
        itemTitle,
        itemContentGroup
    } = styles;
    return (
        <View style={itemContainer}>
            <View style={thumbnailContainerStyle}>
                <Avatar
                    xlarge
                    rounded
                    source={{ uri: 'http://hdfreewallpaper.net/wp-content/uploads/2016/03/soccer-wallpaper-images.jpg' }}
                    activeOpacity={0.7}
                />
            </View>
            <View style={itemContentContainer}>
                <View style={itemContentGroup}>
                    <Text style={itemTitle}>{item.areaName}</Text>
                </View>
                <View style={itemContentGroup}>
                    <Button title="Sahaya Git" onPress={() => { navigation.navigate('AreaDetail', item); }} />
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
        padding: 10
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
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default withNavigation(AreaItem);
