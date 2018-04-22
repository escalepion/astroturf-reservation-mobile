import React from 'react';
import {View, StyleSheet} from 'react-native';

const RowCenterContainer = (props) => {
    const {centerContainer} = styles;
    return (
        <View style={centerContainer}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    centerContainer: {
        flexDirection : 'row',
        justifyContent: 'space-between'
    }
});


export default RowCenterContainer;
