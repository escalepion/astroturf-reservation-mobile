import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MainContainer from '../common/MainContainer';
import AreaItem from './AreaItem';

class Areas extends Component {
    render() {
        return (
            <MainContainer>
                <AreaItem />
            </MainContainer>
        );
    }
}

export default Areas;
