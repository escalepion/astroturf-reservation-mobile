import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';

import RowAroundContainer from '../common/RowAroundContainer';
import { StandartButton } from '../common/Buttons';

class DeleteReservationModal extends Component {
    render() {
        const { visible, closeModal, onDeleteConfirm } = this.props;
        return (
            <Modal
                animationType={'slide'}
                transparent
                visible={visible}
                onRequestClose={() => { }}
            >
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <View style={styles.content}>
                            <RowAroundContainer>
                                <StandartButton type='confirm' onPress={onDeleteConfirm}><Text>Sil</Text></StandartButton>
                                <StandartButton type='cancel' onPress={closeModal}><Text>İptal</Text></StandartButton>
                            </RowAroundContainer>
                        </View>
                    </View>
                </View>
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
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    content: {
        minWidth: 300,
        maxWidth: 500
    }
});

export default DeleteReservationModal;
