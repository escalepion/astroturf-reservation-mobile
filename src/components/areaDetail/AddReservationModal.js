import React, { Component } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View } from 'react-native';

class AddReservationModal extends Component {
    render() {
        const { visible, onModalPress } = this.props;
        return (
            <Modal
                animationType={'slide'}
                transparent
                visible={visible}
                onRequestClose={() => { }}
            >
                <TouchableWithoutFeedback onPress={onModalPress}>
                    <View><Text>Add Modal</Text></View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

export default AddReservationModal;
