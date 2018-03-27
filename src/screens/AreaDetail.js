import React from 'react';
import { View } from 'react-native';

import Hours from '../components/areaDetail/Hours';
import DatePicker from '../components/areaDetail/DatePicker';

const AreaDetail = () => {
    return (
        <View>
            <DatePicker />
            <Hours />
        </View>
    );
};

export default AreaDetail;
