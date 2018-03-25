import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import MainContainer from '../common/MainContainer';

const IndexHeader = () => {
    return (
        <MainContainer>
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
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    }
});

export default IndexHeader;
