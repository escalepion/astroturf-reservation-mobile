import React from 'react';
import { View, Text, Input } from 'react-native';

export const renderField = ({ input, placeholder, keyboardType, secureTextEntry, meta: { touched, error } }) => (
    <View>
        <Input
            style={{ flex: 1 }}
            {...input}
            keyboardType={keyboardType}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
);

const styles = {
    errorText: {
        fontSize: 10,
        margin: 5,
        color: 'red'
    }
};
