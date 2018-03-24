import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export const CircleButton = (props) => {
    return (
        <TouchableOpacity style={styles.circleButton}>
            {props.children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    circleButton: {
        height: 25,
        width: 25,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#727272',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }
});
