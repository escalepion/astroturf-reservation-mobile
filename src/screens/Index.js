import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import IndexHeader from '../components/index/IndexHeader';
import Areas from '../components/index/Areas';

class Index extends Component {
    render() {
        return (
            <ScrollView>
                <IndexHeader />
                <Areas />
            </ScrollView>
        );
    }
}

export default Index;
