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
                            <BlockCaption>{this.state.selectedPerson ? this.state.selectedPerson : 'Kişi seçiniz'}</BlockCaption>
                            <ModalContactList/>
                            <TouchableOpacity onPress={onAddConfirm}><Text>Ekle</Text></TouchableOpacity>
                            <TouchableOpacity onPress={closeModal}><Text>İptal</Text></TouchableOpacity>
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
        alignItems : 'center'
    }
});

export default AddReservationModal;
