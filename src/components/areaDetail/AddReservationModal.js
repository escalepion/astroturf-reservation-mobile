import React, { Component } from 'react';
import { 
    Modal, 
    Text, 
    View, 
    StyleSheet
} from 'react-native';

import ModalContactList from './ModalContactList';
import BlockCaption from '../common/BlockCaption';
import RowAroundContainer from '../common/RowAroundContainer';
import { StandartButton } from '../common/Buttons';

class AddReservationModal extends Component {
    constructor() {
        super();
        this.state = {
            selectedPerson: undefined
        };
    }
    selectPerson(selectedPerson) {
        this.setState({ selectedPerson });
    }
    handleConfirmPress() {
        if (this.state.selectedPerson) {
            this.props.onAddConfirm(this.state.selectedPerson.id);
        }
    }
    renderSelectedPersonString() {
        const name = this.state.selectedPerson.name ? this.state.selectedPerson.name : '-';
        const number = this.state.selectedPerson.phoneNumbers ? this.state.selectedPerson.phoneNumbers[0].number : '-';
        return `${name} (${number})`;
    }
    render() {
        const { visible, closeModal } = this.props;
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
                                <BlockCaption>{this.state.selectedPerson ? this.renderSelectedPersonString() : 'Kişi seçiniz'}</BlockCaption>
                                <ModalContactList selectPerson={(selectedPerson) => this.selectPerson(selectedPerson)}/>
                                <View style={styles.buttonsContainer}>                                
                                    <RowAroundContainer>
                                        <StandartButton type='confirm' onPress={this.handleConfirmPress.bind(this)}><Text>Ekle</Text></StandartButton>
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
        alignItems: 'center',
    },
    content: {
        maxWidth: 500,
        minWidth: 300
    },
    buttonsContainer: {
        marginTop: 15,
        marginBottom: 15
    }
});

export default AddReservationModal;
