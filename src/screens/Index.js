import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import IndexHeader from '../components/index/IndexHeader';
import Areas from '../components/index/Areas';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Areas />
                <IndexHeader />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Index;
