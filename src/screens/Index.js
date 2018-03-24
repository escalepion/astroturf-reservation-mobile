import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IndexHeader from '../components/IndexHeader';

class Index extends Component {
    render() {
        return (
            <IndexHeader />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Index;
