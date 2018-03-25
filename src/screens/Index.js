import React, { Component } from 'react';
import { View } from 'react-native';

import IndexHeader from '../components/index/IndexHeader';
import Areas from '../components/index/Areas';

class Index extends Component {
    render() {
        return (
            <View>
                <IndexHeader />
                <Areas />
            </View>
        );
    }
}

export default Index;
