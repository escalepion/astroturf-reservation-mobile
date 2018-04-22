import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


class ModalContactList extends Component {
    constructor() {
        super();
        this.state = {
            contactList: undefined
        };
    }
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
        const contactList = await Expo.Contacts.getContactsAsync({
            fields: [
                Expo.Contacts.PHONE_NUMBERS,
                Expo.Contacts.EMAILS,
            ],
            // pageSize: 10,
            // pageOffset: 0,
        });
        this.setState({ contactList });
        // if (contacts.total > 0) {
        //     console.log(contacts);
        //     console.log(
        //         'Your first contact is...',
        //         `Name: ${contacts.data[0].name}\n` +
        //         `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
        //         `Emails: ${JSON.stringify(contacts.data[0].emails)}`
        //     );
        // }
    }
    mapContactList() {
        if(this.state.contactList && this.state.contactList.data.length === 0) {
            return <Text>Henüz kişi eklenmemiş</Text>;
        }else if(this.state.contactList && this.state.contactList.data.length > 0) {
            console.log(this.state.contactList);
            return (
                <FlatList
                    data={this.state.contactList.data}
                    renderItem={({ item, index }) => <Text>{item.name && item.name} {item.phoneNumbers && item.phoneNumbers[0].number}</Text>}
                    keyExtractor={(item, index) => index}
                />
            );
        }else {
            return <Text>Liste yükleniyor...</Text>
        }
    }
    render() {
        const {container} = styles;
        return (
            <View style={styles.container}>
                {this.mapContactList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        minHeight: 50,
        maxHeight: 150
    }
});

export default ModalContactList;
