import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import * as actions from '../../actions/auth';

class SignOut extends Component {
    componentWillMount() {
        this.props.userLoggedOut();
    }
    render() {
        return (
            <View>
                    <Text>
                        You are logging out
                    </Text>
            </View>
        );
    }
}

export default connect(null, actions)(SignOut);
