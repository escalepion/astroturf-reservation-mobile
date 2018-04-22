import React, { Component } from 'react';
import { 
    Modal, 
    Text, 
    TouchableWithoutFeedback, 
    View, 
    StyleSheet, 
    TouchableOpacity,
    Alert 
} from 'react-native';


class AddReservationModal extends Component {
    componentDidMount() {
        this.showFirstContactAsync();
    }
    async showFirstContactAsync() {
        // Ask for permission to query contacts.
        const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
        if (permission.status !== 'granted') {
            // Permission was denied...
            return;
        }
        const contacts = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            pageSize: 10,
            pageOffset: 0,
        });
        if (contacts.total > 0) {
            console.log(contacts);
            console.log(
                'Your first contact is...',
                `Name: ${contacts.data[0].name}\n` +
                `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
                `Emails: ${JSON.stringify(contacts.data[0].emails)}`
            );
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
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={onAddConfirm}><Text>Ekle</Text></TouchableOpacity>
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
