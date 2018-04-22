import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BlockCaption = (props) => {
    const {container, containerText} = styles;
    return (
        <View style={container}>
            <Text style={containerText}>{props.children}</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        paddingTop: 20,
        paddingBottom: 20,
    },
    containerText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default BlockCaption;
