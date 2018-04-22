import React, { Component } from 'react';
import { 
    Modal, 
    Text, 
    TouchableWithoutFeedback, 
    View, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';

import ModalContactList from './ModalContactList';
import BlockCaption from '../common/BlockCaption';
import RowAroundContainer from '../common/RowAroundContainer';
import {StandartButton} from '../common/Buttons';

class AddReservationModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerson : undefined
        }
    }
    render() {
        const { visible, closeModal, onAddConfirm } = this.props;
        return (
            <Modal
                animationType={'slide'}
                transparent
                visible={visible}
                onRequestClose={() => { }}
            >
                {/*<TouchableWithoutFeedback onPress={closeModal}>*/}
                    <View style={styles.container}>
                        <View style={styles.contentContainer}>
                            <View style={styles.content}>
                                <BlockCaption>{this.state.selectedPerson ? this.state.selectedPerson : 'Kişi seçiniz'}</BlockCaption>
                                <ModalContactList/>
                                <View style={styles.buttonsContainer}>                                
                                    <RowAroundContainer>
                                        <StandartButton type='confirm' onPress={onAddConfirm}><Text>Ekle</Text></StandartButton>
                                        <StandartButton type='cancel' onPress={closeModal}><Text>İptal</Text></StandartButton>
                                    </RowAroundContainer>  
                                </View>
                            </View>
                        </View>
                    </View>
                {/*</TouchableWithoutFeedback>*/}
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
        backgroundColor: '#FFFFFF',
        alignItems : 'center',
    },
    content: {
        maxWidth: 500,
        minWidth: 300
    },
    buttonsContainer: {
        marginTop: 15,
        marginBottom : 15
    }
});

export default AddReservationModal;
