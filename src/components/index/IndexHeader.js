import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

import MainContainer from '../common/MainContainer';

const IndexHeader = (props) => {
    return (
        <MainContainer>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { props.navigation.navigate('AddArea'); }}>
                    <Icon
                        raised
                        name="add"
                        color='#FFFFFF'
                        containerStyle={{ backgroundColor: '#5CB85C' }}
                    />
                </TouchableOpacity>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    }
});

export default withNavigation(IndexHeader);
