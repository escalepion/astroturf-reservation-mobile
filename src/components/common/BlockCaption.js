import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BlockCaption = (props) => {
    return (
        <View>
            <Text>{props.children}</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container : {

    }
});

export default BlockCaption;
