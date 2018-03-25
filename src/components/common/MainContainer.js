import React from 'react';
import { View, StyleSheet } from 'react-native';

const MainContainer = (props) => {
    return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        display: 'flex',
        marginTop: 5,
        padding: 5
    }
});

export default MainContainer;
