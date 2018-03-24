import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const IndexHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon
                    raised
                    name="add"
                    color='#FFFFFF'
                    containerStyle={{ backgroundColor: '#6733BA' }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    }
});

export default IndexHeader;
