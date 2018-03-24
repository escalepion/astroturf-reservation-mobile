import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const IndexHeader = () => {
    return (
        <View style={styles.container}>
            <Icon
            raised
            name="ios-add"
            type="ionicon"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }
});

export default IndexHeader;
