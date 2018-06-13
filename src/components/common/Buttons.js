import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ColoredButtonText = (props) => {
    const { coloredButtonText } = styles;
    return <Text style={coloredButtonText}>{props.children}</Text>
} 

export const CircleButton = (props) => {
    return (
        <TouchableOpacity style={styles.circleButton}>
            {props.children}
        </TouchableOpacity>
    );
};

export const StandartButton = (props) => {
    const { standartButton } = styles;
    const fontBgColor = createButtonBgColor(props.type);
    return (
        <TouchableOpacity onPress={props.onPress} style={[standartButton, { backgroundColor: fontBgColor }]}>
            <ColoredButtonText>{props.children}</ColoredButtonText>
        </TouchableOpacity>
    );
};

const createButtonBgColor = (type) => {
    switch (type) {
        case 'primary':
            return '#337AB7';
        case 'confirm':
            return '#5CB85C';
        case 'cancel':
            return '#F0AD4E';
        default: 
            return '#337AB7';
    }
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
    },
    standartButton: {
        padding: 7.5,
        borderRadius: 4,
        minWidth: 75,
        alignItems: 'center'
    },
    coloredButtonText: {
        color: '#FFFFFF'
    }
});
