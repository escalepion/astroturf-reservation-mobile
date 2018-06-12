import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import IndexHeader from '../components/index/IndexHeader';
import Areas from '../components/index/Areas';

class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Areas />
                </ScrollView>
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
