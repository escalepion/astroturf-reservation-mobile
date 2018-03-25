import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const renderField = ({ input, placeholder, keyboardType, secureTextEntry, meta: { touched, error } }) => (
    <View>
        <TextInput
            style={{ height: 40 }}
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
