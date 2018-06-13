import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const IndexHeader = (props) => {
    return (
            <View style={styles.container}>
                    <Icon
                        raised
                        name="add"
                        color='#FFFFFF'
                        containerStyle={{ backgroundColor: '#5CB85C' }}
                        onPress={() => { props.navigation.navigate('AddArea'); }}
                    />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10
    }
});

export default withNavigation(IndexHeader);
