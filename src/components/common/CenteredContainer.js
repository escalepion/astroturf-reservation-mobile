import React from 'react';
import { View, StyleSheet } from 'react-native';

const CenteredContainer = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CenteredContainer;
