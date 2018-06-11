import React, { Component } from 'react';
import { 
    Modal, 
    Text, 
    View, 
    StyleSheet,
    Alert
} from 'react-native';
import Expo from 'expo';
import { connect } from 'react-redux';
import firebase from 'firebase';

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
        const selectedPerson = this.state.selectedPerson;
        if ((selectedPerson || {}).phoneNumbers) {
            this.props.onAddConfirm(this.state.selectedPerson.phoneNumbers[0].number);
        }
    }

    async refreshContactList() {
        // Ask for permission to query contacts.
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied...
            return;
        }
        const contactList = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            // pageSize: 10,
            // pageOffset: 0,
        });
        const dataRef = 'contactList';
        firebase.database().ref(dataRef)
        .update(contactList);
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
                                        <StandartButton type='confirm' onPress={this.refreshContactList.bind(this)}><Text>Listeyi Güncelle</Text></StandartButton>
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

const mapStateToProps = (state) => {
    return { contactList: state.contacts.contactList };
};

export default connect(mapStateToProps, null)(AddReservationModal);
