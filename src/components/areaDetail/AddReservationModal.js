import React, { Component } from 'react';
import { Modal, Text, TouchableWithoutFeedback, View, StyleSheet, TouchableOpacity } from 'react-native';

class AddReservationModal extends Component {
    render() {
        const { visible, closeModal } = this.props;
        return (
            <Modal
                animationType={'slide'}
                transparent
                visible={visible}
                onRequestClose={() => {}}
            >
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.container}>
                        <TouchableOpacity><Text>Ekle</Text></TouchableOpacity>
                        <TouchableOpacity onPress={closeModal}><Text>İptal</Text></TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export default AddReservationModal;
